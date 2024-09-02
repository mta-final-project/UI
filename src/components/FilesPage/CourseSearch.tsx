import { FC, SyntheticEvent } from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { IDriveFolder } from "../../types/files.ts"
import { useSetSelectedCourseFolders } from "../../hooks/context/SelectedCourseFolder.tsx";
import useSubFolders from "../../hooks/query/useFolders.ts";

const CourseSearch: FC = () => {
    const { data: courses } = useSubFolders();
    const setSelectedCourseFolders = useSetSelectedCourseFolders();

    const handleCourseChange = (_event: SyntheticEvent, newValue: IDriveFolder | null) => {
        setSelectedCourseFolders(newValue);
        
    }

    return (
        <Autocomplete options={courses}
                      getOptionLabel={(option: IDriveFolder) => option}
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