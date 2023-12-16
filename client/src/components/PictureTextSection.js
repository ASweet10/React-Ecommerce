import React from 'react'
import couch from '../images/pexels-textimage-couch.jpg'
import tv from '../images/pexels-textimage-tv.jpg'

const PictureTextSection = ({ type }) => {
  const tvHeader = "The Best in Modern Electronics"
  const tvDesc = "Shop from a wide variety of electronics from popular brands like Apple, Dell, and Sony."
  const couchHeader = "Home Furnishing Simplified"
  const couchDesc = "We carry both indoor and outdoor furniture that's designed to withstand the elements."

  return (
    <div className='flex flex-col md:flex-row text-center w-full py-20 gap-4 px-8 md:px-32 bg-background  items-center'>
        { type === "A" && (
          <div className='md:w-1/2 w-full'>
            <img src={tv} alt="" className='w-full max-h-[320px] object-fit' />
          </div>
        )}

        <div className='flex flex-col md:w-1/2 py-8 w-full h-full items-center'>
            <h1 className='capitalize font-bold text-2xl'>{ type === "A" ? tvHeader : couchHeader }</h1>
            <p className='items-center md:px-10 py-4 text-lg'>{ type === "A" ? tvDesc : couchDesc }</p>
        </div>
        
        { type === "B" && (
          <div className='md:w-1/2 w-full'>
            <img src={couch} alt="" className='w-full max-h-[360px] object-fit' />
          </div>
        )}
    </div>
  )
}

export default PictureTextSection