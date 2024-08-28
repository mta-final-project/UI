import { useQuery } from "react-query";
import { IDriveFolder, IFile } from "../../types/files.ts";
import { filesApi } from "../../api/index.ts";

export const useSelectedCourseFiles = (selectedCourse: IDriveFolder | null) => {
    const fetchCourseFiles = async (): Promise<IFile[]> => {
        if (!selectedCourse) return null;

        return filesApi.get("list-objects", {
            params: {
                path: selectedCourse
            }
        })
            .then(response => response.data as IFile[])
    }

    return useQuery({
        queryKey: ["GET_COURSE_FILES", selectedCourse],
        queryFn: fetchCourseFiles,
        initialData: null
    })
}

export default useSelectedCourseFiles;

