import { FC, useEffect, useState } from "react";
import { Tabs, Tab, TableContainer, Paper, Table } from "@mui/material";
import FilesTableHeader from "./FilesTableHeader";
import FileTableBody from "./FileTableBody";
import { useSelectedCourseFolders } from "../../../hooks/context/SelectedCourseFolder.tsx";
import { IDriveFolder } from "../../../types/files.ts";
import { filesApi } from "../../../api/index.ts";
import { IFile } from "../../../types/files";

const FilesTable: FC = () => {
    const selectedCourseFromContext = useSelectedCourseFolders();
    const [selectedCourse, setSelectedCourse] = useState<string | null>(selectedCourseFromContext);
    const [activeTab, setActiveTab] = useState(0);
    const [subfolders, setSubFolder] = useState<IDriveFolder[]>([]);
    const [files, setFiles] = useState<IFile[]>([]);


    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    useEffect(() => {
        if (selectedCourseFromContext !== selectedCourse) {
            setSelectedCourse(selectedCourseFromContext);
        }
    }, [selectedCourseFromContext]);

    useEffect(() => {
        // Fetch subfolders and files in parallel
        Promise.all([
            filesApi.get(`/list-folders/?path=${selectedCourse}`),
            filesApi.get(`/list-objects`, { params: { path: selectedCourse } })
        ])
            .then(([foldersResponse, filesResponse]) => {
                const foldersData = foldersResponse.data as IDriveFolder[];
                const filesData = filesResponse.data as IFile[];

                setSubFolder(foldersData);
                setFiles(filesData);
            })
    
    }, [selectedCourse]);
   
    
    if (!subfolders.length) return <></>;
    
    const filterPath = `${subfolders[activeTab]}/`;
    
    
    const filteredFiles = files.filter(file => file.key === filterPath + file.name);    
    const tabLabels = subfolders.map(folder => folder.split('/').pop());
    return (
        <>
            <Tabs value={activeTab} onChange={handleTabChange} >
                {tabLabels.map((folder, index) => (
                    <Tab key={index} label={folder} />
                ))}
            </Tabs>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <FilesTableHeader />
                    <FileTableBody files={filteredFiles} />
                </Table>
            </TableContainer>
        </>
    );
};

export default FilesTable;
