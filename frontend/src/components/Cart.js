import React, { useState, useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

  /*
  const totalPrice = () => {
    let total = 0
    products?.forEach(item => (total += item.quantity * item.price))
    return total.toFixed(2)
  }
  */

  return (
    <div className='absolute right-4 top-20 z-50 bg-background p-4 shadow-lg'>
        <h1 className='mb-4 text-black font-bold text-xl text-center'>Your Cart</h1>
        { cartItems?.map((item) => (
          <div key={item._id} className='flex items-center gap-4 mb-6'>
            <img src={item.src1} alt="" className='w-20 h-24 object-cover'/>
            <div className=''>
              <h1 className='text-lg font-bold capitalize'>{item.title}</h1>
              <div className='flex flex-row'>
                <div>{item.quantity} x ${item.price}</div>
                <DeleteIcon className='ml-5 text-red cursor-pointer' onClick={() => removeFromCart(item)}/>
              </div>
            </div>
          </div>
        ))}
        <div className='flex justify-between font-medium text-md mb-5'>
          <span>SUBTOTAL</span>
          <span>${getCartTotal().toFixed(2)}</span>
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