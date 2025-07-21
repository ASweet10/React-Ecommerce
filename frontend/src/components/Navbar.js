import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/goat-logo.webp'
import { FaShoppingCart } from 'react-icons/fa'
import { PiDiamondFill } from "react-icons/pi"
import Cart from './Cart'
import { CartContext } from '../context/CartContext'

const Navbar = () => {
  const [ cartOpen, setCartOpen ] = useState(false)
  const [ navOpen, setNavOpen ] = useState(false)
  const [ products, setProducts ] = useState(0)
  const { cartItems } = useContext(CartContext)

  const navCategories = [
    { 'id': 1, 'title': 'Home', 'link': '/' },
    { 'id': 3, 'title': 'Products', 'link': '/products' },
  ]

  return (
    <div className='flex w-full h-20 bg-background justify-center'>
      <div className='flex h-full w-full md:w-1/2 items-center justify-between px-12'>
        <Link to="/">
          <img className='h-12 w-12 text-primary' src={logo} alt="" />
        </Link>

        <div className='flex text-primary'>
          <div className='flex flex-row cursor-pointer' onClick={()=>setCartOpen(!cartOpen)}>
            <FaShoppingCart className='text-primary text-2xl' />
            <span className='flex justify-center ml-3 mt-3 text-sm w-5 h-5 rounded-md bg-blue text-white absolute'>{cartItems ? cartItems?.length : 0}</span>
          </div>
        </div>

        {cartOpen && <Cart />}
      </div>

        {/* Popup */}
        {navOpen && (
          <div className='flex flex-col justify-center items-center h-screen bg-background z-50 border-2'>
            <div className='pb-16'>
              <img className='h-24 w-24' src={logo} alt="" />
            </div>

            <div className='hidden md:flex ml-auto text-primary'>
              <div className='flex cursor-pointer'>
                <div className='flex flex-row relative' onClick={()=>setCartOpen(!cartOpen)}>
                  <FaShoppingCart className='text-primary' />
                  <span className='flex items-center justify-center ml-3 mt-3 text-sm w-4 h-4 rounded-md bg-blue text-white absolute'>{cartItems ? cartItems?.length : 0}</span>
                </div>
              </div>
            </div>

            <ul className=''>
              {navCategories.map(({ id, title, link }) => {
                return(
                  <li key={id} className='px-4 uppercase font-bold text-4xl py-6 flex items-end gap-3 hover:grad'>
                    <PiDiamondFill className='text-primary active:text-gray'/>
                    <Link 
                      onClick={() => setNavOpen(!navOpen)}
                      to={link} smooth={true} duration={500}>
                        {title}
                    </Link>
                </li>
                )
              })}
            </ul>
          </div>
        )}
    </div>
  )
}

export default Navbar