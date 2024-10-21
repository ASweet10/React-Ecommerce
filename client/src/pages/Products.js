import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import electronicsImage from '../images/pexels-electronics.jpg'
import Card from "../components/Card"

const Products = () => {
  const categoryID = parseInt(useParams().id)
  const [ maxPrice, setMaxPrice ] = useState(500)
  const [ sort, setSort ] = useState("asc") // Have to initialize as asc or desc, not empty string
  const [ selectedCategories, setSelectedCategories ] = useState([])

  const [ products, setProducts ] = useState(null)
  const [ error, setError ] = useState("")
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch("/api/products")
        const json = await response.json()

        if (response.ok) {
          setProducts(json)
        }
      }

      fetchProducts()
      console.log(products)
  }, [])
  
  /*
  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedCategories(
      isChecked 
        ? [...selectedCategories, value]
        : selectedCategories.filter(item => item !== value)
    )
    
  }
  */

  return (
    <div className='flex px-4 md:px-24 py-12 gap-8 bg-background'>

      {/* DESKTOP */}
      <div className='hidden md:flex'>
        {/* Left */}
        <div className='sticky h-full mt-8 px-4'>
          {/*
          <div className='mb-8'>
            <h2 className='font-medium mb-2 text-lg'>Categories</h2>
            {data?.map((item) => {
              return(
                <div className='mb-2' key={item.id}>
                  <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                  <label htmlFor={item.id} className='pl-2'>{item.attributes.title}</label>
                </div>
              )
            })}
          </div>
          */}
          <div className='mb-8'>
            <h2 className='font-medium mb-2 text-lg'>Price</h2>
            <div className='mb-2'>
              <input type="range" id="default-range" className='h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer' min={0} max={1000} defaultValue={500} onChange={ (e)=>setMaxPrice(e.target.value) } />
              <span className='mr-2'>${maxPrice}</span>
            </div>
          </div>


          <div className='mb-8'>
            <h2 className='font-medium mb-2 text-lg'>Sort By</h2>
            <div className='mb-2'>
              <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")} />
              <label className='ml-2' htmlFor='asc'>Price Low-High</label>
            </div>
            <div className='mb-2'>
              <input type="radio" id="desc" value="desc" name="price" onChange={(e) => setSort("desc")} />
              <label className='ml-2' htmlFor='desc'>Price High-Low</label>
            </div>
          </div>

          <div className='mb-8'>
            <h2 className='font-medium mb-2 text-lg'>Sort By</h2>
            <div className='mb-2'>
              <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")} />
              <label className='ml-2' htmlFor='asc'>Price Low-High</label>
            </div>
            <div className='mb-2'>
              <input type="radio" id="desc" value="desc" name="price" onChange={(e) => setSort("desc")} />
              <label className='ml-2' htmlFor='desc'>Price High-Low</label>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='flex flex-col w-full'>
          {/*
          <img className='w-full md:h-80 mb-8' alt=""
            src={ categoryID === 1 ? clothingImage
              : categoryID === 2 ? electronicsImage
              : categoryID === 3 ? furnitureImage
              : appliancesImage
              }
          />
          */}

          <div className='flex flex-row gap-6 flex-wrap justify-center'>
            { loading
                ? "Loading..."
                : products?.map((product) => ( 
                  <div key={product._id}>
                    <Card id={product._id} title={product.title}
                      isNewProduct={product.isNewProduct} onSale={product.onSale}
                      isFeatured={product.isFeatured} isTrending={product.isTrending}
                      src1={product.src1} src2={product.src2}
                      price={product.price} salePrice={product.salePrice}
                    /> 
                  </div>
                ))
            }
          </div>

        </div>
      </div>


      {/* MOBILE */}
        <div className='flex md:hidden flex-col w-full'>
          {/*
          <img className='w-full md:h-72 object-cover mb-8' alt=""
            src={ categoryID === 1 ? clothingImage
              : categoryID === 2 ? electronicsImage
              : categoryID === 3 ? furnitureImage
              : appliancesImage
              }
          />
          */}

          <div className='sticky h-full mt-8 px-4 flex flex-row gap-6'>
            <div className='mb-8'>
              <h2 className='font-medium mb-2 text-lg'>Max Price</h2>
              <div className='mb-2 flex flex-col gap-3'>
                <input type="range" id="default-range" className='h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer' min={0} max={1000} defaultValue={500} onChange={ (e)=>setMaxPrice(e.target.value) } />
                <span className='mr-2'>${maxPrice}</span>
              </div>
            </div>


            <div className='mb-8'>
              <h2 className='font-medium mb-2 text-base md:text-lg'>Sort By</h2>
              <div className='mb-2'>
                <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")} />
                <label className='ml-2' htmlFor='asc'>Price Low-High</label>
              </div>
              <div className='mb-2'>
                <input type="radio" id="desc" value="desc" name="price" onChange={(e) => setSort("desc")} />
                <label className='ml-2' htmlFor='desc'>Price High-Low</label>
              </div>
            </div>
          </div>

          <div className='flex flex-row gap-6 flex-wrap justify-center'>
            { loading
                ? "Loading..."
                : products?.map((product) => ( 
                  <div key={product._id}>
                    <Card id={product._id} title={product.title} description={product.description}
                      src1={product.src1} src2={product.src2}
                      price={product.price} salePrice={product.salePrice}
                    /> 
                  </div>
              ))
            }
          </div>

        </div>
    </div>
  )
}

export default Products