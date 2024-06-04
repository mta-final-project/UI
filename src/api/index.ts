import axios from "axios";
import { FILES_API_URL } from "./env";
import { USERS_API_URL } from "./env";

export const filesApi = axios.create({
    baseURL: FILES_API_URL
})

export const usersApi = axios.create({
    baseURL: USERS_API_URL
})

