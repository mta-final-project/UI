import { filesApi as api } from "../api";

export const addCourseToFavorites = async (course: string) => {
      const response = await api.post("/favorites", null, {
        params: { course }, 
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
  
      return response.data;
  };

export const removeCourseFromFavorites = async (course: string) => {
      const response = await api.delete(`/favorites`, {
        params: { course },
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      });
  
      return response.data;
  };

  export const getFavorites = async () => {
    const response = await api.get("/favorites", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
  
    return response.data;
  };