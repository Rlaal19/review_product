import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'

function Showpost() {
  const [Content, setContent] = useState([])
  useEffect(() => {
    const fetchLoggedInStatus = async () => {
        try {
            const response = await Axios.get('http://localhost:3001/auth/showpost', { withCredentials: true });
            console.log(response.data.Postdata)
            setContent(response.data.Postdata)
        } catch (error) {
            console.error('Error fetching logged in status:', error);
        }
    };
    fetchLoggedInStatus();
}, []);
  return (
    <div>
      <div className=' mt-7 mx-auto max-w-7xl flex flex-4 gap-11'>

        <div className=' w-72 h-80 grid grid-rows-[10%_10%_50%_20%_10%]'>
          <div>User</div>
          <div>title</div>
          <div>image</div>
          <div>content</div>
          <div className='flex justify-between'>
            <div>Like</div>
            <div>read more</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Showpost
