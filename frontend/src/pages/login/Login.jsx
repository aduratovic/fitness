import './login.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from '../../util/axiosConfig'
import { useState } from 'react'

function Login({userSetter}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    
    const loginHandler = async (e)=>{
        try {
            e.preventDefault()
            const res = await axios.post('/users/login',{email,password})
            userSetter(res.data)
            localStorage.setItem("user",JSON.stringify(res.data))
            navigate('/')
          } catch (error) {
            console.log(error)
          }
    }
    
  return (
    <div className="login">
        <div className="main-login">
            <form>
                <h3>Log in</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={e=> setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={e=> setPassword(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-lg btn-block button" onClick={loginHandler}>Sign in</button>
                <p className="sign-up">
                    Are you new?
                        <Link to='/register'>
                            <span> Sign-Up!</span>
                        </Link> 
                </p>
            </form>
        </div>
    </div>
  )
}

export default Login