import {FC} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CoursesItem from "./CoursesItem.tsx";
import {ISchedule} from "../../../types/schedule.ts";


interface IProps {
  scheduleOptions: ISchedule[]
  selectedOption: number
}

const ScheduleView: FC<IProps> = ({scheduleOptions, selectedOption}) => {
  const selectedSchedule: ISchedule | undefined = scheduleOptions[selectedOption];
  const hours = Array.from({length: 15}, (_, index) => `${index + 8}:00`);

  return (
    <Grid item xs={12} md={9}>
      <Box
        sx={{
          border: "1px solid #30363D",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "#1C273A",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={0} sx={{borderBottom: "1px solid #30363D", paddingBottom: "10px"}}>
          {["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי"].map((day) => (
            <Grid item xs={2} key={day}>
              <Typography
                variant="h6"
                sx={{
                  color: "#C9D1D9",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {day}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box sx={{position: "relative", flexGrow: 1}}>
          {hours.map((hour) => (
            <Box
              key={hour}
              sx={{
                position: "absolute",
                top: `${((parseInt(hour) - 8) / 14) * 100}%`,
                left: 0,
                width: "100%",
                height: "1px",
                backgroundColor: "#30363D",
              }}
            >{hour}</Box>
          ))}
          {selectedSchedule && (
            selectedSchedule.groups.map((group) =>
              group.lessons.map((lesson) => (
                <CoursesItem
                  key={`${lesson.day}-${lesson.start_time}-${lesson.end_time}`}
                  lesson={lesson}
                  group={group}
                />
              ))
            )
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default ScheduleView;
