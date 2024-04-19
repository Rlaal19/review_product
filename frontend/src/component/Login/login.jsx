import React, { useState } from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../backend/node_modules/axios'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
        navigate('/showpost')
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
          <a href="#">Forget password?</a>
        </div>
        <button className="btn btn-neutral">Login</button>

        <div className='login-link'>
        <p>Don't have an account? <Link className=' text-blue-800' to="/register">Register</Link> </p>
        </div>
      </form>
    </div>
  )
}

export default Login;
