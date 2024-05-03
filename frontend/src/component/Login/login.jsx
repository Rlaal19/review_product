import React, { useState } from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import Axios from '../../../../backend/node_modules/axios'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) =>{
    e.preventDefault()
    Axios.post('http://localhost:3001/auth/login',{email,password})
    .then(result => {
      if(result.data.status){
        alert(result.data.message)
        navigate('/home')
        navigate(0)
      }else{
        alert(result.data.message);
        navigate('/login')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='inputbox'>
          <input type="email" placeholder="Email" className="input input-bordered input-warning w-full max-w-xs" 
            onChange={(e) => setEmail(e.target.value)}
          />
          <FontAwesomeIcon className='icon' icon={faUser} size="lg" />
          </div>

        <div className='inputbox'>
          <input type="password" placeholder="Password" className="input input-bordered input-warning w-full max-w-xs" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon className='icon' icon={faKey} size="lg" />
          </div>

        <div className='remember-forget'>
          <label><input type="checkbox"  />Remember me </label>
          <Link to="/forgotPassword">Forgot Password</Link>
        </div>
        <div className='signup-btn'>
          <button className="btn btn-neutral">Login</button>
        </div>

        <div className='login-link'>
        <p>Don't have an account? <Link className=' text-blue-800' to="/register">Register</Link> </p>
        </div>
      </form>
    </div>
  )
}

export default Login;
