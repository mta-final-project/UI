import { FC } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IFile } from "../../../types/files.ts";
import { buildDateString } from "../../../utils/dates.ts";

interface Props {
    file: IFile;
}

const FilesTableRow: FC<Props> = ({ file }) => {
    return (
        <TableRow
            key={file.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell>{file.contentType}</TableCell>
            <TableCell>{file.size}</TableCell>
            <TableCell>{buildDateString(file.uploadedAt)}</TableCell>
            <TableCell component="th" scope="row">
                {file.name}
            </TableCell>
        </TableRow>
    )
}

export default FilesTableRow;