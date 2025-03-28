import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import TrendingProducts from '../components/TrendingProducts'
import FeaturedProducts from '../components/FeaturedProducts'
import PictureTextSection from '../components/PictureTextSection'

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <FeaturedProducts /> 
      <PictureTextSection />
      <TrendingProducts />
    </div>
  )
}

export default Home