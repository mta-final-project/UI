// import { FC, ReactNode, createContext, useContext, useState } from "react";
// import { ICourse } from "../../types/Course";
// import { SelectedGroupsSchema } from "../../types/schedule";

// type Props = {
//   children: ReactNode;
// };

// type SelectedCourseContextType = {
//   selectedCourses: ICourse[];
//   addCourse: (course: ICourse) => void;
//   removeCourse: (courseId: string) => void;
//   selectedSchedule: SelectedGroupsSchema | null;
//   setSelectedSchedule: (schedule: SelectedGroupsSchema | null) => void;
// };

// const SelectedCourseContext = createContext<SelectedCourseContextType>({
//   selectedCourses: [],
//   addCourse: () => {},
//   removeCourse: () => {},
//   selectedSchedule: null,
//   setSelectedSchedule: () => {},
// });

// export const useSelectedCourseContext = () => useContext(SelectedCourseContext);

// const SelectedCourseProvider: FC<Props> = ({ children }) => {
//   const [selectedCourses, setSelectedCourses] = useState<ICourse[]>([]);
//   const [selectedSchedule, setSelectedSchedule] =
//     useState<SelectedGroupsSchema | null>(null);

//   const addCourse = (course: ICourse) => {
//     setSelectedCourses((prevCourses) => [...prevCourses, course]);
//   };

//   const removeCourse = (courseId: string) => {
//     setSelectedCourses((prevCourses) =>
//       prevCourses.filter((course) => course.id !== courseId)
//     );
//   };

//   const handleSetSelectedSchedule = (schedule: SelectedGroupsSchema | null) => {
//     console.log("Selected Schedule:", schedule);
//     setSelectedSchedule(schedule);
//   };

//   return (
//     <SelectedCourseContext.Provider
//       value={{
//         selectedCourses,
//         addCourse,
//         removeCourse,
//         selectedSchedule,
//         setSelectedSchedule: handleSetSelectedSchedule,
//       }}
//     >
//       {children}
//     </SelectedCourseContext.Provider>
//   );
// };

// export default SelectedCourseProvider;


// src/hooks/context/SelectedCourseData.tsx

import { createContext, FC, useContext, useState } from 'react';
import { ICourse, IGroup } from "../../types/Course"; // Adjust the import path

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
