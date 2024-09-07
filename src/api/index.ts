import axios from "axios";
import { FILES_API_URL, USERS_API_URL } from "./env";

const authInterceptor = (config) => {
    const token = localStorage.getItem('accessToken');
    if (token !== null) {
        console.log(`sending request with token`);
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

export const filesApi = axios.create({
    //baseURL: FILES_API_URL
    baseURL: 'http://localhost:8000/files'
})

export const usersApi = axios.create({
    //baseURL: USERS_API_URL
    baseURL: 'http://localhost:8000/users'
})

filesApi.interceptors.request.use(authInterceptor);
usersApi.interceptors.request.use(authInterceptor);
