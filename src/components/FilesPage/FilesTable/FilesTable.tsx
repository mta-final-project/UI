import { FC, useState, SyntheticEvent } from "react";
import { Tabs, Tab, Table, TableContainer, Paper } from "@mui/material";
import FilesTableHeader from "./FilesTableHeader";
import FileTableBody from "./FileTableBody";

const FilesTable: FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <>
            <Tabs value={activeTab} onChange={handleTabChange} aria-label="files table tabs">
                <Tab label="Year 1" />
                <Tab label="Year 2" />
                <Tab label="Year 3" />
            </Tabs>
            {activeTab === 0 && (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <FilesTableHeader />
                        <FileTableBody />
                    </Table>
                </TableContainer>
            )}
            {activeTab === 1 && (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <FilesTableHeader />
                        <FileTableBody />
                    </Table>
                </TableContainer>
            )}
            {activeTab === 2 && (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <FilesTableHeader />
                        <FileTableBody />
                    </Table>
                </TableContainer>
            )}
        </>
    );
}

export default FilesTable;