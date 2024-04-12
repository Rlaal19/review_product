import React from 'react'
import Navbartypepro from './navbartypepro'
import Product from './product'

function View() {
  return (
    <div className='mt-5 mx-auto max-w-7xl grid lg:grid-cols-[35%_65%]'>
      <Navbartypepro/>
      <Product/>
    </div>
  )
}

export default View
