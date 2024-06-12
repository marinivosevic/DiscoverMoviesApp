import {axiosInstance} from "./config/axios";
export const MovieService = {
   
    useDiscoverMovies: async (data)  => {
        const response = await axiosInstance.get(`movie/discover`, {
            params:data,
        });

        return response.data;
    }
}