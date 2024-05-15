import axios from "axios";

const api = axios.create({
  //baseURL: import.meta.env.USERS_API_URL,
  baseURL: 'http://localhost:8000',
})

export async function register(email: string, password: string) {
    const registerDetails = { email, password };
    const response = await api.post("/auth/register", registerDetails );
    return response.data;
}

export async function login(email: string, password: string) {
    const loginDetails = { username: email, password };
    const response = await api.post("/auth/jwt/login", loginDetails );
    return response.data;
}