import React from 'react'
import Card from './Card'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"
import { useState, useEffect } from 'react'

const TrendingProducts = () => {
  const [ index, setIndex ] = useState(0)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch(`${process.env.SERVER_URL}/api/products`)
        const json = await response.json()

        if (response.ok) {
          setProducts(json)
        }
      }

      fetchProducts()
  }, [])
  
  const handlePrevButton = () => {
    const newIndex = index === 0 ? products?.length - 1 : index - 1
    setIndex(newIndex)
  }
  const handleNextButton = () => {
    const newIndex = index === products?.length - 1 ? 0 : index + 1
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
    <div className='w-full py-20 md:px-16 bg-background'>
        <div className='flex flex-col md:flex-row items-center justify-left mb-20 md:ml-48'>
            <h1 className='md:w-2/5 capitalize font-bold text-3xl'>Trending Products</h1>
            <p className='md:w-3/5 text-lg font-normal mt-8 md:mt-0 mx-8 md:mx-20'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>

        <div className="flex relative justify-center items-center">
          <div className='flex items-center justify-center'>
            <div className='p-2 text-black cursor-pointer' onClick={() => slideLeft()}>
              <BsArrowLeftSquareFill size={35} />
            </div>
          </div>

          <div id='slider' className="flex w-full h-full  scroll scroll-smooth gap-6 overflow-x-hidden whitespace-nowrap">
            { error ? "Something went wrong" : loading ? "Loading..." : 
              products?.filter(product => product.isTrending === true)
                .map((product) => ( 
                  <Card product={product}/> 
                ))
            }
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