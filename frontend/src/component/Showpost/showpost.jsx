import React from 'react'

function Showpost() {
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
