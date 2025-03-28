import React from 'react'
import carousel1 from '../images/carousel1.jpg'
import carousel2 from '../images/carousel2.jpg'
import carousel3 from '../images/carousel3.jpg'
import carousel4 from '../images/carousel4.jpg'
import carousel5 from '../images/carousel5.jpg'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { RxDotFilled } from "react-icons/rx"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const HeroCarousel = () => {
  const cardData = [
    {"id": 1, "src": carousel1 },
    {"id": 2, "src": carousel2 },
    {"id": 3, "src": carousel3 },
    {"id": 4, "src": carousel4 },
    {"id": 5, "src": carousel5 },
  ]

  const [ currentImg, setCurrentImg ] = useState(cardData[0])
  const [ imgIndex, setImgIndex ] = useState(0)
 
  const handlePrevButton = () => {
    const newIndex = imgIndex === 0 ? cardData.length - 1 : imgIndex - 1
    setImgIndex(newIndex)
  }
  const handleNextButton = () => {
    const newIndex = imgIndex === cardData.length - 1 ? 0 : imgIndex + 1
    setImgIndex(newIndex)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextButton()
    }, 8000)

    return () => clearInterval(timer)
  })

  return(
    <div className='flex justify-center items-center w-full h-96 2xl:h-[900px] md:h-[500px] overflow-hidden relative bg-background'>
      <div className='absolute top-1/2 left-[5%] p-2 text-black cursor-pointer hover:text-white' onClick={() => handlePrevButton()}>
        <IoIosArrowBack size={35} />
      </div>

      <div>
        <Link to={ "/products" }>
          <img src={ cardData[imgIndex].src } alt="" className='object-cover duration-500' />
        </Link>
      </div>

      <div className='absolute top-1/2 right-[5%] p-2 text-black cursor-pointer hover:text-white' onClick={() => handleNextButton()}>
        <IoIosArrowForward size={35} />
      </div>
    </div>
  )
}

export default HeroCarousel