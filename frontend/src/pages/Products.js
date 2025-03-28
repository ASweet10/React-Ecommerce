import React, { useState, useEffect } from 'react'
//import { useParams } from 'react-router-dom'
import Card from "../components/Card"
import { FaCircle } from "react-icons/fa"

const Products = () => {
  //const categoryID = parseInt(useParams().id)
  const [ products, setProducts ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const [ categories, setCategories ] = useState(["computer", "audio", "gaming"])

  const [ maxPrice, setMaxPrice ] = useState(500)
  const [ sortOrder, setSortOrder ] = useState("asc")
  const [ selectedColor, setSelectedColor ] = useState("")

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

  useEffect(() => {

  }, [categories])
  
  const handleClearFilters = () => {
    setCategories(["computer", "audio", "gaming"])
    setMaxPrice(500)
    setSortOrder("asc")
    setSelectedColor("")
  }
    
  const handleFilterChange = (name, value) => {
    name(value)
    console.log(value)
  }

  const handleChangeCategory = (category) => {
    { categories.includes(category) 
      ? setCategories(categories.filter(string => string !== category))
      : setCategories([...categories, category])
    }
  }

  const filteredProducts = products?.filter((product) => {
    const colorMatch = selectedColor !== '' ? product.colors.includes(selectedColor) : product // If selectedColor exists, filter products without that color
    const lessThanMaxPrice = product.price <= maxPrice // Filter out products with price larger than maxPrice

    return colorMatch && lessThanMaxPrice
  })

  // Ascending: Price low to high & vice versa
  const sortedProducts = filteredProducts?.sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price) )

  
  /*
  const findColorInArray = (product, color) => {
    for (let i = 0; i < product?.colors.length; i++) {
      if(product.colors[i] === selectedColor) {
        return product
      }
      return null
    }
  }

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedCategories(
      isChecked 
        ? [...selectedCategories, value]
        : selectedCategories.filter(item => item !== value)
    )
  }*/

  return (
    <div className='flex px-4 md:px-20 py-12 gap-8 bg-background'>

      {/* DESKTOP */}
      <div className='hidden md:flex'>
        {/* Left */}
        <div className='sticky h-full mt-8 px-4'>

          <div className='mb-8'>
            <div className='mb-2'>
              <input type="checkbox" id="computerParts" value="computerParts" name="computerParts" checked={categories.includes("computer")}
                onChange={(e) => handleChangeCategory("computer")} 
              />
              {/* htmlFor lets you click on text to affect checkbox */}
              <label className='ml-2 text-lg' htmlFor='computerParts'>Computer</label>
            </div>
            <div className='mb-2'>
              <input type="checkbox" id="audio" value="audio" name="audio" checked={categories.includes("audio")}
                onChange={(e) => handleChangeCategory("audio")}
              />
              <label className='ml-2 text-lg' htmlFor='audio'>Audio</label>
            </div>
            <div className='mb-2'>
              <input type="checkbox" id="gaming" value="gaming" name="gaming" checked={categories.includes("gaming")}
                onChange={(e) => handleChangeCategory("gaming")}
              />
              <label className='ml-2 text-lg' htmlFor='gaming'>Gaming</label>
            </div>
          </div>


          <div className='mb-8'>
            <h2 className='font-medium mb-2 text-lg'>Price</h2>
            <div className='mb-2'>
              <input className='h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer' min={0} max={1000} value={maxPrice} onChange={ (e) => handleFilterChange(setMaxPrice, e.target.value) } 
                type="range" id="default-range"
              />
              <span className='mr-2'>${maxPrice}</span>
            </div>
          </div>


          <div className='mb-8'>
            <h2 className='font-medium mb-2 text-lg'>Sort By</h2>
            <div className='mb-2'>
              <input type="radio" id="asc" value="asc" name="price" onChange={(e) => handleFilterChange(setSortOrder, "asc")} />
              <label className='ml-2' htmlFor='asc'>Price Low-High</label>
            </div>
            <div className='mb-2'>
              <input type="radio" id="desc" value="desc" name="price" onChange={(e) => handleFilterChange(setSortOrder, "desc")} />
              <label className='ml-2' htmlFor='desc'>Price High-Low</label>
            </div>
          </div>


          <div className='mb-8'>
            <h2 className='font-medium mb-2 text-lg'>Colors</h2>
            <div className='flex gap-1 bg-gray bg-opacity-70 p-2 rounded-lg w-32'>
              <div className="flex" onClick={(e) => handleFilterChange( setSelectedColor, "blue")}>
                { selectedColor === 'blue' | selectedColor === '' 
                  ? (<FaCircle className="text-blue text-2xl cursor-pointer" />) 
                  : (<FaCircle className="text-blue opacity-70 text-2xl cursor-pointer" />) 
                }
              </div>
              <div className="flex" onClick={(e) => handleFilterChange( setSelectedColor, "black")}>
                { selectedColor === 'black' | selectedColor === '' 
                  ? (<FaCircle className="text-black text-2xl cursor-pointer" />) 
                  : (<FaCircle className="text-black opacity-70 text-2xl cursor-pointer" />) 
                }
              </div>
              <div className="flex" onClick={(e) => handleFilterChange( setSelectedColor, "red")}>
                { selectedColor === 'red' | selectedColor === '' 
                  ? (<FaCircle className="text-red text-2xl cursor-pointer" />) 
                  : (<FaCircle className="text-red opacity-70 text-2xl cursor-pointer" />) 
                }
              </div>
              <div className="flex" onClick={(e) => handleFilterChange( setSelectedColor, "white")}>
                { selectedColor === 'white' | selectedColor === '' 
                  ? (<FaCircle className="text-white text-2xl cursor-pointer" />) 
                  : (<FaCircle className="text-white opacity-70 text-2xl cursor-pointer" />) 
                }
              </div>
              {/* <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")} />
              <label className='ml-2' htmlFor='asc'>Price Low-High</label>
              */}
            </div>
          </div>

          <div>
            <button className="bg-black text-white text-lg font-semibold px-4 py-2 rounded-lg"
              onClick={() => handleClearFilters()}
            >
              Clear filters
            </button>
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
            { loading ? "Loading..." : 
              sortedProducts
                ?.map((product) => (
                  categories.includes(product.category) ? <Card product={product} key={product._id} /> : <div key={product._id}></div>
                ))
            }
          </div>

        </div>
      </div>

    
      {/* MOBILE */}
      <div className='flex md:hidden flex-col w-full'>
        {/* TOP */}
        <div className='sticky h-full px-3 flex flex-col pb-16'>
          <div className="flex gap-16">
            <div className='mb-8'>
              <div className='mb-2 flex'>
                <input type="checkbox" id="computerParts" value="computerParts" name="computerParts" checked={categories.includes("computer")}
                  onChange={(e) => handleChangeCategory("computer")} 
                />
                {/* htmlFor lets you click on text to affect checkbox */}
                <label className='ml-2 text-lg' htmlFor='computerParts'>Computer</label>
              </div>
              <div className='mb-2'>
                <input type="checkbox" id="audio" value="audio" name="audio" checked={categories.includes("audio")}
                  onChange={(e) => handleChangeCategory("audio")}
                />
                <label className='ml-2 text-lg' htmlFor='audio'>Audio</label>
              </div>
              <div className='mb-2'>
                <input type="checkbox" id="gaming" value="gaming" name="gaming" checked={categories.includes("gaming")}
                  onChange={(e) => handleChangeCategory("gaming")}
                />
                <label className='ml-2 text-lg' htmlFor='gaming'>Gaming</label>
              </div>
            </div>

            <div className='mb-8'>
              <h2 className='font-medium mb-2 text-lg'>Price</h2>
              <div className='flex flex-col mb-2'>
                <input className='h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer' min={0} max={1000} value={maxPrice} onChange={ (e) => handleFilterChange(setMaxPrice, e.target.value) } 
                  type="range" id="default-range"
                />
                <span className='mr-2'>${maxPrice}</span>
              </div>
            </div>
          </div>

          <div className='flex gap-8'>
            <div className='mb-8'>
              <h2 className='font-medium mb-2 text-lg'>Sort By</h2>
              <div className='mb-2'>
                <input type="radio" id="asc" value="asc" name="price" onChange={(e) => handleFilterChange(setSortOrder, "asc")} />
                <label className='ml-2' htmlFor='asc'>Price Low-High</label>
              </div>
              <div className='mb-2'>
                <input type="radio" id="desc" value="desc" name="price" onChange={(e) => handleFilterChange(setSortOrder, "desc")} />
                <label className='ml-2' htmlFor='desc'>Price High-Low</label>
              </div>
            </div>

            <div className='mb-8'>
              <h2 className='font-medium mb-2 text-lg'>Colors</h2>
              <div className='flex gap-1 bg-gray bg-opacity-70 p-2 rounded-lg w-32'>
                <div className="flex" onClick={(e) => handleFilterChange( setSelectedColor, "blue")}>
                  { selectedColor === 'blue' | selectedColor === '' 
                    ? (<FaCircle className="text-blue text-2xl cursor-pointer" />) 
                    : (<FaCircle className="text-blue opacity-70 text-2xl cursor-pointer" />) 
                  }
                </div>
                <div className="flex" onClick={(e) => handleFilterChange( setSelectedColor, "black")}>
                  { selectedColor === 'black' | selectedColor === '' 
                    ? (<FaCircle className="text-black text-2xl cursor-pointer" />) 
                    : (<FaCircle className="text-black opacity-70 text-2xl cursor-pointer" />) 
                  }
                </div>
                <div className="flex" onClick={(e) => handleFilterChange( setSelectedColor, "red")}>
                  { selectedColor === 'red' | selectedColor === '' 
                    ? (<FaCircle className="text-red text-2xl cursor-pointer" />) 
                    : (<FaCircle className="text-red opacity-70 text-2xl cursor-pointer" />) 
                  }
                </div>
                <div className="flex" onClick={(e) => handleFilterChange( setSelectedColor, "white")}>
                  { selectedColor === 'white' | selectedColor === '' 
                    ? (<FaCircle className="text-white text-2xl cursor-pointer" />) 
                    : (<FaCircle className="text-white opacity-70 text-2xl cursor-pointer" />) 
                  }
                </div>
              </div>
            </div>
          </div>


          <div className="flex gap-2 items-center justify-center">
            <button className="bg-black text-white text-lg font-semibold px-4 py-2 rounded-lg"
              onClick={() => handleClearFilters()}
            >
              Clear filters
            </button>
          </div>
        </div>


        <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
          { loading ? "Loading..." : 
            sortedProducts
              ?.map((product) => (
                categories.includes(product.category) ? <Card product={product} key={product._id} /> : <div key={product._id}></div>
              ))
          }
        </div>

      </div>

    </div>
  )
}

export default Products