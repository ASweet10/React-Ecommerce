import React from 'react'
import Card from './Card'
import useFetch from '../hooks/useFetch'

const TrendingProducts = () => {
  const { data, loading, error } = useFetch( "/products?populate=*&[filters][type][$eq]=trending" )

  return (
    <div className='w-full py-28 px-8 md:px-32 bg-background'>
        <div className='flex flex-row items-center justify-center md:justify-left mb-12'>
          <h1 className='capitalize font-bold text-2xl'>Now Trending</h1>
        </div>
        <div className='flex flex-row justify-center'>
          <div className='flex flex-wrap justify-center gap-4'> {/* flex-wrap creates grid; horizontal layout without it */}
            { data?.slice(0, 4).map(item => (
              <Card item={item} key={item.id}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default TrendingProducts