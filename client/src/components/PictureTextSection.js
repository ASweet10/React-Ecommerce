import React from 'react'
import tv from '../images/pexels-textimage-tv.jpg'

const PictureTextSection = () => {
  return (
    <div className='flex flex-col md:flex-row text-center w-full py-20 gap-4 px-8 md:px-32 bg-background  items-center'>
        <div className='md:w-1/2 w-full'>
          <img src={tv} alt="" className='w-full max-h-[320px] object-fit' />
        </div>

        <div className='flex flex-col md:w-1/2 py-8 w-full h-full items-center'>
            <h1 className='capitalize font-bold text-2xl'>The Best in Modern Electronics</h1>
            <p className='items-center md:px-10 py-4 text-lg'>Shop from a wide variety of electronics from popular brands like Apple, Dell, and Sony.</p>
        </div>
    </div>
  )
}

export default PictureTextSection