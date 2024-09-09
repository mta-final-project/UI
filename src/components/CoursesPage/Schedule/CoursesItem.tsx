import { FC } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { ILesson, IGroupInfo, ICourseInfo } from "../../../types/schedule.ts";

interface CoursesItemProps {
    lesson: ILesson;
    group: IGroupInfo;
    course: ICourseInfo;
}

const CoursesItem: FC<CoursesItemProps> = ({ lesson, group, course }) => {
    const { day, start_time, end_time, classroom } = lesson;
    const startHour = parseInt(start_time.split(":")[0]);
    const endHour = parseInt(end_time.split(":")[0]);
    const startMinute = parseInt(start_time.split(":")[1]);
    const endMinute = parseInt(end_time.split(":")[1]);

    const positionTop = ((startHour - 8) * 60 + startMinute) / (14 * 60) * 100;
    const height = ((endHour - startHour) * 60 + (endMinute - startMinute)) / (14 * 60) * 100;

    // Adjust day calculation for Hebrew calendar (Sunday = 0)
    const adjustedDay = day === 6 ? 5 : day - 1;

    return (
        <Paper
            sx={{
                position: "absolute",
                top: `${positionTop}%`,
                right: `${adjustedDay * (100 / 6) + 4.17}%`,
                width: `${100 / 6}%`,
                height: `${height}%`,
                padding: "2px",
                borderRadius: "4px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                '&:hover': {
                    zIndex: 1,
                    height: 'auto',
                    maxHeight: '200px',
                    overflowY: 'auto'
                }
            }}
        >
            <Typography variant="subtitle2" sx={{ color: "#1C273A", fontWeight: "bold", fontSize: "0.7rem" }}>
                {course.subject}
            </Typography>
            <Typography variant="body2" sx={{ color: "#1C273A", fontSize: "0.6rem" }}>
                {group.description}
            </Typography>
            <Typography variant="body2" sx={{ color: "#1C273A", fontSize: "0.6rem" }}>
                {start_time} - {end_time}
            </Typography>
            <Typography variant="body2" sx={{ color: "#1C273A", fontSize: "0.6rem" }}>
                {classroom}
            </Typography>
            <Typography variant="caption" sx={{ color: "#1C273A", fontSize: "0.6rem" }}>
                {group.lecturer}
            </Typography>
        </Paper>
    );
};

export default CoursesItem;

