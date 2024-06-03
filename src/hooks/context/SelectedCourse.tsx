import { FC, ReactNode, createContext, useContext, useState } from "react";
import { IDriveCourse } from "../../types/files.ts";

type Props = {
    children: ReactNode[]
}

type SetCourseCB = (value: IDriveCourse | null) => void;

const SetSelectedCourseContext = createContext<SetCourseCB>(() => {});
export const useSetSelectedCourse = () => useContext(SetSelectedCourseContext);

const SelectedCourseContext = createContext<IDriveCourse | null>(null);
export const useSelectedCourse = () => useContext(SelectedCourseContext);


const SelectedCourseProvider: FC<Props> = ({ children }) => {
    const [selectedCourse, setSelectedCourse] = useState<IDriveCourse | null>(null);

    return (
        <SetSelectedCourseContext.Provider value={ setSelectedCourse }>
            <SelectedCourseContext.Provider value={ selectedCourse }>
                { children }
            </SelectedCourseContext.Provider>
        </SetSelectedCourseContext.Provider>
    )
}

export default SelectedCourseProvider;
