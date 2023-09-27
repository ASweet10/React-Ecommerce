import React from 'react'
import Card from './Card'
import useFetch from '../hooks/useFetch'

const ProductList = ({ categories, maxPrice, sort, catId }) => {

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${categories.map(
      (item) => `&[filters][categories][id][$eq]=${item}`
      )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  )

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