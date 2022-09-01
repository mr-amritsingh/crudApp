import React from 'react'

function Posts(props) {
    
  return (
    <div className='container'>
       <div className="row">
{props.data.map((data1,i)=>{
        return(<div className="col-sm-6 my-3" key={data1.id}>
        <div className="card">
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