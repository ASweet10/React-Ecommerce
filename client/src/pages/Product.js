import React, { useState, useEffect } from 'react'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { useParams } from 'react-router-dom'
import TrendingProducts from '../components/TrendingProducts'

const Product = () => {
  const id = useParams().id
  const [ quantity, setQuantity ] = useState(1)
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState()
  const [ displayImg, setDisplayImg ] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/products/${id}`)
      const json = await response.json()

      if (response.ok) {
        setData(json)
      }
    }
    fetchData()
    console.log(data)
  }, [])

  return (
    <div className='w-full py-6 px-6 md:px-16 bg-background'>
      { loading 
          ? ("Loading...") 
          : ( 
          //Wrap in React fragment; returning multiple things
          <>
            <div className='flex flex-col md:flex-row pt-8 gap-12'>
              {/* Left */}
              <div className='flex flex-col w-full md:w-1/2 gap-4'>
                <img className='w-full object-cover rounded-lg max-h-[360px]' alt='img'
                  src={ displayImg === 0 ? ( data?.src1 ) : ( data?.src2 ) }
                />
                <div className='flex gap-4'>
                  <img className='w-1/3 object-cover rounded-lg max-h-36 cursor-pointer' alt="img2" onClick={() => setDisplayImg(0)}
                    src={data?.src1}
                  />
                  <img className='w-1/3 object-cover rounded-lg max-h-36 cursor-pointer' alt="img2" onClick={() => setDisplayImg(1)}
                    src={data?.src2}
                  />
                </div>
              </div>

              {/* Right */}
              <div className='w-full md:w-3/5 gap-2 justify-center'> 

                <div className='flex justify-start pb-2'>
                  <h1 className='text-3xl font-bold'>{data?.title}</h1>
                </div>

                <div className='flex items-center'>
                  <StarIcon className='text-red'/>
                  <StarIcon className='text-red' />
                  <StarIcon className='text-red' />
                  <StarIcon className='text-red' />
                  <StarBorderIcon className='text-red' />
                  <p className='text-xl pl-3'>(160)</p>
                </div>

                <div className='flex flex-col justify-start pb-3'>
                  <h1 className='text-2xl font-bold py-3'>Details:</h1>
                  <p className='text-lg font-normal'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div className='pt-4 pb-10'>
                  <div className='flex flex-row items-center justify-evenly'>
                    <span className='text-2xl font-bold'>${(data?.price * quantity).toFixed(2)}</span>
                    <div className='flex items-center gap-4'>
                      <button onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}
                        className='cursor-pointer w-12 h-12 border-2 border-gray text-red text-2xl font-bold'
                      >
                        -
                      </button>
                      <h1 className='font-bold text-xl'>{quantity}</h1>
                      <button 
                        onClick={() => setQuantity(prev => prev+1)}
                        className='cursor-pointer w-12 h-12 border-2 border-gray text-green text-2xl font-bold'
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex w-full justify-center'>
                  <button 
                    className='bg-black text-white py-4 px-10 text-xl font-medium transition duration-300 hover:scale-105'
                  >
                    Add to Cart
                  </button>
                </div>


              </div>
            </div>
        </>)
      }

      <TrendingProducts />
    </div>
  )
}

export default Product