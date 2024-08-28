import { FC, ReactNode, createContext, useContext, useState } from "react";
import { IDriveFolder } from "../../types/files.ts";

type Props = {
    children: ReactNode[]
}

type SetCourseCB = (value: IDriveFolder | null) => void;

const SetSelectedCourseContext = createContext<SetCourseCB>(() => {});
export const useSetSelectedCourse = () => useContext(SetSelectedCourseContext);

const SelectedCourseContext = createContext<IDriveFolder | null>(null);
export const useSelectedCourse = () => useContext(SelectedCourseContext);


const SelectedCourseProvider: FC<Props> = ({ children }) => {
    const [selectedCourse, setSelectedCourse] = useState<IDriveFolder | null>(null);

    return (
        <SetSelectedCourseContext.Provider value={ setSelectedCourse }>
            <SelectedCourseContext.Provider value={ selectedCourse }>
                { children }
            </SelectedCourseContext.Provider>
        </SetSelectedCourseContext.Provider>
    )
}

export default SelectedCourseProvider;
