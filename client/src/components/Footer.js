import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-12 bg-black text-white'>
      <div className='flex flex-col py-16 justify-center items-center'>
        <div className='flex flex-col items-center text-md'>
          <h1 className='text-lg font-medium pb-4'>Sign up for newsletter and promo deals</h1>
          <div className='flex flex-row gap-2'>
            <input type="text" placeholder='Please enter your email' className='p-2 rounded-md text-black'></input>
            <button className='px-4 py-2 rounded-md font-bold bg-white text-black'>Join</button>
          </div>

        </div>
        <div className='flex flex-row gap-8 text-justify text-md pt-16'>
          <span className='cursor-pointer'>FAQ</span>
          <span className='cursor-pointer'>About</span>
          <span className='cursor-pointer'>Categories</span>
          <span className='cursor-pointer'>Stores</span>
          <span className='cursor-pointer'>Privacy Policy</span>
        </div>

      </div>
    </div>
  )
}

export default Footer