import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './forgotpassword.css'
import Axios from '../../../../backend/node_modules/axios'

function Forgotpassword() {
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/auth/forgotPassword',{email})
            .then(result => {
                console.log(result)
                if (result.data.status) {
                    alert("Check your email for reset password link")
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Forgot Password</h1>
                <div className='inputbox'>
                    <input type="email" placeholder="Enter E-mail" className="input input-bordered input-warning w-full max-w-xs"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>


                <div className='signup-btn'>
                    <button className="btn btn-neutral">Send</button>
                </div>


            </form>
        </div>
    )
}

export default Forgotpassword
