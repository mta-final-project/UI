import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CoursesSearchBar from "./CoursesSearchBar.tsx";
import CoursesResults from "./CourseResults.tsx";
import CoursesThatAdded from "./CoursesThatAdded.tsx";
import Schedule from "./Schedule/Schedule";
import ScheduleOptions from "./ScheduleOptions.tsx";
import { ICourse, ISchedule } from "../../types/schedule.ts";


const CoursesPage: FC = () => {
	const [selectedCourses, setSelectedCourses] = useState<ICourse[]>([]);
	const [scheduleOptions, setSchdeuleOptions] = useState<ISchedule[]>([]);
	const [selectedOption, setSelectedOption] = useState<number>(-1);

	const addCourse = (course: ICourse) => {
		setSelectedCourses(prev => {
			if (prev.includes(course))
				return prev;
			return [...prev, course];
		})
	}

	const removeCourse = (course: ICourse) => {
		setSelectedCourses(prev => {
			return prev.filter(item => item !== course)
		})
	}


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
						<CoursesSearchBar addCourse={addCourse} />
						<CoursesResults selectedCourses={selectedCourses}/>
						<CoursesThatAdded />
						<ScheduleOptions />
					</Box>
				</Grid>
				<Schedule />
			</Grid>
		</Box>
	);
};

export default CoursesPage;
