import { coursesApi, scheduleApi } from "../api";
import { ICourse, ISchedule } from "../types/schedule";


export const getCourses = async (): Promise<ICourse[]> => {
  const response = await coursesApi.get<ICourse[]>("/");
  return response.data;
};

export const getScheduleOptions = async (
  courseIds: string[]
): Promise<ISchedule[]> => {
  const courseIdsParam = courseIds.join('&courses_ids=');
  const response = await scheduleApi.get(`/options/?courses_ids=${courseIdsParam}`);
  return response.data;
};