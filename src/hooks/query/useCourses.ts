import { useQuery } from "react-query";
import { ICourse } from "../../types/Course.ts";
import { getCourses } from "../../services/CoursesService.ts";
const useCourses = () => {
    const fetchCourses = async (): Promise<ICourse[]> => {
        return getCourses()
            .then(response => response as ICourse[])
            .catch(error => {
                console.error("Error fetching courses:", error);
                throw error;
            });
    }

    return useQuery({
        queryKey: ["GET_COURSES"],
        queryFn: fetchCourses,
        initialData: []
    });
}

export default useCourses;