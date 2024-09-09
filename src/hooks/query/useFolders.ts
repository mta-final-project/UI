import { useQuery } from "react-query";
import { IDriveFolder } from "../../types/files.ts";
import { filesApi } from "../../api/index.ts";


const useSubFolders = (path:string="") => {
    const fetchSubfolders = async (): Promise<IDriveFolder[]> => {
        console.log("/list-folders"+"/"+path);
        return filesApi.get("/list-folders"+"/"+path)
            .then(response => response.data as IDriveFolder[])
    }

    return useQuery({
        queryKey: ["GET_SUBFOLDERS"],
        queryFn: fetchSubfolders,
        initialData: []
    })
}

export default useSubFolders;

