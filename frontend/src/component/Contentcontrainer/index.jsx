import React, { useEffect, useState } from 'react'
import Score from '../../assets/Score';
import Picture from '../../assets/Picture';
import Productname from '../../assets/Productname';
import Description from '../../assets/Description';
import Pink from '../../assets/link';
import Axios from 'axios'

function Contentcontrainer() {
    const [Content, setContent] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3001/admin/product', { withCredentials: true })
        .then(res => setContent(res.data))
        .catch(err=> console.log(err))
      }, []);
      const [isMouseEnter, setIsMouseEnter] = useState({});
      Content.map(User =>{
        console.log(User.group);
        const SECTION_ID =`${User.group}_section`
      })
      return (
        <div >
          <div className=' font-serif font-bold text-lg'>al</div>
          {
            Content.map(User => {
              <div
              // key ={`${SECTION_ID}-${index}`}
              //   className={`grid grid-cols-[27%_73%] transition-all rounded-lg py-5 ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-gray-300 bg-opacity-75 " : ""} `}
              //   onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
              //   onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
              >
                <div className=' ml-5'>
                  <div>
                    <Score rating={User.score} />
                  </div>
                  <Picture picture={User.image} />
                </div>
                <div className=' font-semibold grid gap-3'>
                  <Productname title={User.name} />
                  
                  <Description  descript={User.descript} />
                  
                  <div className='flex gap-4'>
                    <Pink shopee={User.linksp} lazada={User.linklz} />
                  </div>
                </div>
              </div>
    
              })
          }
        </div>
      )
  }
  
  export default Contentcontrainer;