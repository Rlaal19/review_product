import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const nav = [
  {title:"Skincare",sectionId:"Skincare_section"},
  {title:"Cosmetic",sectionId:"Cosmetic_section"},
  {title:"Hair",sectionId:"Hair_section"},
  {title:"Fashion",sectionId:"Fashion_section"},
  {title:"Snack",sectionId:"Snack_section"},

]

const Navbartypepro = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick =(sectionId) =>{
    console.log(sectionId);
    document.getElementById(sectionId).scrollIntoView({behavior: "smooth"});

  }
  return (
    <div className=' sticky top-14 flex flex-col gap-3'>

        <div className=' bg-white bg-opacity-75 w-5/6 rounded-2xl'>
          <div className='ml-5 grid gap-2 pt-5 pb-5'>
            <div className=' pb-3 font-extrabold'>Type Product</div>
            {
              nav.map((e,i) =>(
                <div 
                  key={`${e}-navbar-${i}`}
                  onClick={() => handleClick(e.sectionId)}
                  onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
                  onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
                >
                  <FontAwesomeIcon className= {`text-xl mr-2  ${isMouseEnter[e.title]? "":"hidden" } `} icon={faBasketShopping}  />{e.title}</div>
              ))
            }
            
          </div>
        </div>

    </div>
  )
}

export default Navbartypepro
