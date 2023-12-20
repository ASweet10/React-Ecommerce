import React from 'react'
import Card from './Card'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"
import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const TrendingProducts = () => {
  const [ index, setIndex ] = useState(0)
  const [ data, setData ] = useState([])
 
  const handlePrevButton = () => {
    const newIndex = index === 0 ? data.length - 1 : index - 1
    setIndex(newIndex)
  }
  const handleNextButton = () => {
    const newIndex = index === data.length - 1 ? 0 : index + 1
    setIndex(newIndex)
  }

  useEffect(() => {
    const { data, loading, error } = useFetch( "/products?populate=*&[filters][type][$eq]=trending" )
  })

  return (
    <div className='w-full py-20 px-6 md:px-8 xl:px-28 bg-background'>
        <div className='flex flex-row items-center justify-center md:justify-left mb-12'>
          <h1 className='capitalize font-extrabold text-3xl'>Trending Now</h1>
        </div>

        <div className="flex relative justify-center">
          <div className='flex items-center justify-center'>
            <div className='p-2 text-black cursor-pointer' onClick={() => handlePrevButton()}>
              <BsArrowLeftSquareFill size={35} />
            </div>
          </div>

          <div className="flex gap-3 px-20 justify-center overflow-x-hidden">
            { data?.map(item => (
              <Card item={item} key={item.id} />
            ))}
          </div>

          <div className='flex items-center justify-center'>
            <div className='p-2 text-black cursor-pointer' onClick={() => handleNextButton()}>
              <BsArrowRightSquareFill size={35} />
            </div>
          </div>

        </div>
    </div>
  )
}

export default TrendingProducts