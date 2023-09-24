import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const ProductList = ({ categories, maxPrice, sort, catId }) => {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const res = await axios.get(
          process.env.REACT_APP_API_URL + `/products?populate=*&[filters][categories][id][$eq]=${catId}${categories.map(
            (item) => `&[filters][categories][id][$eq]=${item}`
            )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`, {
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

  return (
    <div className='flex justify-evenly flex-wrap'>
      { loading
          ? "Loading..."
          : data?.map((item) => ( <Card item={item} key={item.id}/> ))
      }
    </div>
  )
}

export default ProductList