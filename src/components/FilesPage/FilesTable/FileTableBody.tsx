// import { FC } from "react";
// import TableBody from "@mui/material/TableBody";
// import FilesTableRow from "./FilesTableRow.tsx";
// import { useSelectedCourse } from "../../../hooks/context/SelectedCourse.tsx"
// import useSelectedCourseFiles from "../../../hooks/query/useSelectedCourseData.ts";


// const FilesTableBody: FC = () => {
//     const selectedCourse = useSelectedCourse();
//     const { data: files } = useSelectedCourseFiles(selectedCourse);

//     if (!files)
//         return <></>;

//     return (
//         <TableBody>
//             {files.map((row) => (
//                 <FilesTableRow key={row.name} file={row} />
//             ))}
//         </TableBody>
//     )
// }
//  export default FilesTableBody;

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
        <TableBody >
            {files.map((row) => (
                <FilesTableRow key={row.name} file={row} />
            ))}
        </TableBody>
    );
};

export default FileTableBody;