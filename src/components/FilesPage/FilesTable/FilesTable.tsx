import { FC, useEffect, useState } from "react";
import { Tabs, Tab, TableContainer, Paper, Table, CircularProgress, Box, Typography } from "@mui/material";
import FilesTableHeader from "./FilesTableHeader";
import FileTableBody from "./FileTableBody";
import { useSelectedCourseFolders } from "../../../hooks/context/SelectedCourseFolder.tsx";
import { IDriveFolder } from "../../../types/files.ts";
import { filesApi } from "../../../api/index.ts";
import { IFile } from "../../../types/files";
import { useNavigate } from 'react-router-dom';

const FilesTable: FC = () => {
    const selectedCourseFromContext = useSelectedCourseFolders();
    const [selectedCourse, setSelectedCourse] = useState<string | null>(selectedCourseFromContext);
    const [activeTab, setActiveTab] = useState(0);
    const [subfolders, setSubFolder] = useState<IDriveFolder[]>([]);
    const [files, setFiles] = useState<IFile[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

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
            navigate(`?course=${selectedCourse}`, { replace: true });
        }
    }, [selectedCourse, navigate]);

    useEffect(() => {
        if (selectedCourse) {
            setLoading(true);

            Promise.all([
                filesApi.get(`/list-folders/?path=${selectedCourse}`),
                filesApi.get(`/list-objects`, { params: { path: selectedCourse } })
            ])
                .then(([foldersResponse, filesResponse]) => {
                    const foldersData = foldersResponse.data as IDriveFolder[];
                    const filesData = filesResponse.data as IFile[];

                    setSubFolder(foldersData);
                    setFiles(filesData);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("טעינת הקורסים נכשלה. ", error);
                    setLoading(false);
                });
        } else {
            setSubFolder([]);
            setFiles([]);
            setLoading(false);
        }
    }, [selectedCourse]);

    if (!selectedCourse) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', paddingTop:'20px' }}>
                <Typography variant="h6" sx={{ color: '#555', direction:'rtl' }}>
                    לא נבחר קורס. יש לבחור קורס כדי לצפות בחומרי לימוד.
                </Typography>
            </Box>
        );
    }

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', paddingTop:'20px' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!subfolders.length) return <></>;

    const filterPath = `${subfolders[activeTab]}/`;
    const filteredFiles = files.filter(file => file.key === filterPath + file.name);    
    const tabLabels = subfolders.map(folder => folder.split('/').pop());

    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#0A1929",
                    minHeight: "100vh",
                    color: "#C9D1D9",
                    padding: "20px",
                    direction: "rtl",
                    overflowY: "auto",
                    border: "1px solid #30363D",
                }}
            >
                <Tabs sx={{ direction: 'rtl',
                        '& .MuiTab-root': { color: '#C9D1D9',},
                        '& .Mui-selected': {color: '#58A6FF',},
                        '& .MuiTabs-indicator': {backgroundColor: '#58A6FF',}, 
                    }}    
                    value={activeTab}
                    onChange={handleTabChange}>
                    {tabLabels.map((folder, index) => (
                        <Tab key={index} label={folder} />
                    ))}
                </Tabs>
                <TableContainer component={Paper} sx={{ direction: 'rtl', backgroundColor: '#1C273A' }}> 
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <FilesTableHeader />
                        <FileTableBody files={filteredFiles} />
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default FilesTable;
