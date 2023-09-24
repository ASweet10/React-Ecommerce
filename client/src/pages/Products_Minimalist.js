import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductList from '../components/ProductList'
import categoryImage from '../images/pexels-designshirt2.jpg'

const Products = () => {
  const categoryID = parseInt(useParams().id)
  const [ maxPrice, setMaxPrice ] = useState(500)
  const [ sort, setSort ] = useState("")
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

  const handleClick = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedCategories(
      isChecked 
        ? [...selectedCategories, value]
        : selectedCategories.filter(item => item !== value)
    )
    
  }

  console.log(selectedCategories)

  return (
    <div className='flex flex-col w-full py-14 px-20 md:pr-10 md:pl-20 bg-background'>
      <div className='text-center justify-center'>
        <h1 className='text-2xl font-bold'>All Products</h1>
      </div>
      <div className='flex flex-row justify-center gap-3 my-6'>

        <div className='border-solid border-2 p-2'>
          <button value={"all?"} onClick={handleClick}>All</button>
        </div>

        {data?.map((item) => {
          return(
            <div className='border-solid border-2 p-2' key={item.id}>
              <button id={item.id} value={item.id} onClick={handleClick}>{item.attributes.title}</button>
            </div>
          )
        })}

      </div>
      
      <div className='flex flex-col justify-center w-full'>
        <ProductList catId={categoryID} maxPrice={maxPrice} sort={sort} categories={selectedCategories}/>
      </div>
    </div>
  )
}

export default Products