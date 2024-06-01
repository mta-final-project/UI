import { FC } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IFile } from "../../../types/files.ts";
import DownloadButton from "./DownloadButton";

interface Props {
    file: IFile;
}

const FilesTableRow: FC<Props> = ({ file }) => {
    return (
        <TableRow
            key={file.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell>{file.key}</TableCell>
            <TableCell>{file.size}</TableCell>
            <TableCell>{file.last_modified}</TableCell>
            <TableCell component="th" scope="row">
                {file.name} <DownloadButton fileName={file.key} />
            </TableCell>
        </TableRow>
    )
}

export default FilesTableRow;