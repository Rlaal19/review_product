import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

function Showpost() {
  const [Content, setContent] = useState([])
  useEffect(() => {
      Axios.get('http://localhost:3001/auth/showpost', { withCredentials: true })
      .then(res => setContent(res.data))
      .catch(err=> console.log(err))
    }, []);
  return (
    <div>
          {
            Content.map(User =>{
              return <div className='flex justify-center'>
                <div className=' w-1/4 h-1/3 text-lg bg-slate-50 shadow-xl rounded-md pl-2 mt-7 mb-3 grid gap-1 grid-rows-[10%_5%_60%_15%_10%]'>
                  <div className=' mt-2 flex gap-2 '><FontAwesomeIcon icon={faUser} />{User.user}</div>
                  <div>{User.title}</div>
                  <div className='flex justify-center items-center'>
                    <img src="https://i.pinimg.com/474x/3a/84/bd/3a84bdfc4a30eca3fcd37181415bbae0.jpg" className=" w-5/6 h-5/6" />
                  </div>
                  <div>{User.descript}</div>
                  <div className='flex justify-between'>
                    <div className='flex gap-1'>Like<FontAwesomeIcon className='mt-1' icon={faHeart} /></div>
                    <div className='pr-2'>comment</div>
                  </div>
                </div>
              </div>
            })
          }

          
        

    </div>
  )
}

export default Showpost
