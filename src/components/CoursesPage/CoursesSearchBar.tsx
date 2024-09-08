import {FC, SyntheticEvent} from "react";
import {Autocomplete, TextField} from "@mui/material";
import {ICourse} from "../../types/schedule.ts";
import useCourses from "../../hooks/query/useCourses.ts";

interface IProps {
    addCourse: (course: ICourse) => void;
}

const CoursesSearchBar: FC<IProps> = ({ addCourse }) => {
    const {data: courses = []} = useCourses();

    const handleCourseChange = (
        _event: SyntheticEvent,
        newValue: ICourse | null
    ) => {
        if (newValue) {
            addCourse(newValue);
        }
    };

    return (
        <Autocomplete
            options={courses}
            getOptionLabel={(option: ICourse) => option.subject}
            getOptionKey={(option: ICourse) => option.id}
            onChange={handleCourseChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="חיפוש"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                        backgroundColor: "#0D1117",
                        input: {color: "#C9D1D9", padding: "10px", textAlign: "right"},
                        fieldset: {borderColor: "#30363D"},
                        borderRadius: "8px",
                    }}
                />
            )}
        />
    );
};

export default CoursesSearchBar;
