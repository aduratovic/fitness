import React from 'react'
import './navbar.css'
import logo from './logg3.svg'
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
            <img src={logo} alt="logo" onClick={()=> navigate('/')}/>
          <span class="navbar-brand mb-0 h1" onClick={()=>{navigate('/exercises')}}>Exercise Logs</span>
        </div>
        <div className="right">
          <span class="navbar-brand mb-0 h1" onClick={logoutHandler}>Logout</span>
        </div>
      </nav>
    </>
  )
}

export default Navbar