import React from 'react'
import {useNavigate} from 'react-router-dom'

function Posts(props) {

    const navigate=useNavigate();
    
  return (
    <div className='container'>
       <div className="row">
{props.data.map((data1,i)=>{
        return(<div className="col-sm-6 my-3" key={i}>
        <div className="card">
        <span className="bi bi-card-heading container">
        <i className="fa fa-trash-o mx-2" onClick={()=>{props.handleDelete(data1.id)}}></i>
        <i className="fa fa-pencil-square-o mx-2" onClick={()=>{navigate('/editPost',{state:data1});
  }} aria-hidden="true"></i>   
        </span>
          <div className="card-body">
            <h5 className="card-title">{data1.title}</h5>
            <p className="card-text">{data1.body}</p>
            
          </div>
        </div>
    </div>)})}
    </div>
    </div>
  )
}

export default Posts