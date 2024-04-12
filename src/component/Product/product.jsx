import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import Pink from '../../assets/link';
import Picture from '../../assets/Picture';
import Description from '../../assets/Description';
import Productname from '../../assets/Productname';
import Score from '../../assets/Score';

const Product = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});
  return (
    <div>
      <div>Skincare</div>
      <div 
        className={`grid grid-cols-[27%_73%] transition-all rounded-lg py-5 ${isMouseEnter ['exp1'] ? "bg-pink-200":""} `}
        onMouseEnter={() => setIsMouseEnter({['exp1']: true })}
        onMouseLeave={() => setIsMouseEnter({['exp1']: false })}
      >

        <div className=' ml-5'>
          <div>
            <Score rating="5"/>
          </div>
          <Picture picture="https://i.pinimg.com/474x/76/9b/0c/769b0cdbb56d203cfb3b2333bcb08f05.jpg"/>
        </div>
        <div className='grid gap-3'>
          <Productname title="Redgel"/>
          <Description descript="sopdkoks"/>
          <Pink code="SHOPEE" link="https://css-generator.netlify.app/"/>
        </div>
      </div>
    </div>
  )
}

export default Product
