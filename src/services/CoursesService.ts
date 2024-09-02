import axios from "axios";
import { ICourse } from "../types/Course";

const api = axios.create({
  baseURL: 'http://localhost:8000' // TODO: Use environment variable for the URL
});

export const getCourses = async (): Promise<ICourse[]> => {
  const response = await api.get<ICourse[]>("/courses", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  return response.data;
};

export const addCourse = async (courseData: Partial<ICourse>): Promise<ICourse> => {
  const response = await api.post<ICourse>("/courses", courseData, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  return response.data;
};

export const deleteCourse = async (courseId: string): Promise<void> => {
  await api.delete(`/courses/${courseId}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
};

export const getCourseById = async (courseId: string): Promise<ICourse> => {
  const response = await api.get<ICourse>(`/courses/${courseId}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  return response.data;
};

export const updateCourse = async (courseId: string, courseData: Partial<ICourse>): Promise<ICourse> => {
  const response = await api.put<ICourse>(`/courses/${courseId}`, courseData, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  return response.data;
};