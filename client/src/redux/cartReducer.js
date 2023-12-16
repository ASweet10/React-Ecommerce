import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  products: []
}

// From https://redux-toolkit.js.org/tutorials/quick-start    "Create a Redux State Slice"
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart (action.payload data)
    addToCart: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id)

      if(item) {
        item.quantity += action.payload.quantity
        toast.success(`${item.title} added to the cart`)
        console.log(item.quantity)
      } else {
        state.products.push(action.payload)
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload)  // Remove items with given id
    },
    resetCart: (state) => {
      state.products = []
    },
  },
})

export const { addToCart, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer