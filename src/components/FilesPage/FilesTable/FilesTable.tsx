import { FC } from "react";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import FilesTableHeader from "./FilesTableHeader.tsx";
import FileTableBody from "./FileTableBody.tsx";


const FilesTable: FC = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <FilesTableHeader />
                <FileTableBody />
            </Table>
        </TableContainer>
    )
}

export default FilesTable;