import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import TrendingProducts from '../components/TrendingProducts'
import FeaturedProducts from '../components/FeaturedProducts'
import PictureTextA from '../components/PictureTextA'
import PictureTextB from '../components/PictureTextB'

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <FeaturedProducts /> 
      <PictureTextA/>
      <TrendingProducts />
      <PictureTextB/>
    </div>
  )
}

export default Home