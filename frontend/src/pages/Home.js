import HeroCarousel from '../components/HeroCarousel'
import TrendingProducts from '../components/TrendingProducts'
import FeaturedProducts from '../components/FeaturedProducts'
import PictureTextA from '../components/PictureTextA'
import PictureTextB from '../components/PictureTextB'
import { useState, useEffect } from 'react'

const Home = () => {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch('https://react-ecommerce-w9ls.onrender.com/api/products')
        const json = await response.json()

        if (response.ok) {
          setProducts(json)
        }
      }

      fetchProducts()
      console.log(products)
  }, [])

  return (
    <div>
      <HeroCarousel />
      <FeaturedProducts products={products} /> 
      <PictureTextA/>
      <TrendingProducts products={products} />
      <PictureTextB/>
    </div>
  )
}

export default Home