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
    <div className='flex flex-row gap-6 flex-wrap justify-center'>
      { loading
          ? "Loading..."
          : data?.map((item) => ( <Card item={item} key={item.id}/> ))
      }
    </div>
  )
}

export default ProductList