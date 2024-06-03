import { FC } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";


const FilesTableHeader: FC = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>File Type</TableCell>
                <TableCell>Size (MB)</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Download</TableCell>

            </TableRow>
        </TableHead>
    )
}

export default FilesTableHeader;