import axios from "axios";
import { COURSES_API_URL } from "../environments";


const api = axios.create({
  baseURL: COURSES_API_URL,
})

export async function getCourses() {
    const response = await api.get("/")

    return response.data
}