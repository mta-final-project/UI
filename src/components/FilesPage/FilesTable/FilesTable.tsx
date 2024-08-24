// import { FC, useState, SyntheticEvent } from "react";
// import { Tabs, Tab, TableContainer, Paper, Table } from "@mui/material";
// import FilesTableHeader from "./FilesTableHeader";
// import FileTableBody from "./FileTableBody";
// import useCourses from "../../../hooks/query/useCourses";
// import useSelectedCourseFiles from "../../../hooks/query/useSelectedCourseData";
// import { IDriveFolder, IFile } from "../../../types/files";




// const FilesTable: FC = () => {
//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                 <FilesTableHeader />
//                 <FileTableBody />
//             </Table>
//         </TableContainer>
//     )
// }

// export default FilesTable;


// import { FC, useEffect, useState } from "react";
// import { Tabs, Tab, TableContainer, Paper, Table } from "@mui/material";
// import FilesTableHeader from "./FilesTableHeader";
// import FileTableBody from "./FileTableBody";
// import { useSelectedCourse } from "../../../hooks/context/SelectedCourse.tsx";
// // import useSelectedCourseFiles from "../../../hooks/query/useSelectedCourseData.ts";
// // import useSubFolders from "../../../hooks/query/useCourses.ts";
// import { IDriveFolder } from "../../../types/files.ts";
// import { filesApi } from "../../../api/index.ts";

// const FilesTable: FC = () => {
//     const [activeTab, setActiveTab] = useState(0);
//     const selectedCourse = useSelectedCourse();
//    // console.log("selectedCourse",selectedCourse);
//     // const { data: files } = useSelectedCourseFiles(subfolders ? subfolders[activeTab] : null);

//     const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
//         setActiveTab(newValue);
//     };
//     const [subfolders, setSubFolder] = useState([]);

   

//     useEffect(() => {
//         console.log("subfolders",selectedCourse,subfolders);
//         filesApi.get("/list-folders"+"/"+selectedCourse)
//             .then(response => {
//                 const responseData = response.data as IDriveFolder[];
//                 setSubFolder(responseData);
//             }
            

//             )
        
//     }, [selectedCourse]);

//     if (!subfolders) return <></>;

//     return (
//         <>
//             <Tabs value={activeTab} onChange={handleTabChange}>
//                 {subfolders.map((folder, index) => (
//                     <Tab key={index} label={folder} />
//                 ))}
//             </Tabs>
//             <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                     <FilesTableHeader />
//                     <FileTableBody />
//                 </Table>
//             </TableContainer>
//         </>
//     );
// };

// export default FilesTable;



import { FC, useEffect, useState } from "react";
import { Tabs, Tab, TableContainer, Paper, Table } from "@mui/material";
import FilesTableHeader from "./FilesTableHeader";
import FileTableBody from "./FileTableBody";
import { useSelectedCourse } from "../../../hooks/context/SelectedCourse.tsx";
import { IDriveFolder } from "../../../types/files.ts";
import { filesApi } from "../../../api/index.ts";

const FilesTable: FC = () => {
    const selectedCourseFromContext = useSelectedCourse();
    const [selectedCourse, setSelectedCourse] = useState<string | null>(selectedCourseFromContext);
    const [activeTab, setActiveTab] = useState(0);
    const [subfolders, setSubFolder] = useState<IDriveFolder[]>([]);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    useEffect(() => {
        if (selectedCourseFromContext !== selectedCourse) {
            setSelectedCourse(selectedCourseFromContext);
        }
    }, [selectedCourseFromContext]);

    useEffect(() => {
        if (selectedCourse) {
            filesApi.get(`/list-folders/?path=${selectedCourse}`)
                .then(response => {
                    const responseData = response.data as IDriveFolder[];
                    setSubFolder(responseData);
                })
                .catch(error => {
                    console.error("Error fetching subfolders:", error);
                });
        }
    }, [selectedCourse]);

    if (!subfolders.length) return <></>;

    return (
        <>
            <Tabs value={activeTab} onChange={handleTabChange}>
                {subfolders.map((folder, index) => (
                    <Tab key={index} label={folder} />
                ))}
            </Tabs>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <FilesTableHeader />
                    <FileTableBody />
                </Table>
            </TableContainer>
        </>
    );
};

export default FilesTable;
