import "./homepage.css"
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from '../../../../backend/node_modules/axios'


let homeData = {
    title: "We've posted the location of good products for you here.",
    desc: "You can view products or talk here."
}
function Homepage() {
    const [user, setUser] = useState([])
    useEffect(() => {
        const fetchLoggedInStatus = async () => {
            try {
                const response = await Axios.get('http://localhost:3001/auth/section', { withCredentials: true });
                console.log(response)
                if(response.data.loggedIn === true){
                    const user = await Axios.get('http://localhost:3001/auth/home', { withCredentials: true });
                    setUser(user.data.Userdata)
                }
            } catch (error) {
                console.error('Error fetching logged in status:', error);
            }
        };
        fetchLoggedInStatus();
    }, []);
    return (
        <div className="home-bg">
            <form action=""></form>
            <div className="contrainer">
                <div className="home-con">
                    <div className="home-text">
                        <h1>{user.email}</h1>
                        <p>
                            {homeData.desc}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Homepage
