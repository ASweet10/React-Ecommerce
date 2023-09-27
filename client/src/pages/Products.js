import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductList from '../components/ProductList'
import clothingImage from '../images/pexels-designshirt2.jpg'
import electronicsImage from '../images/pexels-drone.jpg'
import furnitureImage from '../images/pexels-white-chairs.jpg'
import appliancesImage from '../images/pexels-oldtv1.jpg'
import TrendingProducts from '../components/TrendingProducts'

const Products = () => {
  const categoryID = parseInt(useParams().id)
  const [ maxPrice, setMaxPrice ] = useState(500)
  const [ sort, setSort ] = useState("asc") // Have to initialize as asc or desc, not empty string
  const [ selectedCategories, setSelectedCategories ] = useState([])

  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const res = await axios.get(process.env.REACT_APP_API_URL + `/categories?populate=*&[filters][categories][id][$eq]=${categoryID}`, {
          headers: { Authorization: "Bearer " + process.env.REACT_APP_STRAPI_API_TOKEN }
        })
        setData(res.data.data)

      } catch(err) {
        setError(err)
      }
      console.log(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedCategories(
      isChecked 
        ? [...selectedCategories, value]
        : selectedCategories.filter(item => item !== value)
    )
    
  }

  //console.log(selectedCategories)

  return (
    <div className='flex px-12 md:px-40 py-12 bg-background'>

      {/* Left */}
      <div className='flex-1 sticky h-full mt-12'>
        <div className='mb-8'>
          <h2 className='font-medium mb-2 text-lg'>Categories</h2>
          {data?.map((item) => {
            return(
              <div className='mb-2' key={item.id}>
                <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            )
          })}
        </div>
        <div className='mb-8'>
          <h2 className='font-medium mb-2 text-lg'>Filter By Price</h2>
          <div className='mb-2'>
            <span className='mr-2'>0</span>
            <input type="range" min={0} max={1000} defaultValue={500} onChange={ (e)=>setMaxPrice(e.target.value) } />
            <span className='ml-2'>{maxPrice}</span>
          </div>
        </div>
        <div className='mb-8'>
        <h2 className='font-medium mb-2 text-lg'>Sort By</h2>
          <div className='mb-2'>
            <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")} />
            <label className='ml-2' htmlFor='asc'>Price (Lowest to Highest)</label>
          </div>
          <div className='mb-2'>
            <input type="radio" id="desc" value="desc" name="price" onChange={(e) => setSort("desc")} />
            <label className='ml-2' htmlFor='desc'>Price (Highest to Lowest)</label>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className='flex flex-col w-3/4'>
        <img 
          className='w-full h-60 object-cover mb-8'
          src={categoryID === 
            1 ? clothingImage : 
            2 ? electronicsImage :
            3 ? furnitureImage :
            appliancesImage } alt="" 
        />
        <ProductList catId={categoryID} maxPrice={maxPrice} sort={sort} categories={selectedCategories}/>
      </div>
    </div>
  )
}

export default Products