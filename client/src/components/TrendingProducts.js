import React from 'react'
import Card from './Card'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"
import { useState } from 'react'
import useFetch from '../hooks/useFetch'

const TrendingProducts = () => {
  const { data, loading, error } = useFetch( "/products?populate=*&[filters][type][$eq]=trending" )
  const [ index, setIndex ] = useState(0)
 
  const handlePrevButton = () => {
    const newIndex = index === 0 ? data.length - 1 : index - 1
    setIndex(newIndex)
  }
  const handleNextButton = () => {
    const newIndex = index === data.length - 1 ? 0 : index + 1
    setIndex(newIndex)
  }

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div className='w-full py-20 md:px-16 xl:px-28 bg-background'>
        <div className='flex flex-row items-center justify-center md:justify-left mb-12'>
          <h1 className='capitalize font-extrabold text-3xl'>Trending Now</h1>
        </div>

        <div className="flex relative justify-center items-center">
          <div className='flex items-center justify-center'>
            <div className='p-2 text-black cursor-pointer' onClick={() => slideLeft()}>
              <BsArrowLeftSquareFill size={35} />
            </div>
          </div>

          <div id='slider' className="flex w-full h-full scroll scroll-smooth gap-2 overflow-x-hidden whitespace-nowrap">
            { data?.map(item => (
              <Card item={item} key={item.id} className='inline-block' />
            ))}
          </div>

          <div className='flex items-center justify-center'>
            <div className='p-2 text-black cursor-pointer' onClick={() => slideRight()}>
              <BsArrowRightSquareFill size={35} />
            </div>
          </div>

        </div>
    </div>
  )
}

export default TrendingProducts