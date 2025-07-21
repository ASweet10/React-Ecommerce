import { useState } from 'react'
import Card from "../components/Card"

const Products = ({ products }) => {
    const [ categories, setCategories ] = useState(["computer", "audio", "gaming"])

    const [ maxPrice, setMaxPrice ] = useState(500)
    const [ sortOrder, setSortOrder ] = useState("asc")
    const allColors = ["Blue", "Black", "Red", "White"]
    const [ enabledColors, setEnabledColors ] = useState(["Blue", "Black", "Red", "White"])
    const disabledColors = allColors.filter(color => !enabledColors.includes(color))

    const handleClearFilters = () => {
    setCategories(["computer", "audio", "gaming"])
    setMaxPrice(500)
    setSortOrder("asc")
    setEnabledColors(["Blue", "Black", "Red", "White"])
  }

  const handleFilterChange = (name, value) => {
    name(value)
  }
    
  const handleChangeColor = (color) => {
    { enabledColors.includes(color) 
      ? setEnabledColors(enabledColors.filter(string => string !== color))
      : setEnabledColors([...enabledColors, color])
    }
  }

  const handleChangeCategory = (category) => {
    { categories.includes(category) 
      ? setCategories(categories.filter(string => string !== category))
      : setCategories([...categories, category])
    }
  }

  const filteredProducts = products?.filter((product) => {
    //const colorMatch = selectedColor !== '' ? product.colors.includes(selectedColor) : product // If selectedColor exists, filter products without that color
    const lessThanMaxPrice = product.price <= maxPrice // Filter out products with price larger than maxPrice

    return lessThanMaxPrice
  })

  // Ascending: Price low to high & vice versa
  const sortedProducts = filteredProducts?.sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price) )

  return (
    <div>
        <div className='flex py-12 gap-8 bg-background justify-center'>
            <div className='flex flex-col md:justify-center md:items-center'>
            {/* Filters */}
            <div className='flex flex-col gap-8 sticky h-full px-4 w-full items-center mb-12'>
                <div className='flex flex-col gap-8 items-center'>
                    <div className='flex flex-wrap gap-2 text-center justify-center'>
                        <div className={`${categories.includes("computer") ? "bg-black" : "bg-black opacity-50"} text-white p-3 h-14 cursor-pointer`}>
                            <input type="checkbox" id="computerParts" value="computerParts" name="computerParts" checked={categories.includes("computer")}
                            onChange={(e) => handleChangeCategory("computer")} className='hidden'
                            />
                            <label className="ml-2 text-xl font-bold cursor-pointer uppercase font-gothic" htmlFor='computerParts'>Computer</label> {/* htmlFor lets you click on text to affect checkbox */}
                        </div>
                        <div className={`${categories.includes("audio") ? "bg-black" : "bg-black opacity-50"} text-white p-3 h-14 cursor-pointer`}>
                            <input type="checkbox" id="audio" value="audio" name="audio" checked={categories.includes("audio")}
                            onChange={(e) => handleChangeCategory("audio")} className='hidden'
                            />
                            <label className="ml-2 text-xl font-bold cursor-pointer uppercase font-gothic" htmlFor='audio'>Audio</label>
                        </div>
                        <div className={`${categories.includes("gaming") ? "bg-black" : "bg-black opacity-50"} text-white p-3 h-14 cursor-pointer`}>
                            <input type="checkbox" id="gaming" value="gaming" name="gaming" checked={categories.includes("gaming")}
                            onChange={(e) => handleChangeCategory("gaming")} className='hidden'
                            />
                            <label className="ml-2 text-lg font-bold cursor-pointer uppercase font-gothic" htmlFor='gaming'>Gaming</label>
                        </div>
                    </div>


                    <div className='flex flex-col items-center'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 items-center text-center'>
                            { allColors.map((color) => {
                                return (
                                    <div 
                                        key={color} 
                                        className={`${enabledColors.includes(color) ? `bg-${color.toLowerCase()}` : `bg-${color.toLowerCase()} bg-opacity-50`} 
                                        ${color === "White" ? "text-gray" : "text-white"} 
                                        p-3 h-14 cursor-pointer`}
                                    >
                                        <input type="checkbox" id={color} value={color} name={color} checked={enabledColors.includes(color)}
                                            onChange={(e) => handleChangeColor(color)} className='hidden'
                                        />
                                        <label className="ml-2 text-lg font-bold cursor-pointer uppercase font-gothic" htmlFor={color}>{color}</label>
                                    </div>
                            )})}
                            {/*
                            <div className={`${enabledColors.includes("Black") ? "bg-black" : "bg-black opacity-50"} text-white p-3 h-14 cursor-pointer`}>
                                <input type="checkbox" id="black" value="black" name="black" checked={enabledColors.includes("black")}
                                    onChange={(e) => handleChangeColor("Black")} className='hidden'
                                />
                                <label className="ml-2 text-lg font-bold cursor-pointer uppercase font-gothic" htmlFor='black'>Black</label>
                            </div>
                            */}



                            {/*
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
                            */}
                        </div>
                    </div>
                </div>

                {/*
                    <div className='mb-8'>
                    <h2 className='font-medium mb-2 text-lg font-gothic'>Price</h2>
                    <div className='mb-2'>
                        <input className='h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer' min={0} max={1000} value={maxPrice} onChange={ (e) => handleFilterChange(setMaxPrice, e.target.value) } 
                        type="range" id="default-range"
                        />
                        <span className='mr-2'>${maxPrice}</span>
                    </div>
                    </div>
                */}
                
                <div className='flex flex-col md:flex-row gap-2'>
                    <div className={`${sortOrder === "asc" ? "bg-black" : "bg-black opacity-50"} text-white p-3 h-14 cursor-pointer`}>
                        <input type="radio" id="asc" value="asc" name="price" onChange={(e) => handleFilterChange(setSortOrder, "asc")} className='hidden'/>
                        <label className='ml-2 text-xl font-bold cursor-pointer uppercase font-gothic' htmlFor='asc'>{"Price Low-High"}</label>
                    </div>
                    <div className={`${sortOrder === "desc" ? "bg-black" : "bg-black opacity-50"} text-white p-3 h-14 cursor-pointer`}>
                        <input type="radio" id="desc" value="desc" name="price" onChange={(e) => handleFilterChange(setSortOrder, "desc")} className='hidden' />
                        <label className='ml-2 text-xl font-bold cursor-pointer uppercase font-gothic' htmlFor='desc'>Price High-Low</label>
                    </div>
                </div>
                
                {/*
                <div>
                <button className="bg-black text-white text-lg font-semibold p-2 rounded-lg font-gothic"
                    onClick={() => handleClearFilters()}
                >
                    Clear Filters
                </button>
                </div>
                */}
            </div>

            {/* Products */}
            <div className='flex flex-col w-full justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center'>
                { sortedProducts
                    ?.filter(product =>
                        categories.includes(product.category) && 
                        !product.colors.some(color => 
                            disabledColors.map(c => c.toLowerCase()).includes(color.toLowerCase())
                        )
                    )
                    .map((product) => (
                        <Card product={product} key={product._id} />
                    ))
                }
                </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Products