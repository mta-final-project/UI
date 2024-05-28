import { FC } from "react";
import Box from "@mui/material/Box";
import SelectedCourseProvider from "../../hooks/context/SelectedCourse.tsx";
import CourseSearch from "./CourseSearch.tsx";
import FilesTable from "./FilesTable/FilesTable.tsx";



const Files: FC = () => {
    return (
        <Box>
            <SelectedCourseProvider>
                <CourseSearch />
                <FilesTable />
                <></>
            </SelectedCourseProvider>
        </Box>
    )
}

export default Files;