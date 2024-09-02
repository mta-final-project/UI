// import { FC } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

// const CoursesSearchBar: FC = () => {
//     return (
//         <Box sx={{ marginBottom: '20px' }}>
//             <TextField
//             variant="outlined"
//             placeholder="חיפוש"
//             size="small"
//             fullWidth
//             sx={{
//                 backgroundColor: '#0D1117',
//                 input: { color: '#C9D1D9', padding: '10px', textAlign: 'right' },
//                 fieldset: { borderColor: '#30363D' },
//                 borderRadius: '8px',
//             }}
//         />
//     </Box>
//     )
// }

// export default CoursesSearchBar;


import { FC, SyntheticEvent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { ICourse } from "../../../types/Course";
import {  useSetSelectedCourse } from "../../../hooks/context/SelectedCourse";
import useCourses from "../../../hooks/query/useCourses";

const CourseSearch: FC = () => {
    const { data: courses =[]} = useCourses();
    const setSelectedCourse = useSetSelectedCourse();

    const handleCourseChange = (_event: SyntheticEvent, newValue: ICourse | null) => {
        setSelectedCourse(newValue);
    }

    return (
        <Autocomplete
            options={courses}
            getOptionLabel={(option: ICourse) => option.subject}
            onChange={handleCourseChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose Course"
                    variant="outlined"
                />
            )}
        />
    );
}
export default CourseSearch;

