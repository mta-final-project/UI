import { FC, SyntheticEvent } from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { IDriveCourse } from "../../types/files.ts"
import { useSetSelectedCourse } from "../../hooks/context/SelectedCourse.tsx";
import useCourses from "../../hooks/query/useCourses.ts";

const CourseSearch: FC = () => {
    const { data: courses } = useCourses();
    const setSelectedCourse = useSetSelectedCourse();

    const handleCourseChange = (_event: SyntheticEvent, newValue: IDriveCourse | null) => {
        setSelectedCourse(newValue);
    }

    return (
        <Autocomplete options={courses}
                      getOptionLabel={(option: IDriveCourse) => option}
                      onChange={handleCourseChange}
                      renderInput={(params) => (
                          <TextField {...params}
                                     label="Choose Course"
                                     value="outlined"
                          />
                      )}
        />
    )
}

export default CourseSearch;