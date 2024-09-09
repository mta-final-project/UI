import {FC} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import {ICourse} from "../../types/schedule.ts";
import IconButton from "@mui/material/IconButton";

interface IProps {
  selectedCourses: ICourse[],
  removeCourse: (course: ICourse) => void
}

const SelectedCourses: FC<IProps> = ({selectedCourses, removeCourse}) => {
  console.log("SelectedCourses:", selectedCourses.length, selectedCourses)
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
      <List sx={{padding: 0}}>
        {selectedCourses.length > 0 ? (
          selectedCourses.map((course) => (
            <ListItem sx={{ padding: "5px 0", alignItems: "center" }} key={course.id}>
              <ListItemText
                primary={`${course.subject} (${course.department})`}
                sx={{ color: "#C9D1D9", fontSize: "14px", textAlign: "right" }}
              />
              <IconButton onClick={() => removeCourse(course)} sx={{ color: "#58A6FF", padding: 0, marginLeft: "10px" }}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        ) : (
          <Typography sx={{color: "#C9D1D9", textAlign: "center"}}>
            No course selected
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default SelectedCourses;
