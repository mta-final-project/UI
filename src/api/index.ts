import axios from "axios";
import { FILES_API_URL, USERS_API_URL, COURSES_API_URL, SCHEDULE_API_URL } from "./env";

const authInterceptor = (config) => {
    const token = localStorage.getItem('accessToken');
    if (token !== null) {
        console.log(`sending request with token`);
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

export const filesApi = axios.create({
    baseURL: FILES_API_URL
})

export const usersApi = axios.create({
    baseURL: USERS_API_URL
})

export const coursesApi = axios.create({
    baseURL: COURSES_API_URL
})

export const scheduleApi = axios.create({
    baseURL: SCHEDULE_API_URL
})

filesApi.interceptors.request.use(authInterceptor);
usersApi.interceptors.request.use(authInterceptor);
coursesApi.interceptors.request.use(authInterceptor);
scheduleApi.interceptors.request.use(authInterceptor);
