import { useState, useEffect } from 'react';
import axios from './Api';
import './App.css';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import CreatePost from './Components/CreatePost'
import EditPost from './Components/EditPost'
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
      setdata([response.data,...data])

    }

    const handleDelete= async(i)=>{
      console.log(i)
      await axios.delete(`/posts/${i}`)
      const newData = data.filter((post) => {
        return post.id !== i;
      });
  
      setdata(newData);
    }

    const editPost=async(newPost)=>{
      const response= await axios.put(`/posts/${newPost.id}`, newPost)
      const {id} = response.data;
      setdata(data.map(data1=>{
        return data1.id===id?newPost:data1
      }))
    }



   


  return (
    <div>
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route exact  path="/" element={<Posts data={data} handleDelete={handleDelete}/>} />
      <Route exact path="/createPost" element={<CreatePost addData={addData} type='create'/>} />
      <Route exact path="/editPost" element={<EditPost editPost={editPost} type='edit'/>} />
    </Routes>
  </BrowserRouter>,

    </div>
  );
}

export default App;
