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
                if (response.data.loggedIn === true) {
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
        <div className="mt-7 mx-auto max-w-7xl">
            <div className="mockup-browser border bg-base-300">
                <div className="mockup-browser-toolbar">
                    <div className="input">https://Rlaal.com</div>
                </div>
                <div className="flex justify-center px-4 py-4 bg-base-200">Hello! {user.email}</div>
                <div className="flex justify-center px-4 py-4 bg-base-200">Hello! {user.email}</div>
                <div className="flex justify-center px-4 py-4 bg-base-200">Hello! {user.email}</div>
                <div className="flex justify-center px-4 py-16 bg-base-200">{homeData.title}</div>
                <div className="flex justify-center px-4 py-4 bg-base-200 mb-10">{homeData.desc}</div>
            </div>
            <Footer/>

        </div>
    )
}

export default Homepage
