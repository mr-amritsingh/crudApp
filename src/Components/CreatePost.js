import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

function CreateUser(props) {

  const navigate = useNavigate();
 
  const [post, setPost] = useState({
    title:"",
    body:""
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    props.addData(post);
    navigate('/');
  }
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
    <div className="form-group my-3">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" value={post.title} onChange={(e)=>{setPost({...post,title:e.target.value})}} placeholder="Enter title"/>
    </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Body</label>
    <textarea className="form-control" value={post.body} onChange={(e)=>{setPost({...post,body:e.target.value})}} id="exampleFormControlTextarea1" placeholder='Enter Body' rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default CreateUser