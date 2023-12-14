import React from 'react'
import ImageCarousel from './ImageCarousel'

const CategoryCards = () => {
  return (
    <div className='flex w-full h-full pt-14 px-8 md:px-40 justify-center bg-background'>
      <ImageCarousel />
      {/*
      <div className='flex flex-col md:grid md:grid-cols-4 text-white gap-1'>
        <div className='flex overflow-hidden'>
          <Link to="/products/1"><img className='w-full h-max-[80px] md:w-80 md:h-80 object-cover' src={furnitureImage} alt="" /></Link>
          <h1 className='absolute p-4 my-64 m-auto w-fit cursor-pointer font-medium text-2xl'>Furniture</h1>
        </div>

        <div className='flex overflow-hidden'>
          <Link to="/products/2"><img className='w-80 h-56 md:h-80 object-cover' src={electronicsImage} alt="" /></Link>
          <h1 className='absolute p-4 my-64 m-auto w-fit cursor-pointer font-medium text-2xl'>Electronics</h1>
        </div>

        <div className='flex overflow-hidden'>
          <Link to="/products/2"><img className='w-80 h-56 md:h-80 object-cover' src={electronicsImage} alt="" /></Link>
          <h1 className='absolute p-4 my-64 m-auto w-fit cursor-pointer font-medium text-2xl'>Electronics</h1>
        </div>

        <div className='flex overflow-hidden'>
          <Link to="/products/2"><img className='w-80 h-56 md:h-80 object-cover' src={electronicsImage} alt="" /></Link>
          <h1 className='absolute p-4 my-64 m-auto w-fit cursor-pointer font-medium text-2xl'>Electronics</h1>
        </div>
        
        {/* OLD LAYOUT, 2 FULL IMAGES + 2 HALF IMAGES ON RIGHT}
        {/*
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
      */}
    </div>
  )
}

export default CategoryCards