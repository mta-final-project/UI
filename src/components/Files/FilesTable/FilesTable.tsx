import { FC } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import FilesTableHeader from "./FilesTableHeader.tsx";
import FilesTableRow from "./FilesTableRow.tsx";

export interface IFile {
    name: string;
    uploadedAt: Date;
    size: number;
    contentType: string;
}

interface Props {
    files: IFile[];
}

const FilesTable: FC<Props> = ({ files }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <FilesTableHeader />
                <TableBody>
                    {files.map((row) => (
                        <FilesTableRow file={row}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default FilesTable;