import React, {useState, useEffect} from 'react'
import Card from './Card'

const FeaturedProducts = () => {
  const [data, setData] = useState()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [ products, setProducts ] = useState([])

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

  return (
    <div className='w-full py-8 md:py-20 px-8 md:px-24 bg-background'>
        <div className='flex flex-col md:flex-row items-center justify-left mb-20 md:ml-48'>
            <h1 className='md:w-1/3 capitalize font-bold text-3xl'>Featured Products</h1>
            <p className='md:w-2/3 text-lg font-normal mt-8 md:mt-0 mx-8 md:mx-60'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        
        <div className='flex flex-wrap justify-center gap-12'> {/* flex-wrap creates grid; horizontal layout without it */}
          { error ? "Something went wrong" : loading  ? "Loading..." : 
                  products?.filter(product => product.isFeatured === true)
                  .map((product) => ( 
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
  )
}

export default FeaturedProducts