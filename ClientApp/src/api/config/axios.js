import axios from "axios";

const headers = {
    "Content-Type": "application/json",
}

const baseURL = "https://localhost:7173/api/";

export const axiosInstance = axios.create({
    baseURL,
    headers,
});