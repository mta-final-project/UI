import { FC } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IFile } from "./FilesTable.tsx";
import { buildDateString } from "../../../utils/dates.ts";

interface IProps {
    file: IFile;
}

const FilesTableRow: FC = (props: IProps) => {
    const { file } = props;

    console.log(file.uploadedAt)

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