import { FC, useState } from "react";
// import { useQueryClient } from "react-query";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CoursesSearchBar from "./CoursesSearchBar.tsx";
import SelectedCourses from "./SelectedCourses.tsx";
import Schedule from "./Schedule/Schedule";
import ScheduleOptions from "./ScheduleOptions.tsx";
import { ICourse, ISchedule } from "../../types/schedule.ts";
import {getScheduleOptions} from "../../services/CoursesService.ts";


const CoursesPage: FC = () => {
	const [selectedCourses, setSelectedCourses] = useState<ICourse[]>([]);
	const [scheduleOptions, setScheduleOptions] = useState<ISchedule[]>([]);
	const [selectedOption, setSelectedOption] = useState<number>(0);
	// const queryClient = useQueryClient();

	const addCourse = (course: ICourse) => {
		console.log("In add course")
		setSelectedCourses(prev => {
			if (prev.includes(course))
				return prev;
			return [...prev, course];
		});
		console.log("selected courses:", selectedCourses);
	}

	const removeCourse = (course: ICourse) => {
		setSelectedCourses(prev => {
			return prev.filter(item => item.id !== course.id)
		})
	}

	const handleCreateScheduleOptions = async () => {
		if (selectedCourses.length < 1) {
			return;
		}
		const courseIds = selectedCourses.map((course) => course.id);

		try {
			const options = await getScheduleOptions(courseIds);
			// queryClient.setQueryData("scheduleOptions", options); // Store options in query client
			setScheduleOptions(() => options);
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
				<Schedule />
			</Grid>
		</Box>
	);
};

export default CoursesPage;
