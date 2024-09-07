import { createContext, FC, useContext, useState } from 'react';
import { ICourse, IGroup } from "../../types/schedule";

type ScheduleOption = {
  groups: IGroup[];
};


interface SelectedCourseContextProps {
  selectedCourses: ICourse[];
  selectedSchedule: ScheduleOption | null;
  addCourse: (course: ICourse) => void;
  removeCourse: (courseId: string) => void; // Assuming courseId is a string
  setSelectedSchedule: (schedule: ScheduleOption | null) => void;
}

export const SelectedCourseContext = createContext<SelectedCourseContextProps>({
  selectedCourses: [],
  selectedSchedule: null,
  addCourse: () => { },
  removeCourse: () => { },
  setSelectedSchedule: () => { },
});

type Props = {
  children: React.ReactNode;
};

export const SelectedCourseProvider: FC<Props> = ({ children }) => {
  const [selectedCourses, setSelectedCourses] = useState<ICourse[]>([]);
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleOption | null>(null);

  const addCourse = (course: ICourse) => {
    setSelectedCourses([...selectedCourses, course]);
  };

  const removeCourse = (courseId: string) => {
    setSelectedCourses(selectedCourses.filter(course => course.id !== courseId));
  };

  return (
    <SelectedCourseContext.Provider value={{ selectedCourses, selectedSchedule, addCourse, removeCourse, setSelectedSchedule }}>
      {children}
    </SelectedCourseContext.Provider>
  );
};

export const useSelectedCourseContext = () => useContext(SelectedCourseContext);
