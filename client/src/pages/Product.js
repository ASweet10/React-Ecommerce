import React, { useState, useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import TrendingProducts from '../components/TrendingProducts'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartReducer'

const Product = () => {
  const id = useParams().id
  const [ quantity, setQuantity ] = useState(1)
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const res = await axios.get(
          process.env.REACT_APP_API_URL + `/products/${id}?populate=*`, {
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
    <div className='w-full py-28 px-20 md:px-40 bg-background'>
      { loading 
          ? ("Loading...") 
          : ( 
          //Wrap in React fragment; returning multiple items
          <> 
            <div className='flex justify-center'>
              <h1 className='text-3xl font-bold'>{data?.attributes?.title}</h1>
            </div>
      
            <div className='flex flex-col md:flex-row md:px-40 pt-12 gap-8'>
              <div className='flex flex-col md:w-1/2'> {/* Left */}
                <div className='flex'>
                  <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} className='w-full object-cover' alt="" />
                </div>
              </div>
              <div className='w-full md:w-3/5 flex-col gap-7 justify-center'> {/* Right */}

                <div className='pb-16'>
                  <p className='text-lg font-normal'>{data?.attributes?.desc}</p>
                </div>

                <div className='pb-16'>
                  <div className='flex flex-row items-center justify-evenly'>
                    <span className='text-2xl font-bold'>${(data?.attributes?.price * quantity).toFixed(2)}</span>
                    <div className='flex items-center gap-4'>
                      <button 
                        onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev-1))}
                        className='items-center justify-center cursor-pointer w-12 h-12 border-4 text-xl font-bold'
                      >
                        -
                      </button>
                      <h1 className='font-bold text-xl'>{quantity}</h1>
                      <button 
                        onClick={() => setQuantity(prev => prev+1)}
                        className='items-center justify-center cursor-pointer w-12 h-12 border-4 text-xl font-bold'
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className='justify-center items-center text-center h-1/3'>
                  <button 
                    className='border-4 p-4 text-xl font-medium'
                    onClick={() => dispatch(addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity
                    }))}
                  >
                    Add to Cart <ShoppingCartIcon />
                  </button>
                </div>
              </div>
            </div>

            <div className='flex justify-center pt-36 pb-12'><h1 className='text-4xl font-bold'>Details</h1></div>
            <div className='flex flex-col md:flex-row justify-evenly text-center'>
              <div className='pb-8'>
                <h1 className='text-xl font-bold'>Weight</h1>
                <h2 className='text-lg font-medium'>250kg</h2>
              </div>
              <div className='pb-8'>
                <h1 className='text-xl font-bold'>Weight</h1>
                <h2 className='text-lg font-medium'>250kg</h2>
              </div>
              <div className='pb-8'>
                <h1 className='text-xl font-bold'>Weight</h1>
                <h2 className='text-lg font-medium'>250kg</h2>
              </div>
            </div>
        </>)
      }
      <TrendingProducts />

    </div>
  )
}

export default Product