import axios from "axios";

const api = axios.create({
  //baseURL: 'http://ec2-34-228-10-239.compute-1.amazonaws.com:8000/'
  baseURL: 'http://localhost:8002/'
})

export const register = async (email: string, password: string) => {
    const registerDetails = { email, password };
    const response = await api.post("/register", registerDetails , { headers: {
      "Access-Control-Allow-Origin": "*",
    }});
    console.log(response.data); //to remove
    return response.data;
}

export const login = async (username: string, password: string, first_name:string, last_name:string) => {
  //const loginDetails = qs.stringify({ username, password }); // URL-encode the data
  const loginDetails = { username, password, first_name, last_name}; 
  const response = await api.post("/login", loginDetails, { 
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/x-www-form-urlencoded", // Set the correct content type
    }
  });
  console.log(response.data); //to remove
  return response.data;
}