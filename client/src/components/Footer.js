import React from 'react'
import { FaXTwitter, FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='w-full px-8 bg-black text-white'>
      <div className='flex flex-col md:flex-row md:gap-8 py-16 justify-center items-center'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-16'>
          <p className='font-semibold text-2xl uppercase'>Stay in touch:</p>
          <div className='flex flex-row gap-2'>
            <input type="text" placeholder='Please enter your email' className='p-2 rounded-md text-black'></input>
            <button className='px-4 py-2 rounded-md font-bold bg-white text-black'>Join</button>
          </div>
        </div>

        <div className='flex flex-row gap-4 text-white text-2xl pt-10 md:pt-0'>
          <a href="/"><FaXTwitter /></a>
          <a href="/"><FaFacebookF /></a>
          <a href="/"><FaInstagram /></a>
          <a href="/"><FaPinterest /></a>
        </div>

      </div>
    </div>
  )
}

export default Footer