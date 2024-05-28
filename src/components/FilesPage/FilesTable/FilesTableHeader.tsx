import { FC } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";


const FilesTableHeader: FC = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>סוג</TableCell>
                <TableCell>גודל (MB)</TableCell>
                <TableCell>תאריך</TableCell>
                <TableCell>שם</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default FilesTableHeader;