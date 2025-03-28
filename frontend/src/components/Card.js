import React from 'react'
import { Link } from 'react-router-dom'
import { FaCircle, FaRegCircle } from "react-icons/fa"

const Card = ({ product }) => {
  return (
    <Link to={`/product/${product?._id}`} reloadDocument> {/* reloadDocument: Re-render page with proper product displayed */}
        <div className='flex flex-col w-56 md:w-60 justify-center' key={product?._id}>
            <div className='w-full h-60 md:h-80 overflow-hidden relative'>
                { product?.isNewProduct === true && <span className='absolute mt-3 ml-3 bg-black text-white px-1 py-1 z-30 font-medium'>New</span> }
                { product?.onSale === true && <span className='absolute mt-3 ml-[148px] md:ml-[185px] bg-red text-white px-1 py-1 z-30 font-medium'>SALE</span> }
                <img src={ product?.src1 } alt="..." className='w-full h-full object-cover absolute z-10' />
                <img src={ product?.src2 } alt="..."className='w-full h-full object-cover absolute z-20 opacity-0 hover:opacity-100' />
            </div>
            <h2 className='text-lg font-semibold capitalize px-2'>{product?.title}</h2>
            <div className="flex">
                <div className='flex px-2'>
                    { product?.onSale ? (
                            <div className='flex flex-row gap-2 items-center'>
                                <h3 className='line-through text-red'>${product?.price}</h3>
                                <h3 className='text-lg'>${product?.salePrice}</h3>
                            </div>
                        ) : ( <h3 className='font font-normal text-sm first:text-gray-500'>${product?.price.toFixed(2)}</h3> )
                    }
                </div>
                
                <div className="flex gap-1">
                    { product?.colors?.map((color) => (
                        color === 'black' ? (<FaCircle className="text-black text-2xl"/>) :
                        color === 'blue' ? (<FaCircle className="text-blue text-2xl"/>) : 
                        color === 'white' ? (<FaCircle className="text-white text-2xl"/>) :                        
                        (<FaCircle className="text-red text-2xl"/>)
                    ))
                    }
                </div>
            </div>

        </div>
    </Link>
  )
}

export default Card