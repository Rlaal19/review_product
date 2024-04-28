import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'



const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLoggedInStatus = async () => {
            try {
                const response = await Axios.get('http://localhost:3001/auth/section', { withCredentials: true });
                setLoggedIn(response.data.loggedIn);
            } catch (error) {
                console.error('Error fetching logged in status:', error);
            }
        };
        fetchLoggedInStatus();
    }, []);
    const logout = (e) =>{
        e.preventDefault()
        Axios.get('http://localhost:3001/auth/logout', { withCredentials: true })
        .then(result => {
            if(result.data.status){
                // const response = Axios.get('http://localhost:3001/auth/section', { withCredentials: true });
                // setLoggedIn(response.data.loggedIn);
                alert(result.data.message)
                navigate('/home')
                navigate(0)
            }
          })
          .catch(err => console.log(err))
    }

    return (
        <div className="navbar bg-success rounded-lg ">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Rlaal^^</a>
            </div>
            <div className="flex-none font-bold">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li>
                        <details>
                            <summary>
                                Post
                            </summary>
                            <ul className="p-2 bg-success rounded-t-none z-40">
                                <li><Link to="/showpost">Showpost</Link></li>
                                <li><Link to="/post">สร้างกระทู้</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                    {
                        loggedIn

                            ? <li><Link to="/home"><button onClick={logout} className="btn btn-sm btn-primary text-active">Logout</button></Link></li>
                            : <li><Link to="/login"><button className="btn btn-sm btn-primary text-active">Login</button></Link></li>
                    }

                </ul>
            </div>
        </div>

    )
}

export default Navbar
