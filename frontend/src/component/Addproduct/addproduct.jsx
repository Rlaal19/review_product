import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'

function Addproduct() {
    const [group, setGroup] = useState()
    const [catagory, setCatagory] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3001/admin/addgroup', { withCredentials: true })
        .then(res => setCatagory(res.data))
        .catch(err=> console.log(err))
      }, []);
    const [score, setScore] = useState()
    const [image, setImage] = useState()
    const [title, setTitle] = useState()
    const [descript, setDescript] = useState()
    const [linksp, setLinksp] = useState()
    const [linklz, setLinklz] = useState()

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(group);
        Axios.post('http://localhost:3001/admin/addproduct', { group, score, image, title, descript, linksp, linklz })

            .then(result => {
                console.log(result)
                if (result.data.status) {
                    alert(result.data.message)
                    navigate('/product')
                    navigate(0)
                } else {
                    alert(result.data.message);
                    navigate('/addproduct')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='mx-auto max-w-7xl grid mt-14'>
            <form onSubmit={handleSubmit}>
                <h1 className=' ml-20 font-extrabold text-3xl mb-2'>Add Product</h1>
                <div className=' ml-20 mt-4 grid gap-4 text-ls font-light'>
                    
                    <select className=" w-full max-w-xs h-10" onChange={(e) => setGroup(e.target.value)} >
                        {
                            catagory.map((item) => (
                            <option key={item._id} value = {item._id}>{item.group}</option> 
                        ))} 
                        
                    </select> 
                    <input placeholder="Score" className="input input-bordered input-warning w-full max-w-xs"
                        onChange={(e) => setScore(e.target.value)}
                    />
                    <input placeholder="Image" className="input input-bordered input-warning w-full max-w-xs"
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <input placeholder="Title" className="input input-bordered input-warning w-full max-w-xs"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea placeholder="Description" className="textarea textarea-bordered textarea-warning textarea-md w-full max-w-xs :"
                        onChange={(e) => setDescript(e.target.value)}
                    />
                    <input placeholder="Link Shopee" className="input input-bordered input-warning w-full max-w-xs"
                        onChange={(e) => setLinksp(e.target.value)}
                    />
                    <input placeholder="Link Lazada" className="input input-bordered input-warning w-full max-w-xs"
                        onChange={(e) => setLinklz(e.target.value)}
                    />

                </div>
                <button className=" ml-20 mt-5 mb-20 btn btn-accent ">เพิ่ม</button>
            </form>

        </div>
    )
}

export default Addproduct
