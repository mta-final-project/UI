// import { FC } from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import Paper from "@mui/material/Paper";

// const CoursesItems: FC = () => {

//         // Utility to calculate position and height based on time
//         const getTimePosition = (startHour: number, startMinute: number, endHour: number, endMinute: number) => {
//             const totalMinutesStart = (startHour - 8) * 60 + startMinute;
//             const totalMinutesEnd = (endHour - 8) * 60 + endMinute;
//             const totalMinutes = 14 * 60; // Total minutes from 08:00 to 22:00

//             const top = (totalMinutesStart / totalMinutes) * 200; // Increase the gap between hours
//             const height = ((totalMinutesEnd - totalMinutesStart) / totalMinutes) * 200;

//             return { top: `${top}%`, height: `${height}%` };
//         };

//     return (
//         <Box sx={{ position: 'relative', height: 'calc(100% - 40px)' }}>

//         {/* Course Item 1 - Sunday (ראשון) */}
//         <Paper sx={{
//             position: 'absolute',
//             right: { xs: '0%', sm: '0%' }, // Align under Sunday
//             width: { xs: '20%', sm: '14%' },
//             backgroundColor: '#E1E9FF',
//             padding: '10px',
//             borderRadius: '12px',
//             color: '#3F51B5',
//             boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             textAlign: 'right',
//             borderLeft: '5px solid #3F51B5',
//             ...getTimePosition(9, 0, 11, 0), // From 09:00 to 11:00
//         }}>
//             <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: { xs: '12px', sm: '14px' }, color: '#3F51B5' }}>לינארית 1 שיעור</Typography>
//             <Typography variant="body2" sx={{ fontSize: { xs: '10px', sm: '12px' }, color: '#A0A3BD' }}>פרופסור רנה דקארט</Typography>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
//                 <Typography variant="caption" sx={{ fontSize: '10px', color: '#3F51B5' }}>09:00 - 11:00</Typography>
//                 <AccessTimeIcon sx={{ fontSize: '12px', color: '#3F51B5' }} />
//             </Box>
//         </Paper>

//         {/* Course Item 2 - Monday (שני) */}
//         <Paper sx={{
//             position: 'absolute',
//             right: { xs: '16.66%', sm: '16.66%' }, // Align under Monday
//             width: { xs: '20%', sm: '14%' },
//             backgroundColor: '#FBEAFF',
//             padding: '10px',
//             borderRadius: '12px',
//             color: '#B830FF',
//             boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             textAlign: 'right',
//             borderLeft: '5px solid #B830FF',
//             ...getTimePosition(11, 0, 14, 20), // From 11:00 to 14:20
//         }}>
//             <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: { xs: '12px', sm: '14px' }, color: '#B830FF' }}>תכנות מתקדם שיעור</Typography>
//             <Typography variant="body2" sx={{ fontSize: { xs: '10px', sm: '12px' }, color: '#A0A3BD' }}>פרופסור רנה דקארט</Typography>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
//                 <Typography variant="caption" sx={{ fontSize: '10px', color: '#B830FF' }}>11:00 - 14:20</Typography>
//                 <AccessTimeIcon sx={{ fontSize: '12px', color: '#B830FF' }} />
//             </Box>
//         </Paper>

//         {/* Course Item 3 - Wednesday (רביעי) */}
//         <Paper sx={{
//             position: 'absolute',
//             right: { xs: '49.98%', sm: '49.98%' }, // Align under Wednesday
//             width: { xs: '20%', sm: '14%' },
//             backgroundColor: '#EFE8FF',
//             padding: '10px',
//             borderRadius: '12px',
//             color: '#7A4BFF',
//             boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             textAlign: 'right',
//             borderLeft: '5px solid #7A4BFF',
//             ...getTimePosition(11, 15, 15, 45), // From 11:15 to 15:45
//         }}>
//             <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: { xs: '12px', sm: '14px' }, color: '#7A4BFF' }}>לינארית 1 תרגול</Typography>
//             <Typography variant="body2" sx={{ fontSize: { xs: '10px', sm: '12px' }, color: '#A0A3BD' }}>פרופסור רנה דקארט</Typography>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
//                 <Typography variant="caption" sx={{ fontSize: '10px', color: '#7A4BFF' }}>11:15 - 15:45</Typography>
//                 <AccessTimeIcon sx={{ fontSize: '12px', color: '#7A4BFF' }} />
//             </Box>
//         </Paper>

//         {/* Course Item 4 - Friday (שישי) */}
//         <Paper sx={{
//             position: 'absolute',
//             right: { xs: '83.3%', sm: '83.3%' }, // Align under Friday
//             width: { xs: '20%', sm: '14%' },
//             backgroundColor: '#DCEFFD',
//             padding: '10px',
//             borderRadius: '12px',
//             color: '#007FFF',
//             boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             textAlign: 'right',
//             borderLeft: '5px solid #007FFF',
//             ...getTimePosition(8, 15, 10, 45), // From 08:15 to 10:45
//         }}>
//             <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: { xs: '12px', sm: '14px' }, color: '#007FFF' }}>חדווא 2 שיעור</Typography>
//             <Typography variant="body2" sx={{ fontSize: { xs: '10px', sm: '12px' }, color: '#A0A3BD' }}>פרופסור רנה דקארט</Typography>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
//                 <Typography variant="caption" sx={{ fontSize: '10px', color: '#007FFF' }}>08:15 - 10:45</Typography>
//                 <AccessTimeIcon sx={{ fontSize: '12px', color: '#007FFF' }} />
//             </Box>
//         </Paper>
//         </Box>
//     )

// }

// export default CoursesItems;


// src/components/CoursesPage/Schedule/CoursesItems.tsx

import { FC } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

type Lesson = {
    day: number;
    start_time: string;
    end_time: string;
    classroom: string;
};

type Group = {
    group_id: number;
    description: string;
    lecturer: string;
    type: {
        number: number;
        description: string;
    };
};

interface CoursesItemsProps {
    lesson: Lesson;
    group: Group;
}

const CoursesItem: FC<CoursesItemsProps> = ({ lesson, group }) => {
    const { day, start_time, end_time, classroom } = lesson;
    const positionTop = (parseInt(start_time.split(":")[0]) - 8) * 6.66; // assuming 8 AM is the start time and each hour is ~6.66% of the container's height
    const height = (parseInt(end_time.split(":")[0]) - parseInt(start_time.split(":")[0])) * 6.66;

    return (
        <Paper
            sx={{
                position: "absolute",
                top: `${positionTop}%`,
                left: `${day * 16.66}%`, // assuming 6 days with 16.66% each
                width: "16.66%",
                height: `${height}%`,
                backgroundColor: "#E1E8F1",
                padding: "5px",
                borderRadius: "4px",
            }}
        >
            <Typography variant="subtitle2" sx={{ color: "#1C273A", fontWeight: "bold" }}>
                {group.description}
            </Typography>
            <Typography variant="body2" sx={{ color: "#1C273A" }}>
                {start_time} - {end_time}
            </Typography>
            <Typography variant="body2" sx={{ color: "#1C273A" }}>
                {classroom}
            </Typography>
            <Typography variant="caption" sx={{ color: "#1C273A" }}>
                {group.lecturer}
            </Typography>
        </Paper>
    );
};

export default CoursesItem;
