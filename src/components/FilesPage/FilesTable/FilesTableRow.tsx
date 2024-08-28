import { FC } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IFile } from "../../../types/files.ts";
import DownloadButton from "./DownloadButton";
import { buildDateString } from "../../../utils/dates.ts";

interface Props {
    file: IFile;
}

const formatFileSize = (sizeInBytes: number): string => {
    const sizeInKB = sizeInBytes / 1024;
    if (sizeInKB < 1024) {
        return `${sizeInKB.toFixed(2)} KB`;
    } else {
        const sizeInMB = sizeInKB / 1024;
        return `${sizeInMB.toFixed(2)} MB`;
    }
};

const FilesTableRow: FC<Props> = ({ file }) => {
    return (
        <TableRow
            key={file.key}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{file.name} </TableCell>
            <TableCell>{buildDateString(file.last_modified)}</TableCell>
            <TableCell>{formatFileSize(file.size)}</TableCell>
            <TableCell><DownloadButton fileName={file.key}/> </TableCell>
        </TableRow>
    )
}

export default FilesTableRow;