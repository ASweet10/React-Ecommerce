import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, title, price, salePrice, isNewProduct, onSale, src1, src2 }) => {
  return (
    <Link to={`/product/${id}`} reloadDocument> {/* reloadDocument: Re-render page with proper product displayed */}
        <div className='flex flex-col w-52 md:w-80 justify-center'>
            <div className='w-full h-60 md:h-96 overflow-hidden relative'>
                { isNewProduct === true && <span className='absolute mt-3 ml-3 bg-black text-white px-1 py-1 z-30 font-medium'>New</span> }
                { onSale === true && <span className='absolute mt-3 ml-[148px] md:ml-[180px] bg-red text-white px-1 py-1 z-30 font-medium'>SALE</span> }
                <img src={ src1 } alt="..." 
                    className='w-full h-full object-cover absolute z-10 transition-transform duration-300 transform hover:scale-110'
                />
                <img src={ src2 } alt="..."
                    className='w-full h-full object-cover absolute z-20 opacity-0 transition-opacity duration-300 transform hover:opacity-100'
                />
            </div>
            <h2 className='text-lg font-semibold capitalize px-2'>{title}</h2>
            <div className='flex px-2'>
                { onSale ? (
                        <div className='flex flex-row gap-2 items-center'>
                            <h3 className='line-through'>${price}</h3>
                            <h3 className='text-lg'>${salePrice}</h3>
                        </div>
                    ) : ( <h3 className='font font-normal text-sm first:text-gray-500'>${price.toFixed(2)}</h3> )
                }
            </div>
        </div>
    </Link>
  )
}

export default Card