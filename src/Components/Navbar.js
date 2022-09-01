import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">CRUDapp</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link className="nav-link" to="/createPost">Create Post</Link>
      </li>
      </ul></div>
  </nav></div>
  )
}

export default Navbar