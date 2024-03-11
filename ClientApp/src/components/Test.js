import React,{useRef} from 'react'
import axios from 'axios';


 const baseURL = "https://localhost:7173/api/Test";
 const postURL = "https://localhost:7173/api/postTest";
 export const Test = () => {
    const [data,setData] = React.useState([]);
    const form = useRef(null);

    React.useEffect(() => {
      axios.get(baseURL)
      .then((response) => {
        setData(response.data.results);
      })
    }, [])

    console.log(data);


    const handleSubmit = (e) => {
      e.preventDefault();
      const title = form.current[0].value;
      axios.post(postURL, {title})
      .then((response) => {
        setData([...data, response.data]);
      })
    }

  return (
    <div>
        {data.map((item) => {
            return <h1 key={item.id}>{item.title}</h1>
        })}
        <div>
        <form ref = {form} onSubmit={handleSubmit}>
            <input type='text' className=' border-solid border-black  bg-gray-200 rounded-full'/>
        </form>
            
        </div>
    </div>
  )
}

