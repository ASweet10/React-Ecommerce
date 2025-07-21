import { useState, useEffect } from 'react'
//import HeroCarousel from '../components/HeroCarousel'
import TrendingProducts from '../components/TrendingProducts'
import Products from '../components/Products'

const Home = () => {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch('https://react-ecommerce-w9ls.onrender.com/api/products')
        //const response = await fetch('http://localhost:5000/api/products')
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
      <Products products={products} />
      <TrendingProducts products={products} />
    </div>
  )
}

export default Home