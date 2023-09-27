import React from 'react'
import artPic from '../images/pexels-couch.jpg'
import tvPic from '../images/pexels-flatscreentv2.jpg'

const PictureTextSection = ({ type }) => {
  return (
    <div className='flex flex-col md:flex-row text-center w-full py-20 px-8 md:px-40 bg-background'>
        { type === "A" && (
          <div className='md:w-1/2 w-full'>
            <img src={tvPic} alt="" className='w-full max-h-[400px] object-fit' />
          </div>
        )}

        <div className='flex flex-col md:w-1/2 py-8 md:py-20 w-full h-full items-center'>
            <h1 className='capitalize font-bold text-xl'>{ type === "A" ? "The Best in Modern Electronics" : "Home Furnishing Simplified"}</h1>
            <p className='items-center md:px-8 py-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
        </div>
        
        { type === "B" && (
          <div className='md:w-1/2 w-full'>
            <img src={artPic} alt="" className='w-full max-h-[360px] object-fit' />
          </div>
        )}

    </div>
  )
}

export default PictureTextSection