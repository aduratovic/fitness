import React from "react";
import './navbar.css'
import {useNavigate} from 'react-router-dom'

function Navbar({userSetter}) {
  const navigate = useNavigate()
  const logoutHandler = ()=>{
    localStorage.clear()
    userSetter(null)
    navigate('/login')
  }
  return (
    <>
      <nav class="navbar wrapper">
        <div className="left">
          <span class="navbar-brand mb-0 h1">Fitness Tracker</span>
          <span class="navbar-brand mb-0 h1">Dashboard</span>
        </div>
        <div className="right">
          <span class="navbar-brand mb-0 h1" onClick={logoutHandler}>Logout</span>
        </div>
      </nav>
    </>
  )
}

export default Navbar