import { usersApi as api } from "../api";

export const register = async (email: string, password: string, first_name:string, last_name:string) => {
    const registerDetails = { email, password, first_name, last_name };
    const response = await api.post("/register", registerDetails , { headers: {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }});
    return response.data;
}

export const login = async (email: string, password: string) => {
  const loginDetails = { email, password }; 
  const response = await api.post("/login", loginDetails, { 
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  return response.data;
}