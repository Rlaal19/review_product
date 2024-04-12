import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbartypepro = () => {
  return (
    <div className=' sticky top-14 flex flex-col gap-3'>
        <div className=' pb-3 font-extrabold'>
            Type Product
        </div>
        <div><FontAwesomeIcon icon={faBasketShopping} className=' text-xl mr-2' />Skincare</div>
        <div>Cusmetic</div>
        <div>Hair</div>
        <div>Farshion</div>
        <div>Snacks</div>
      </div>
  )
}

export default Navbartypepro
