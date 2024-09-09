import { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CoursesItem from "./CoursesItem.tsx";
import { ISchedule } from "../../../types/schedule.ts";

interface IProps {
  scheduleOptions: ISchedule[]
  selectedOption: number
}

const Schedule: FC<IProps> = ({ scheduleOptions, selectedOption }) => {
  const selectedSchedule: ISchedule | undefined = scheduleOptions[selectedOption];
  const hours = Array.from({ length: 15 }, (_, index) => `${index + 8}:00`);

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
        <Grid container spacing={0} sx={{ borderBottom: "1px solid #30363D", paddingBottom: "10px" }}>
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

        <Box sx={{ position: "relative", flexGrow: 1, marginTop: "20px", height: "600px" }}>
          {hours.map((hour, index) => (
            <Box
              key={hour}
              sx={{
                position: "absolute",
                top: `${(index / 14) * 100}%`,
                right: 0,
                width: "100%",
                borderTop: "1px solid #30363D",
                height: "1px",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  position: "absolute",
                  top: "-10px",
                  right: "5px",
                  color: "#C9D1D9",
                  fontSize: "10px",
                }}
              >
                {hour}
              </Typography>
            </Box>
          ))}
          {selectedSchedule && (
            selectedSchedule.groups.map((group) =>
              group.lessons.map((lesson) => (
                <CoursesItem
                  key={`${lesson.day}-${lesson.start_time}-${lesson.end_time}`}
                  lesson={lesson}
                  group={group}
                  course={group.course}
                />
              ))
            )
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default Schedule;


// import { FC, useMemo } from "react";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import CoursesItem from "./CoursesItem.tsx";
// import { ISchedule } from "../../../types/schedule.ts";

// interface IProps {
//   scheduleOptions: ISchedule[]
//   selectedOption: number
//   clearOptions: () => void
// }

// const Schedule: FC<IProps> = ({ scheduleOptions, selectedOption, clearOptions }) => {
//   const selectedSchedule: ISchedule | undefined = scheduleOptions[selectedOption];
//   const hours = Array.from({ length: 15 }, (_, index) => `${index + 8}:00`);

//   const subjectColors = useMemo(() => {
//     const colors: { [key: string]: string } = {};
//     const baseColors = ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFDFBA', '#E0BBE4'];

//     if (selectedSchedule) {
//       selectedSchedule.groups.forEach((group, index) => {
//         if (!colors[group.course.subject]) {
//           colors[group.course.subject] = baseColors[index % baseColors.length];
//         }
//       });
//     }
//     return colors;
//   }, [selectedSchedule]);

//   return (
//     <Grid item xs={12} md={9}>
//       <Box
//         sx={{
//           border: "1px solid #30363D",
//           borderRadius: "10px",
//           padding: "10px",
//           backgroundColor: "#1C273A",
//           minHeight: "100%",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Grid container spacing={0} sx={{ borderBottom: "1px solid #30363D", paddingBottom: "10px" }}>
//           <Grid item xs={0.5}></Grid>
//           {["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי"].map((day) => (
//             <Grid item xs={1.9167} key={day}>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "#C9D1D9",
//                   textAlign: "center",
//                   fontSize: "14px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {day}
//               </Typography>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ position: "relative", flexGrow: 1, marginTop: "20px", height: "600px" }}>
//           {hours.map((hour, index) => (
//             <Box
//               key={hour}
//               sx={{
//                 position: "absolute",
//                 top: `${(index / 14) * 100}%`,
//                 right: 0,
//                 width: "100%",
//                 borderTop: "1px solid #30363D",
//                 height: "1px",
//               }}
//             >
//               <Typography
//                 variant="caption"
//                 sx={{
//                   position: "absolute",
//                   top: "-10px",
//                   right: "5px",
//                   color: "#C9D1D9",
//                   fontSize: "10px",
//                 }}
//               >
//                 {hour}
//               </Typography>
//             </Box>
//           ))}
//           {selectedSchedule && (
//             selectedSchedule.groups.map((group) =>
//               group.lessons.map((lesson) => (
//                 <CoursesItem
//                   key={`${lesson.day}-${lesson.start_time}-${lesson.end_time}`}
//                   lesson={lesson}
//                   group={group}
//                   course={group.course}
//                   color={subjectColors[group.course.subject]}
//                 />
//               ))
//             )
//           )}
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

// export default Schedule;