import React from 'react'

function Navbar() {
    return (
        <div className=' bg-pink-300 p-4'>
            <div className='flex items-center justify-between'>
                <div>Rlaal</div>
                <div className='md:flex space-x-4'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Post</a></li>
                    <li><a href="#" className=' bg-black rounded-lg'>login</a></li>
                </div>
            </div>
        </div>

    )
}

export default Navbar
