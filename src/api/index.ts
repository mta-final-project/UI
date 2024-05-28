import axios from "axios";
import { FILES_API_URL } from "./env.ts";


export const filesApi = axios.create({
    baseURL: FILES_API_URL,
})