import React from 'react'
import Card from './Card'
import useFetch from '../hooks/useFetch'

const TrendingProducts = () => {
  const { data, loading, error } = useFetch( "/products?populate=*&[filters][type][$eq]=trending" )

  return (
    <div className='w-full py-20 px-8 md:px-28 bg-background'>
        <div className='flex flex-row items-center justify-center md:justify-left mb-12'>
          <h1 className='capitalize font-bold text-3xl'>Now Trending</h1>
        </div>
        <div className='relative flex overflow-x-hidden select-none'>
          <div className='flex gap-4 animate-marquee whitespace-nowrap'> {/* flex-wrap creates grid; horizontal layout without it */}
            { data?.map(item => (
              <Card item={item} key={item.id}/>
            ))}
          </div>

          <div className='flex gap-4 animate-marquee2 whitespace-nowrap'> {/* flex-wrap creates grid; horizontal layout without it */}
            { data?.map(item => (
              <Card item={item} key={item.id}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default TrendingProducts