
import React from "react"
import {Link} from 'react-router-dom'
import '../styles/nav.css'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand fixed-top nav_ ">
    <div className="container">
      <div className="navbar-brand">
      Login App
      </div>
      <ul className="navbar-nav">
        <li className="nav-item ">  <Link to="/" className="nav-link  link_" aria-current="page"> Home</Link>  </li>
        <li className="nav-item">  <Link to="/register" className="nav-link  link_" aria-current="page"> Register </Link> </li> 
        <li className="nav-item ">  <Link to="/login" className="nav-link  link_" aria-current="page"> Login</Link> </li>
        {/* <li className="nav-item nav_link">  <Link to="/dash" className="nav-link active" aria-current="page">Dash</Link> </li> */}
      </ul>
    </div>
    </nav>
  )
}
