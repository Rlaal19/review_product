import React from 'react'
import { Link } from 'react-router-dom';
import '../Register/register.css'

const Register = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Sign up</h1>
        <div className='inputbox'>
          <input type="text" placeholder="Username" className="input input-bordered input-warning w-full max-w-xs" />
          </div>
        <div className='inputbox'>
          <input type="text" placeholder="E-mail" className="input input-bordered input-warning w-full max-w-xs" />
          </div>

        <div className='inputbox'>
          <input type="text" placeholder="Password" className="input input-bordered input-warning w-full max-w-xs" />
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
