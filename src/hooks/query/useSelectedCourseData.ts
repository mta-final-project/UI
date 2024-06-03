import { useQuery } from "react-query";
import { IDriveCourse, IFile } from "../../types/files.ts";
import { filesApi } from "../../api";

export const useSelectedCourseFiles = (selectedCourse: IDriveCourse | null) => {
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