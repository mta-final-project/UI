import { useQuery } from "react-query";
import { filesApi } from "../../api";


const usePresignedURL = (fileName: string) => {
    const fetchURL = async (): Promise<string> => {
        return filesApi.get(`/download/?file_name=${fileName}`)
            .then(response => response.data as string)
    }

    return useQuery({
        queryKey: ["GET_PRESIGNED_URL", { fileName }],
        queryFn: fetchURL,
        initialData:null
    })
}

export default usePresignedURL;