import {FC, useState} from "react";
// import { useQueryClient } from "react-query";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CoursesSearchBar from "./CoursesSearchBar.tsx";
import SelectedCourses from "./SelectedCourses.tsx";
import Schedule from "./Schedule/Schedule";
import ScheduleOptions from "./ScheduleOptions.tsx";
import {ICourse, ISchedule} from "../../types/schedule.ts";
import {getScheduleOptions} from "../../services/CoursesService.ts";
import {options} from "axios";


const CoursesPage: FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<ICourse[]>([]);
  const [scheduleOptions, setScheduleOptions] = useState<ISchedule[]>([]);
  const [selectedOption, setSelectedOption] = useState<number>(-1);

  const unsetSelectedOption = () => {
    setSelectedOption(-1);
  }

  const addCourse = (course: ICourse) => {
    setSelectedCourses(prev => {
      if (prev.includes(course))
        return prev;
      return [...prev, course];
    });
    unsetSelectedOption();
  }

  const removeCourse = (course: ICourse) => {
    setSelectedCourses(prev => {
      return prev.filter(item => item.id !== course.id)
    })
    unsetSelectedOption();
  }

  const handleCreateScheduleOptions = async () => {
    if (selectedCourses.length < 1) {
      return;
    }
    const courseIds = selectedCourses.map((course) => course.id);

    try {
      const options = await getScheduleOptions(courseIds);
      setScheduleOptions(() => options);
      if (0 < options.length) {
        setSelectedOption(0);
      }
    } catch (error) {
      console.error("Error creating schedule options:", error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0A1929",
        minHeight: "100vh",
        color: "#C9D1D9",
        padding: "20px",
        direction: "rtl",
        overflowY: "auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              border: "1px solid #30363D",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#1C273A",
              minHeight: "100%",
              textAlign: "right",
            }}
          >
            <CoursesSearchBar
              addCourse={addCourse}
            />
            <SelectedCourses
              selectedCourses={selectedCourses}
              removeCourse={removeCourse}
            />
            <ScheduleOptions
              scheduleOptions={scheduleOptions}
              handleCreateScheduleOptions={handleCreateScheduleOptions}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </Box>
        </Grid>
        <Schedule
          scheduleOptions={scheduleOptions}
          selectedOption={selectedOption}
        />
      </Grid>
    </Box>
  );
};

export default CoursesPage;
