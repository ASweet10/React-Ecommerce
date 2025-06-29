import React from 'react'
import gaming from '../images/gaming.webp'

const PictureTextB = () => {

  return (
    <div className='flex flex-col md:flex-row text-center w-full py-20 gap-4 px-8 md:px-32 bg-background items-center'>
      <div className="flex flex-col md:w-1/2 py-8 w-full h-full items-center">
          <h1 className='capitalize font-bold text-3xl'>The Best Tech on the Market</h1>
          <p className='items-center mx:2 md:mx-8 md:px-10 py-4 text-xl'>Shop from a wide variety of electronics</p>
      </div>

      <div className="md:w-1/2 w-full">
        <img src={gaming} alt="" className='w-full max-h-[500px] object-fit' />
      </div>
    </div>
  )
}

export default PictureTextB