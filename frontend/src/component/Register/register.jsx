import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import './register.css'
import axios from '../../../../backend/node_modules/axios'

const Register = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result => {console.log(result)
      navigate('/login')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className='inputbox'>
          <input type="text" placeholder="Enter Username" className="input input-bordered input-warning w-full max-w-xs"
            onChange={(e) => setName(e.target.value)}
           />
          </div>
        <div className='inputbox'>
          <input type="email" placeholder="Enter E-mail" className="input input-bordered input-warning w-full max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>

        <div className='inputbox'>
          <input type="password" placeholder="Enter Password" className="input input-bordered input-warning w-full max-w-xs" 
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>

        <div className='remember'>
          <label><input type="checkbox"  />Remember me </label>
        </div>
        <div className='signup-btn'>
            <button className="btn btn-neutral">Sign up</button> 
        </div>
        

        <div className='register-link'>
        <p>You want to go to login? <Link className=' text-blue-800' to="/login">Login</Link> </p>
        </div>
      </form>
    </div>
  )
}

export default Register
