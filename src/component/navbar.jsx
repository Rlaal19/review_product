import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className=' bg-success p-4 rounded-xl'>
            <div className='flex items-center justify-between font-mono font-bold'>
                <div>Rlaal^_^</div>
                <div className='md:flex space-x-4 font-mono font-bold'>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/post">Post</Link></li>
                    <li><Link to="/contect">Contect</Link></li>
                </div>
            </div>
        </div>

    )
}

export default Navbar
