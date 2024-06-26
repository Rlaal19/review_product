import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function Addpost() {
  const [title, setTitle] = useState()
  const [descript ,setDescript] = useState()
  const [file, setFile] = useState()
  const navigate = useNavigate()
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    // const formdata = new FormData()
    // formdata.append('file', file)
    const response = await Axios.get('http://localhost:3001/auth/home', { withCredentials: true });
    const userData = response.data
    console.log(userData)
    Axios.post('http://localhost:3001/auth/post',{title, descript,userData})
    
    .then(result => {console.log(result)
      if(result.data.status){
        alert(result.data.message)
        navigate('/showpost')
        navigate(0)
      }else{
        alert(result.data.message);
        navigate('/post')
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='mx-auto max-w-7xl grid mt-14'>
      <form onSubmit={handleSubmit}>
        <h1 className=' ml-20 font-extrabold text-3xl mb-2'>สร้างกระทู้ <FontAwesomeIcon className='ml-1' icon={faPen} /></h1>
        <div className=' ml-20 mt-4 grid gap-4 text-ls font-light'>
          <div>Title</div>
          <input type="text" name = "title" id = "title" placeholder="หัวข้อ" className="input input-bordered input-md w-full max-w-xl"
            onChange={(e) => setTitle(e.target.value)}
          />

          <div>Description</div>
          <textarea id='descript' placeholder="รายละเอียด" className="textarea textarea-bordered textarea-md w-full max-w-xl :"
            onChange={(e) => setDescript(e.target.value)} 
          />
          {/* <div>Image</div> */}
          {/* <input type="file" accept='.jpeg, .png, .jpg, .svg' className="file-input file-input-borde w-full max-w-xs"
            onChange={(e) => setFile(e.target.files[0])}
          /> */}
        </div>
        <button className=" ml-20 mt-5 mb-60 btn btn-accent ">Submit</button>
      </form>
    </div>
  )
}

export default Addpost
