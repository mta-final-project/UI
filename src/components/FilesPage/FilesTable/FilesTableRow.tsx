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
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, direction: 'rtl' }}> 
            <TableCell align="right" sx={{ color: '#C9D1D9' }}>{file.name}</TableCell>
            <TableCell align="right" sx={{ color: '#C9D1D9' }}>{buildDateString(file.last_modified)}</TableCell>
            <TableCell align="right" sx={{ color: '#C9D1D9', direction: 'ltr' }}>{formatFileSize(file.size)}</TableCell>
            <TableCell align="right">
                <DownloadButton fileName={file.key}/> 
            </TableCell>
        </TableRow>
    );
}

export default FilesTableRow;
