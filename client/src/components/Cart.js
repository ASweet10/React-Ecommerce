import React, {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import toast from 'react-hot-toast'

const Cart = () => {
  const [products, setProducts] = useState()

  const totalPrice = () => {
    let total = 0
    products?.forEach(item => (total += item.quantity * item.price))
    return total.toFixed(2)
  }

  const handleDeleteItem = async ( id, quantity, title ) => {
    toast.error('Removed ' + title)
  }

  return (
    <div className='absolute right-4 top-20 z-50 bg-background p-4 shadow-lg'>
        <h1 className='mb-4 text-black font-bold text-xl text-center'>Your Cart</h1>
        {products?.map(item=>(
          <div key={item.id} className='flex items-center gap-4 mb-6'>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" className='w-20 h-24 object-cover'/>
            <div className=''>
              <h1 className='text-lg font-bold capitalize'>{item.title}</h1>
              <p className='mb-2'>{item.desc?.substring(0, 50)}</p> {/* Show first 50 characters */}
              <div className='flex flex-row'>
                <div>{item.quantity} x ${item.price}</div>
                <DeleteIcon className='ml-5 text-red cursor-pointer' onClick={() => handleDeleteItem(item.id, item.quantity, item.title)}/>
              </div>
            </div>
          </div>
        ))}
        <div className='flex justify-between font-medium text-md mb-5'>
          <span>SUBTOTAL</span>
          <span>${totalPrice()}</span>
        </div>
        <button 
          className='flex items-center justify-center gap-5 w-40 p-3 mb-5 cursor-pointer border-none bg-black text-white font-medium transition duration-300 hover:scale-105'
        >
          Go To Checkout
        </button>
    </div>
  )
}

export default Cart