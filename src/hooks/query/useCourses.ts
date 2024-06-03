import { useQuery } from "react-query";
import { IDriveCourse } from "../../types/files.ts";
import { filesApi } from "../../api/index.ts";


const useCourses = () => {
    const fetchCourses = async (): Promise<IDriveCourse[]> => {
        return filesApi.get("/list-folders")
            .then(response => response.data as IDriveCourse[])
    }

    return useQuery({
        queryKey: ["GET_COURSES"],
        queryFn: fetchCourses,
        initialData: []
    })
}

export default useCourses;