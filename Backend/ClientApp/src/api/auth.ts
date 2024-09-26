import { useState } from "react";
import { axiosInstance } from "./config/axios";
import useAuth from "../Hooks/useAuth";

const useAuthService = () => {
  const { setAuth } = useAuth();

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post(
        `https://localhost:7173/login`,
        { email, password },
        { withCredentials: true }
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setAuth({
          token: response.data.token,
          active: true,
        });
      }
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post(
        `https://localhost:7173/register`,
        { email, password },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  return { login, register };
};

export default useAuthService;