import axios from "axios";


const api = axios.create({
  baseURL: import.meta.env.COURSES_API_URL,
})

export async function getCourses() {
    const response = await api.get("/")

    return response.data
}