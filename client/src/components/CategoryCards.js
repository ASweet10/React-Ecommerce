import React from 'react'
import clothingImage from '../images/pexels-strawhat2.jpg'
import furnitureImage from '../images/pexels-wickerchair.jpg'
import electronicsImage from '../images/pexels-towerspeakers.jpg'
import appliancesImage from '../images/pexels-washingmachine2.jpg'
import { Link } from 'react-router-dom'

const CategoryCards = () => {
  return (
    //Turn this into grid instead. 2 columns for mobile 3 or 4 for desktop. cards of each category
    <div className='flex w-full h-full pt-14 px-8 md:px-40 justify-center bg-background'>
      <div className='grid md:grid-cols-3 grid-cols-2 text-white gap-2'>

        <div className='flex overflow-hidden'>
          <img className='w-80 h-56 md:h-80 object-cover' src={furnitureImage} alt="" />
          <button className='absolute py-4 pl-4 my-40 md:my-64 border-none min-w-[100px] w-fit cursor-pointer font-medium text-2xl'>
            <Link to="/products/1">Clothing</Link>
          </button> 
        </div>

        <div className='flex overflow-hidden'>
          <img className='w-80 h-80 object-cover' src={electronicsImage} alt=""></img>
          <button className='absolute p-4 my-64 m-auto w-fit cursor-pointer font-medium text-2xl'>
            <Link to="/products/2">Electronics</Link>
          </button> 
        </div>

        <div className='flex flex-col'>
          <div className='flex gap-3 mb-1 relative overflow-hidden'>
            <img className='w-80 h-[156px] object-cover' src={clothingImage} alt=""></img>
            <button className='absolute p-3 my-24 border-none w-fit cursor-pointer font-medium text-2xl'>
              <Link to="/products/3">Clothing</Link>
            </button> 
          </div>
          <div className='flex relative mt-1 overflow-hidden'>
            <img className='w-80 h-[156px] object-cover' src={appliancesImage} alt=""></img>
            <button className='absolute p-3 my-24 border-none w-fit cursor-pointer font-medium text-2xl'>
              <Link to="/products/4">Appliances</Link>
            </button> 
          </div>
        </div>

      </div>
    </div>
  )
}

export default CategoryCards