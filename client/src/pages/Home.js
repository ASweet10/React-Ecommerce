import React from 'react'
import CategoryCards from '../components/CategoryCards'
import TrendingProducts from '../components/TrendingProducts'
import FeaturedProducts from '../components/FeaturedProducts'
import PictureTextSection from '../components/PictureTextSection'

const Home = () => {
  return (
    <div className='w-full'>
      <CategoryCards />
      <FeaturedProducts /> 
      <PictureTextSection />
      <TrendingProducts />
    </div>
  )
}

export default Home