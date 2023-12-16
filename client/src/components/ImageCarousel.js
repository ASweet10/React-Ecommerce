import React from 'react'
//import clothingImage from '../images/pexels-designshirt2.jpg'
//import furnitureImage from '../images/pexels-wickerchair.jpg'
//import electronicsImage from '../images/pexels-towerspeakers.jpg'
//import appliancesImage from '../images/pexels-washingmachine2.jpg'
//import { Link } from 'react-router-dom'
//import { Carousel } from 'react-responsive-carousel'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const ImageCarousel = () => {
  const cardData = [
    {/*
    {"id": 1, "title": "Clothing", "src": clothingImage, "link": "/products/1"},
    {"id": 2, "title": "Electronics", "src": electronicsImage, "link": "/products/2"},
    {"id": 3, "title": "Furniture", "src": furnitureImage, "link": "/products/3"},
    {"id": 4, "title": "Appliances", "src": appliancesImage, "link": "/products/4"},
  */}
  ]
    return(
      <div className='flex justify-center items-center px-8 md:px-24 w-full h-96 overflow-hidden'>
        <BsArrowLeftCircleFill className='absolute w-12 h-12 text-white pl-4 hover:cursor-pointer' />
        { cardData.map((card) => (
          <img src={card.src} alt="" key={card.id} className='border-1 border-solid shadow-md w-full h-full' />
        ))}
        <BsArrowRightCircleFill className='absolute w-12 h-12 text-white pr-4 hover:cursor-pointer' />
      </div>
    )
}

export default ImageCarousel