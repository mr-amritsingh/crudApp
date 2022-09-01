import React from 'react'

function Posts(props) {
    
  return (
    <div className='container'>
       <div className="row">
{props.data.map((data1,i)=>{
        return(<div className="col-sm-6 my-3" key={data1.id}>
        <div className="card">
        <span className="bi bi-card-heading container">
        <i className="fa fa-trash-o mx-2" onClick={()=>{props.handleDelete(data1.id)}}></i>
        <i className="fa fa-pencil-square-o mx-2" aria-hidden="true"></i>   
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