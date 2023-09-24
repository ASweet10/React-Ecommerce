import React from 'react'
import artPic from '../images/pexels-couch.jpg'

const PictureTextSection = () => {
  return (
    <div className='flex flex-col md:flex-row text-center w-full py-6 md:px-20 px-4 bg-background'>
        <div className='flex flex-col md:w-1/2 w-full h-full items-center'>
            <h1 className='capitalize font-bold text-xl'>Home furnishing simplified</h1>
            <p className='items-center md:px-8 py-4 text-lg'>Shop from a variety of products that suit your needs.
              We carry a wide range of appliances, furniture, home decor, and more. 
            </p>
        </div>
        <div className='md:w-1/2 pt-8 w-full'>
            <img src={artPic} alt="" className='w-full h-full object-fit' />
        </div>
    </div>
  )
}

export default PictureTextSection