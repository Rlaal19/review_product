import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'

function Addpost() {
  const [title, setTitle] = useState()
  const [descript, setDescript] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    Axios.post('http://localhost:3001/auth/post',{title,descript})
    .then(result => {console.log(result)
      if(result.data.status){
        alert(result.data.message)
        navigate('/showpost')
        navigate(0)
      }else{
        alert(result.data.message);
        navigate('/login')
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='mx-auto max-w-7xl grid mt-14'>
      <form onSubmit={handleSubmit}>
        <h1 className=' ml-20 font-extrabold text-2xl mb-2'>สร้างกระทู้</h1>
        <div className=' ml-20 mt-4 grid gap-3 font-light'>
          <div>Title</div>
          <input type="text" name = "title" id = "title" placeholder="หัวข้อ" className="input input-bordered input-md w-full max-w-xl"
            onChange={(e) => setTitle(e.target.value)}
          />

          <div>Description</div>
          <textarea id='descript' placeholder="รายละเอียด" className="textarea textarea-bordered textarea-md w-full max-w-xl :"
            onChange={(e) => setDescript(e.target.value)} 
          />
        </div>
        <button className=" ml-28 mt-5 mb-60 btn btn-accent ">Submit</button>
      </form>
    </div>
  )
}

export default Addpost
