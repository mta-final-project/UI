import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {ICourse} from "../../types/schedule.ts";

interface IProps {
    selectedCourses: ICourse[]
}

const CoursesResults: FC<IProps> = ({ selectedCourses }) => {
  return (
    <Box
      sx={{
        border: "1px solid #58A6FF",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#C9D1D9",
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        הנה מה שמצאנו עבורך...
      </Typography>
      <List sx={{ padding: 0 }}>
        {selectedCourses.length > 0 ? (
          selectedCourses.map((course) => (
            <div key={course.id}>
              {course.lectures &&
                course.lectures.map((lecture) => (
                  <ListItem
                    button
                    sx={{ padding: "5px 0", alignItems: "center" }}
                    key={lecture.group_id}
                  >
                    <ListItemText
                      primary={`${course.subject} - ${lecture.description}`}
                      sx={{
                        color: "#C9D1D9",
                        fontSize: "14px",
                        textAlign: "right",
                      }}
                    />
                  </ListItem>
                ))}
              {course.exercises &&
                course.exercises.map((exercise) => (
                  <ListItem
                    button
                    sx={{ padding: "5px 0", alignItems: "center" }}
                    key={exercise.group_id}
                  >
                    <ListItemText
                      primary={`${course.subject} - ${exercise.description}`}
                      sx={{
                        color: "#C9D1D9",
                        fontSize: "14px",
                        textAlign: "right",
                      }}
                    />
                  </ListItem>
                ))}
            </div>
          ))
        ) : (
          <Typography sx={{ color: "#C9D1D9", textAlign: "center" }}>
            No course selected
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default CoursesResults;
