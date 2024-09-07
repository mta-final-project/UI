import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useQuery } from "react-query";
import { useSelectedCourseContext } from "../../../hooks/context/SelectedCourseData";
import { getScheduleOptions } from "../../../services/CoursesService";
import { ISchedule } from "../../../types/schedule";




const ScheduleOptions: FC = () => {
  const { selectedCourses, setSelectedSchedule } = useSelectedCourseContext();
  const { data: scheduleOptions = [], refetch } = useQuery(
    ['scheduleOptions', selectedCourses],
    () => getScheduleOptions(selectedCourses.map(course => course.id.toString())),
    { enabled: selectedCourses.length > 0 }
  );

  console.log("Schedule Options from API:", scheduleOptions);

  const handleSelectOption = (option: ISchedule) => {
    console.log("Selecting Option:", option);
    setSelectedSchedule(option);
  };

  return (
    <Box sx={{ border: '1px solid #58A6FF', borderRadius: '8px', padding: '10px', marginTop: '20px' }}>
      <Typography variant="h6" sx={{ color: '#C9D1D9', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
        אפשרויות לוח זמנים
      </Typography>
      {scheduleOptions.length > 0 ? (
        scheduleOptions.map((option: ISchedule, index: number) => (
          <Box key={index} sx={{ marginBottom: '10px' }}>
            <Typography variant="subtitle1" sx={{ color: '#C9D1D9', fontWeight: 'bold' }}>
              Option {index + 1}
            </Typography>
            {option.groups.map((group, groupIndex) => (
              <Box key={groupIndex}>
                <Typography variant="body2" sx={{ color: '#C9D1D9' }}>
                  {group.course.subject} - {group.description}
                </Typography>
                {group.lessons.map((lesson, lessonIndex) => (
                  <Typography key={lessonIndex} variant="body2" sx={{ color: '#C9D1D9' }}>
                    Day: {lesson.day}, {lesson.start_time} - {lesson.end_time}, Room: {lesson.classroom}
                  </Typography>
                ))}
              </Box>
            ))}
            <Button variant="outlined" color="primary" onClick={() => handleSelectOption(option)}>
              Select Option {index + 1}
            </Button>
          </Box>
        ))
      ) : (
        <Typography sx={{ color: '#C9D1D9', textAlign: 'center' }}>
          No schedule options available
        </Typography>
      )}
      <Button variant="contained" color="primary" onClick={() => refetch()}>
        Refresh Schedule Options
      </Button>
    </Box>
  );
};

export default ScheduleOptions;