import './signUp.css'
import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from '../../util/axiosConfig'

function SignUp() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const signUpHandler = async(e)=>{
        try {
            e.preventDefault()
            await axios.post('/users/register',{userName, email, password})
            navigate('/login')
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <div className='signUp'>
        <div className="main-signup">
        <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" onChange={e=> setUserName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={e=> setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={e=> setPassword(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-lg btn-block signup-button" onClick={signUpHandler}>Register</button>
                <p className="log-in">
                    Already registered? 
                        <Link to='/login'>
                            <span> Log-In!</span>
                        </Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default SignUp