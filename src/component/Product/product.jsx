import React from 'react'
import { data } from '../../dataproduct/skincare'
import Contentcontrainer from '../Contentcontrainer';


const Product = () => {
  return(
    <Contentcontrainer
    title='Skincare'
    data={data}
    />
  )
}

export default Product
