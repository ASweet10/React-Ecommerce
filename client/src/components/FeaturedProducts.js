import React from 'react'
import Card from './Card'
import useFetch from '../hooks/useFetch'

const FeaturedProducts = () => {
  const { data, loading, error } = useFetch( "/products?populate=*&[filters][type][$eq]=featured" )

  return (
    <div className='w-full py-14 px-8 md:px-24 bg-background'>
        <div className='flex items-center justify-center mb-12'>
            <h1 className='capitalize font-bold text-3xl'>Featured Products</h1>
        </div>
        
        <div className='flex flex-wrap justify-center gap-4'> {/* flex-wrap creates grid; horizontal layout without it */}
          { error 
              ? "Something went wrong"  
              : loading 
                ? "Loading..." 
                : data?.map(item => ( <Card item={item} key={item.id}/> ))
          }
        </div>
    </div>
  )
}

export default FeaturedProducts