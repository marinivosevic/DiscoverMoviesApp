import {axiosInstance} from "./config/axios";
export const movieService = {
   
    useDiscoverMovies: async (data)  => {
        try{
            const response = await axiosInstance.post(`test/postRoute`, 
                data,
            );
    
            return response.data;
        }
        catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
        
    },

    useSimilarMovies: async (data)  => {
        try{
            const response = await axiosInstance.get(`test/similarMovies`, 
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