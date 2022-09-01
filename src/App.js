import { useState, useEffect } from 'react';
import axios from './Api';
import './App.css';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
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

   


  return (
    <div>
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route exact  path="/" element={<Posts data={data}/>} />
    </Routes>
  </BrowserRouter>,

    </div>
  );
}

export default App;
