import axios from "axios";

const headers = {
    "Content-Type": "application/json",
}

const baseURL = "http://findmymovie.eu-central-1.elasticbeanstalk.com/api/";

export const axiosInstance = axios.create({
    baseURL,
    headers,
});
