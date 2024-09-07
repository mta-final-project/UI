// import { FC } from "react";
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Typography from "@mui/material/Typography";
// import { useSelectedCourseContext } from "../../../hooks/context/SelectedCourseData";
// import { useState } from "react";
// import Button from "@mui/material/Button";
// import { useQueryClient } from "react-query";
// import { getScheduleOptions } from "../../../services/CoursesService";

// const CoursesThatAdded: FC = () => {
//   const { selectedCourses, removeCourse } = useSelectedCourseContext();
//   const queryClient = useQueryClient();
//   const [loading, setLoading] = useState(false);

//   const handleCreateSchedules = async () => {
//     setLoading(true);
//     try {
//       const courseIds = selectedCourses.map((course) => course.id);
//       const options = await getScheduleOptions(courseIds);
//       queryClient.setQueryData("scheduleOptions", options); // Store options in query client
//     } catch (error) {
//       console.error("Error creating schedule options:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{ border: "1px solid #58A6FF", borderRadius: "8px", padding: "10px" }}
//     >
//       <Typography
//         variant="h6"
//         sx={{
//           color: "#C9D1D9",
//           marginBottom: "10px",
//           fontSize: "16px",
//           fontWeight: "bold",
//         }}
//       >
//         הקורסים שנוספו עד כה
//       </Typography>
//       <List sx={{ padding: 0 }}>
//         {selectedCourses.map((course) => (
//           <ListItem
//             sx={{ padding: "5px 0", alignItems: "center" }}
//             key={course.id}
//           >
//             <ListItemText
//               primary={`${course.subject} (${course.department})`}
//               sx={{ color: "#C9D1D9", fontSize: "14px", textAlign: "right" }}
//             />
//             <IconButton
//               onClick={() => removeCourse(course.id)}
//               sx={{ color: "#58A6FF", padding: 0, marginLeft: "10px" }}
//             >
//               <DeleteIcon />
//             </IconButton>
//           </ListItem>
//         ))}
//       </List>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleCreateSchedules}
//         disabled={loading || selectedCourses.length === 0}
//         sx={{ marginTop: "10px" }}
//       >
//         {loading ? "Creating..." : "Create Optional Schedules"}
//       </Button>
//     </Box>
//   );
// };

// export default CoursesThatAdded;


// src/components/CoursesPage/CourseSelection/CoursesThatAdded.tsx

import { FC, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useQueryClient } from "react-query";
import { getScheduleOptions } from "../../services/CoursesService.ts";
import { useSelectedCourseContext } from "../../hooks/context/SelectedCourseData.tsx";

const CoursesThatAdded: FC = () => {
	const { selectedCourses, removeCourse, setSelectedSchedule } = useSelectedCourseContext();
	const queryClient = useQueryClient();
	const [loading, setLoading] = useState(false);

	const handleCreateSchedules = async () => {
		setLoading(true);
		try {
			const courseIds = selectedCourses.map((course) => course.id);
			const options = await getScheduleOptions(courseIds.map(String));
			console.log("Schedule Options from API:", options);
			queryClient.setQueryData("scheduleOptions", options); // Store options in query client
			if (options.length > 0) {
				setSelectedSchedule(options[0]); // Automatically select the first option for now
			}
		} catch (error) {
			console.error("Error creating schedule options:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box sx={{ border: "1px solid #58A6FF", borderRadius: "8px", padding: "10px" }}>
			<Typography
				variant="h6"
				sx={{
					color: "#C9D1D9",
					marginBottom: "10px",
					fontSize: "16px",
					fontWeight: "bold",
				}}
			>
				הקורסים שנוספו עד כה
			</Typography>
			<List sx={{ padding: 0 }}>
				{selectedCourses.map((course) => (
					<ListItem sx={{ padding: "5px 0", alignItems: "center" }} key={course.id}>
						<ListItemText
							primary={`${course.subject} (${course.department})`}
							sx={{ color: "#C9D1D9", fontSize: "14px", textAlign: "right" }}
						/>
						<IconButton onClick={() => removeCourse(course.id)} sx={{ color: "#58A6FF", padding: 0, marginLeft: "10px" }}>
							<DeleteIcon />
						</IconButton>
					</ListItem>
				))}
			</List>
			<Button
				variant="contained"
				color="primary"
				onClick={handleCreateSchedules}
				disabled={loading || selectedCourses.length === 0}
				sx={{ marginTop: "10px" }}
			>
				{loading ? "Creating..." : "Create Optional Schedules"}
			</Button>
		</Box>
	);
};

export default CoursesThatAdded;
