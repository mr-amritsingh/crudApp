import React, {useState} from 'react'
import { useNavigate, useLocation } from "react-router-dom";

function CreateUser(props) {

  const navigate = useNavigate();
  const location = useLocation();
 
  const [post, setPost] = useState({
    id: location.state.id,
    userId: location.state.userId,
    title:location.state.title,
    body:location.state.body
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    props.editPost(post);
    navigate('/');
  }
  
  return (
    <div className="container">
      <form >
    <div className="form-group my-3">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" value={post.title} onChange={(e)=>{setPost({...post,title:e.target.value})}} placeholder="Enter title"/>
    </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Body</label>
    <textarea className="form-control" value={post.body} onChange={(e)=>{setPost({...post,body:e.target.value})}} id="exampleFormControlTextarea1" placeholder='Enter Body' rows="3"></textarea>
  </div>
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Update Post</button>
</form>
    </div>
  )
}

export default CreateUser