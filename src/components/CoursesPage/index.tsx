import React, { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MainTitle from "./Cosmetics/MainTitle.tsx";
import CoursesSearchBar from "./SearchAndResult/CoursesSearchBar.tsx";
import CoursesResults from "./SearchAndResult/CoursesResults.tsx";
import CoursesThatAdded from "./AddedCoursesList/CoursesThatAdded.tsx";
import ScheduleView from "./ScheduleView/ScheduleView.tsx";

const Courses: FC = () => {
    return (
        <Box sx={{ backgroundColor: '#0A1929', minHeight: '100vh', color: '#C9D1D9', padding: '20px', direction: 'rtl', overflowY: 'auto' }}>
            <Grid container spacing={2}>

                {/* Main Title */}
                <MainTitle/>

                {/* Sidebar- Right side */}
                <Grid item xs={12} md={3}>
                    <Box sx={{ border: '1px solid #30363D', borderRadius: '10px', padding: '20px', backgroundColor: '#1C273A', minHeight: '100%', textAlign: 'right' }}>
                        <CoursesSearchBar />
                        <CoursesResults />
                        <CoursesThatAdded />
                    </Box>
                </Grid>

                {/* Schedule Area- Left side */}
                <ScheduleView/>

            </Grid>
        </Box>
    );
};

export default Courses;
