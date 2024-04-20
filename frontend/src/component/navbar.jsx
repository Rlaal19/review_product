import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar bg-success rounded-lg">
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
                            <ul className="p-2 bg-success rounded-t-none">
                                <li><Link to="/showpost">Showpost</Link></li>
                                <li><Link to="/post">สร้างกระทู้</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login"><button className="btn btn-sm btn-primary text-active">Login</button></Link></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar
