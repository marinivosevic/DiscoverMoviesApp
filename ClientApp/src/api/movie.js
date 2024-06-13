import {axiosInstance} from "./config/axios";
export const movieService = {
   
    useDiscoverMovies: async (data)  => {
        try{
            const response = await axiosInstance.post(`postRoute`, 
                data,
            );
    
            return response.data;
        }
        catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
        
    }
}