import React from 'react'
import '../Login/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className='inputbox'>
          <input type="text" placeholder="Username" className="input input-bordered input-warning w-full max-w-xs" />
          <FontAwesomeIcon className='icon' icon={faUser} size="lg" />
          </div>

        <div className='inputbox'>
          <input type="text" placeholder="Password" className="input input-bordered input-warning w-full max-w-xs" />
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
