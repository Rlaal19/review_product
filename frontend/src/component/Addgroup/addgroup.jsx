import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
const Addgroup = () => {
    const [group, setGroup] = useState()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/admin/addgroup', { group })
            .then(result => {
                console.log(result)
                if (result.data.status) {
                    alert(result.data.message)
                    navigate('/home')
                    navigate(0)
                } else {
                    alert(result.data.message);
                    navigate('/addgroup')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='mx-auto max-w-7xl grid mt-14'>
            <form onSubmit={handleSubmit}>
                <h1 className=' ml-20 font-extrabold text-3xl mb-2'>Add Group</h1>
                <div className=' ml-20 mt-4 grid gap-4 text-ls font-light'>
                    <input placeholder="Group" className="input input-bordered input-warning w-full max-w-xs"
                        onChange={(e) => setGroup(e.target.value)}
                    />
                </div>
                <button className=" ml-20 mt-5 mb-60 btn btn-accent ">เพิ่ม</button>
            </form>
        </div>
    )
}

export default Addgroup
