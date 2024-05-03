import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import piclogo from '../../image/Rlaal.png'



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


    const logout = (e) => {
        e.preventDefault()
        Axios.get('http://localhost:3001/auth/logout', { withCredentials: true })
            .then(result => {
                if (result.data.status) {
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
        <div className="navbar flex justify-between bg-gray-400 bg-opacity-80 rounded-lg text-white py-1 ">
            <div className=" w-1/12 h-1/12">
                <img src={piclogo} />
            </div>
            <div className="flex-none font-bold ">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/home" >Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="pt-1 btn btn-sm btn-ghost text-md font-bold">Post</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gray-400 bg-opacity-50 rounded-box w-52">
                            <li><Link to="/showpost">Showpost</Link></li>
                            {
                                loggedIn
                                    ? <li><Link to="/post">สร้างกระทู้</Link></li>
                                    : <li><Link to="/login">สร้างกระทู้</Link></li>
                            }
                        </ul>
                    </div>
                    <li><Link to="/contact">Contact</Link></li>
                    {
                        loggedIn

                            ? <Link to="/home"><button onClick={logout} className="btn btn-sm btn-ghost text-lg">Logout</button></Link>
                            : <Link to="/login"><button className="btn btn-sm btn-ghost text-lg">Login</button></Link>
                    }

                </ul>
            </div>
        </div>

    )
}

export default Navbar
