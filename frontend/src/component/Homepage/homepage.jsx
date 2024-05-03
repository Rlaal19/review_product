import "./homepage.css"
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../footer";
import Axios from 'axios'



let homeData = {
    title: "เว็บไซต์ของเราเป็นแหล่งรวมพิกัดสินค้าที่เราใช้จริงชอบจริงและอยากจะบอกต่ออะไรดีๆสามารถมาพูดคุยหรือดูสินค้าได้ที่นี่เลย",
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
        <div>
            <div className="container mx-auto flex items-center py-5">
                <div className=" ml-3 w-1/3">
                    <img src="https://i.pinimg.com/564x/fd/a1/69/fda169580a247530d44617d857bf9e68.jpg" className=" w-7/12 h-3/5 rounded-lg ml-20 mb-7 border-4" />
                    <img src="https://i.pinimg.com/564x/03/18/61/03186139aa88bcaf0e9bce3fea215267.jpg" className=" w-7/12 h-3/5 rounded-lg border-4" />
                </div>
                <div className="w-2/3">
                    <div className=" mockup-browser border bg-base-300">
                        <div className="mockup-browser-toolbar">
                            <div className="input">https://Rlaal.com</div>
                        </div>
                        <div className="flex justify-center px-4 py-4 bg-base-200">Hello! {user.email}</div>
                        <div className="flex justify-center px-4 py-4 bg-base-200 text-center">Welcome to our website, and thank you for choosing to use our services! We're delighted to have you join our community here </div>
                        <div className="flex justify-center px-4 py-4 bg-base-200">We hope you'll find a wonderful experience and everything you're looking for every time you visit </div>
                        <div className="flex justify-center px-4 py-16 bg-base-200 text-center">{homeData.title}</div>
                        <div className="flex justify-center px-4 py-4 bg-base-200">{homeData.desc}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage
