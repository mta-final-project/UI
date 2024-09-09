import { FC } from "react";
import TableBody from "@mui/material/TableBody";
import FilesTableRow from "./FilesTableRow";
import { IFile } from "../../../types/files";

interface Props {
    files: IFile[];
}

const FileTableBody: FC<Props> = ({ files }) => {
    if (!files.length) return <></>;

    return (
        <TableBody sx={{ direction: 'rtl'}}> 
            {files.map((row) => (
                <FilesTableRow key={row.name} file={row} />
            ))}
        </TableBody>
    );
};

export default FileTableBody;
