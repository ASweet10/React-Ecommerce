import { createContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [ cartItems, setCartItems ] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

  const addToCart = (item, qty) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id)

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + qty }
            : cartItem
        )
      )
    } else {
      setCartItems([...cartItems, { ...item, quantity: qty }])
    }

    toast.success(item.title + ' Added!')
  }

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id)

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id))
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      )
    }
    toast.success(item.title + ' Removed!')
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems")
    if (cartItems) {
      setCartItems(JSON.parse(cartItems))
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}