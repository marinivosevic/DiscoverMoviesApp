import React,{useRef, useState} from 'react'
import axios from 'axios';



 const baseURL = "https://localhost:7173/api/Test";
 const postURL = "https://localhost:7173/api/postRoute";
 export const Test = () => {
    const [data,setData] = React.useState([]);
    const [similarMoves,setSimilarMovies] = useState([]);
    const form = useRef(null);

    React.useEffect(() => {
      axios.get(baseURL)
      .then((response) => {
        setData(response.data.results);
      })

      
    }, [])

    console.log(data);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const title = form.current[0].value;
    
      try {
        const response = await axios.get(postURL, {
         
          params: {
            key1: title,
          },
        });
    
        setSimilarMovies((prev) => [...prev, ...response.data.results]);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    

  return (
    <div>
        {data.map((item) => {
            return <h1 key={item.id}>{item.title}</h1>
        })}
        <div>
        <form ref = {form} onSubmit={handleSubmit}>
            <input type='text' className=' border-solid border-black  bg-gray-200 rounded-full'/>
            <button type='submit'>submit</button>
        </form>

        {similarMoves.map((movie) =>{
          return <h1 key={movie.id}>{movie.title}</h1>
        })}
            
        </div>
    </div>
  )
}

