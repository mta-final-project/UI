import { FC } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";

const FilesTableHeader: FC = () => {
    return (
        <TableHead sx={{ direction: 'rtl' }}> 
            <TableRow sx={{ '& th': { fontWeight: 'bold', fontSize: '100%', color: '#C9D1D9' } }}>
                <TableCell align="right">שם הקובץ</TableCell> 
                <TableCell align="right">תאריך שינוי אחרון</TableCell>
                <TableCell align="right">גודל</TableCell>
                <TableCell align="right">הורדה</TableCell>
            </TableRow>
        </TableHead>
    );
}

export default FilesTableHeader;
