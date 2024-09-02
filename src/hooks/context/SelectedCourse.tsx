import { FC, ReactNode, createContext, useContext, useState } from "react";
import { ICourse } from "../../types/Course"; // Adjust the import path as needed

type Props = {
    children: ReactNode
}

type SetSelectedCourseCB = (value: ICourse | null) => void;

const SetSelectedCourseContext = createContext<SetSelectedCourseCB>(() => {});
export const useSetSelectedCourse = () => useContext(SetSelectedCourseContext);

const SelectedCourseContext = createContext<ICourse | null>(null);
export const useSelectedCourse = () => useContext(SelectedCourseContext);

const SelectedCourseProvider: FC<Props> = ({ children }) => {
    const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);

    return (
        <SetSelectedCourseContext.Provider value={setSelectedCourse}>
            <SelectedCourseContext.Provider value={selectedCourse}>
                {children}
            </SelectedCourseContext.Provider>
        </SetSelectedCourseContext.Provider>
    )
}

export default SelectedCourseProvider;