import { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CoursesSearchBar from "./CourseSelection/CoursesSearchBar";
import CoursesResults from "./CourseSelection/CourseResults";
import CoursesThatAdded from "./CourseSelection/CoursesThatAdded";
import Schedule from "./Schedule/Schedule";
import { SelectedCourseProvider } from "../../hooks/context/SelectedCourseData";
import ScheduleOptions from "./Schedule/ScheduleOptions";
const Courses: FC = () => {
	return (
		<SelectedCourseProvider>
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
							<CoursesSearchBar />
							<CoursesResults />
							<CoursesThatAdded />
							<ScheduleOptions />
						</Box>
					</Grid>
					<Schedule />
				</Grid>
			</Box>
		</SelectedCourseProvider>
	);
};

export default Courses;
