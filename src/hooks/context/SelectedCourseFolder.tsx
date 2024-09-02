import { FC, ReactNode, createContext, useContext, useState } from "react";
import { IDriveFolder } from "../../types/files.ts";

type Props = {
    children: ReactNode[]
}

type SetCourseCB = (value: IDriveFolder | null) => void;

const SetSelectedCourseFoldersContext = createContext<SetCourseCB>(() => {});
export const useSetSelectedCourseFolders = () => useContext(SetSelectedCourseFoldersContext);

const SelectedCourseFoldersContext = createContext<IDriveFolder | null>(null);
export const useSelectedCourseFolders = () => useContext(SelectedCourseFoldersContext);


const SelectedCourseProvider: FC<Props> = ({ children }) => {
    const [selectedCourseFolders, setSelectedCourseFolders] = useState<IDriveFolder | null>(null);

    return (
        <SetSelectedCourseFoldersContext.Provider value={ setSelectedCourseFolders }>
            <SelectedCourseFoldersContext.Provider value={ selectedCourseFolders }>
                { children }
            </SelectedCourseFoldersContext.Provider>
        </SetSelectedCourseFoldersContext.Provider>
    )
}

export default SelectedCourseProvider;
