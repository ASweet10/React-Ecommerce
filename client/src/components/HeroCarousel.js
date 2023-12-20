import React from 'react'
import clothingImage from '../images/pexels-carousel1.jpg'
import electronicsImage from '../images/pexels-carousel2.jpg'
import furnitureImage from '../images/pexels-carousel3.jpg'
import appliancesImage from '../images/pexels-carousel4.jpg'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { RxDotFilled } from "react-icons/rx"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const HeroCarousel = () => {
  const cardData = [
    {"id": 1, "title": "Clothing", "src": clothingImage, "link": "/products/1"},
    {"id": 2, "title": "Electronics", "src": electronicsImage, "link": "/products/2"},
    {"id": 3, "title": "Furniture", "src": furnitureImage, "link": "/products/3"},
    {"id": 4, "title": "Appliances", "src": appliancesImage, "link": "/products/4"},
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
      <div className='justify-center items-center w-full h-96 lg:h-[450px] overflow-hidden relative bg-background'>
        <div className='absolute top-1/4 md:top-[50%] left-[5%] p-2 text-black cursor-pointer hover:text-white' onClick={() => handlePrevButton()}>
          <IoIosArrowBack size={35} />
        </div>

        <div>
          <Link to={ cardData[imgIndex].link }>
            <img src={ cardData[imgIndex].src } alt="" className='object-cover duration-500' />
          </Link>
        </div>

        <div className='absolute top-1/4 md:top-[50%] right-[5%] p-2 text-black cursor-pointer hover:text-white' onClick={() => handleNextButton()}>
          <IoIosArrowForward size={35} /> 
        </div>
      </div>
    )
}

export default HeroCarousel