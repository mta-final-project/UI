import { ICourse } from "../types/Course";
import { usersApi } from "../api";
import { Group } from "../types/schedule";

export const getCourses = async (): Promise<ICourse[]> => {
  const response = await usersApi.get<ICourse[]>("/courses");
  return response.data;
};

export const getScheduleOptions = async (
  courseIds: string[]
): Promise<Group[]> => {
  const courseIdsParam = courseIds.join('&courses_ids=');
  const response = await usersApi.get(`/schedule/options/?courses_ids=${courseIdsParam}`);
  return response.data;
};