import { ICourse } from "../types/Course";
import { usersApi } from "../api";



export const getCourses = async (): Promise<ICourse[]> => {
  const response = await usersApi.get<ICourse[]>("/courses", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  return response.data;
};

export const addCourse = async (courseData: Partial<ICourse>): Promise<ICourse> => {
  const response = await usersApi.post<ICourse>("/courses", courseData, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  return response.data;
};

export const deleteCourse = async (courseId: string): Promise<void> => {
  await usersApi.delete(`/courses/${courseId}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
};

export const getCourseById = async (courseId: string): Promise<ICourse> => {
  const response = await usersApi.get<ICourse>(`/courses/${courseId}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  return response.data;
};

export const updateCourse = async (courseId: string, courseData: Partial<ICourse>): Promise<ICourse> => {
  const response = await usersApi.put<ICourse>(`/courses/${courseId}`, courseData, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  return response.data;
};