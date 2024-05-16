import axios from "axios";
import qs from "qs";

const api = axios.create({
  baseURL: 'http://ec2-34-228-10-239.compute-1.amazonaws.com:8000/'
})

export const register = async (email: string, password: string) => {
    const registerDetails = { email, password };
    const response = await api.post("/auth/register", registerDetails , { headers: {
      "Access-Control-Allow-Origin": "*",
    }});
    return response.data;
}

export const login = async(username: string, password: string) => {
  const loginDetails = qs.stringify({ username, password }); // URL-encode the data
  const response = await api.post("/auth/jwt/login", loginDetails, { 
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/x-www-form-urlencoded", // Set the correct content type
    }
  });
  return response.data;
}