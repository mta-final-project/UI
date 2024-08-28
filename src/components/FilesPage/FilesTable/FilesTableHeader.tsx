import { FC } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";


const FilesTableHeader: FC = () => {
    return (
        <TableHead >
            <TableRow>
                <TableCell >Name</TableCell >  
                <TableCell>Last Modified</TableCell>
                <TableCell>Size</TableCell>
                <TableCell >Download</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default FilesTableHeader;