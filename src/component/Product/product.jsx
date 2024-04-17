import React from 'react'
import Contentcontrainer from '../Contentcontrainer';
// import data
import { data as skincare } from '../../dataproduct/skincare'
import {data as cosmetic} from '../../dataproduct/cosmetic'
import {data as fashion} from '../../dataproduct/fashion'
import {data as hair} from '../../dataproduct/hair'
import {data as snack} from '../../dataproduct/snack'

const Product = () => {
  return(
   <div className='grid gap-5'>
     <Contentcontrainer
      title='Skincare'
      data={skincare} 
      />
      <Contentcontrainer
      title='Cosmetic'
      data={cosmetic}
      />
      <Contentcontrainer
      title='Hair'
      data={hair}
      />
      <Contentcontrainer
      title='Fashion'
      data={fashion}
      />
      <Contentcontrainer
      title='Snack'
      data={snack}
      />
   </div>
  )
}

export default Product
