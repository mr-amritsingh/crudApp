import { useState, useEffect } from 'react';
import axios from './Api';
import './App.css';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import CreatePost from './Components/CreatePost'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const [data, setdata] = useState([])
  useEffect(() => {
    getData();
    }, [])

    const getData =async()=>{
      const response = await axios.get('/posts')
     // console.log(response.data)
      setdata(response.data);
    }

    const addData=async(newPost)=>{
      const response = await axios.post('/posts', newPost)
     // console.log(response.data)
      setdata([...data,response.data])

    }

    const handleDelete= async(i)=>{
      console.log(i)
      await axios.delete(`/posts/${i}`)
      const newData = data.filter((post) => {
        return post.id !== i;
      });
  
      setdata(newData);
    }


   


  return (
    <div>
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route exact  path="/" element={<Posts data={data} handleDelete={handleDelete}/>} />
      <Route exact path="/createPost" element={<CreatePost addData={addData}/>} />
    </Routes>
  </BrowserRouter>,

    </div>
  );
}

export default App;
