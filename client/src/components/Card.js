import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    console.log(item)
  return (
    <Link to={`/product/${item.id}`}>
        <div className='flex flex-col w-40'>
            <div className='w-full h-60 overflow-hidden relative'>
                {item.isNew && <span className='absolute mt-1 ml-1 bg-white text-teal-300 px-1 py-1 z-30 font-medium text-md'>New</span> }
                <img src={ process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url }
                    alt="" 
                    className='w-full h-full object-cover absolute z-10 transition-transform duration-300 transform hover:scale-110'
                />
                <img src={ process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img2?.data?.attributes?.url }
                    alt=""
                    className='w-full h-full object-cover absolute z-20 opacity-0 transition-opacity duration-300 transform hover:opacity-100'
                />
            </div>
            <h2 className='font-medium text-lg'>{item?.attributes?.title}</h2>
            <div className='flex'>
                <h3 className='font font-normal text-md first:text-gray-500'>${item?.attributes?.price.toFixed(2)}</h3>
                { !item?.attributes?.onSale &&
                    <>
                        <h3 className='font-medium text-lg first:text-gray-500 first:line-through'>

                        </h3>
                        <h3 className='text-bold items-center text-lg text-red'>SALE!</h3>
                    </>
                }
            </div>
        </div>
    </Link>

  )
}

export default Card