import React, { useState } from 'react'
import buckethat1 from '../images/pexels-buckethat1.jpg'
import buckethat2 from '../images/pexels-buckethat2.jpg'
import greenSweatshirt1 from '../images/pexels-green-sweatshirt-1.jpg'
import greenSweatshirt2 from '../images/pexels-green-sweatshirt-2.jpg'
import purpleSweatshirt1 from '../images/pexels-purple-sweatshirt-1.jpg'
import purpleSweatshirt2 from '../images/pexels-purple-sweatshirt-2.jpg'
import redLongsleeve1 from '../images/pexels-red-longsleeve-1.jpg'
import redLongsleeve2 from '../images/pexels-red-longsleeve-2.jpg'
import DeleteIcon from '@mui/icons-material/Delete'

const Cart = () => {
    const [ numItems, setNumItems ] = useState(0)
    const data = [
        { id: 1, img: buckethat1, img2: buckethat2, title: 'Bucket Hat', desc: 'asdfadfsafdsafsdafdsafdsafd', isNew: true, price: 35 },
        { id: 2, img: greenSweatshirt1, img2: greenSweatshirt2, title: 'Green Sweatshirt', desc: 'asdfadfsafdsafsdafdsafdsafd', isNew: false, oldPrice: 80, price: 65 },
        { id: 3, img: purpleSweatshirt1, img2: purpleSweatshirt2, title: 'Purple Sweatshirt', desc: 'asdfadfsafdsafsdafdsafdsafd', isNew: true, price: 60 },
        { id: 4, img: redLongsleeve1, img2: redLongsleeve2, title: 'Red Long-sleeve', desc: 'asdfadfsafdsafsdafdsafdsafd', isNew: true, price: 60 },
    ]
  return (
    <div className='absolute right-5 top-20 z-50 bg-background p-5 shadow-lg'>
        <h1 className='mb-4 text-black font-bold text-xl text-center'>Your Cart(<span>{numItems}</span>)</h1>
        {data?.map(item=>(
          <div key={item.id} className='flex items-center gap-5 mb-8'>
            <img src={item.img} alt="" className='w-20 h-24 object-cover'/>
            <div className=''>
              <h1 className='text-md font-medium'>{item.title}</h1>
              <p className='mb-2'>{item.desc.substring(0, 100)}</p> {/* Show first 100 characters */}
              <div className='flex flex-row'>
                <div>1 x ${item.price}</div>
                <DeleteIcon className='ml-5 text-red cursor-pointer'/>
              </div>
            </div>
          </div>
        ))}
        <div className='flex justify-between font-medium text-md mb-5'>
          <span>SUBTOTAL</span>
          <span>$210</span>
        </div>
        <button className='flex items-center justify-center gap-5 w-40 p-3 mb-5 cursor-pointer border-none bg-black text-white font-medium'>Go To Checkout</button>
    </div>
  )
}

export default Cart