import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/goat-logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { FaBars, FaTimes } from 'react-icons/fa'
import { PiDiamond, PiDiamondFill } from "react-icons/pi"
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
    <div className='flex w-full md:px-24 h-20 items-center bg-background overflow-hidden z-40 top-0 justify-between'>
      <div className='md:flex pl-4'>
        <div className='flex'>
          <Link to="/" className='flex items-center gap-3'>
            <img className='h-12 w-12 text-primary' src={logo} alt="" />
          </Link>

        </div>
      </div>

      {/* Desktop Nav */}
      <div className='hidden md:flex ml-auto pr-8 text-primary'>
        { navCategories.map( (item) => (
            <Link className='mr-6 cursor-pointer font-medium' to={item.link} key={item.id}>{item.title}</Link>
        ))}
        <div className='flex cursor-pointer'>
          <div className='flex flex-row relative' onClick={()=>setCartOpen(!cartOpen)}>
            <ShoppingCartIcon className='text-primary' />
            <span className='flex items-center justify-center ml-3 mt-3 text-sm w-4 h-4 rounded-md bg-blue text-white absolute'>{cartItems ? cartItems?.length : 0}</span>
          </div>
        </div>
      </div>

      {/* Mobile Bars */}
      <div onClick={() => setNavOpen(!navOpen)} className='cursor-pointer pr-12 z-10 md:hidden'>
        {navOpen ? <FaTimes className='text-text-dark dark:text-text-light' size={30}/> 
            : <FaBars className='text-text-dark dark:text-text-light' size={30}/> }
      </div>

      {/* Fullscreen Mobile Popup Nav */}
      {navOpen && (
        <div className='flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-background z-50'>
          <div className='pb-16'>
            <img className='h-24 w-24' src={logo} alt="" />
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
      {/*
      { navOpen && (
        <div className='md:hidden flex'>
          <div className='hidden md:flex ml-auto pr-8 text-black w-2/3'>
            { navCategories.map( (item) => (
                <Link className='mr-6 cursor-pointer font-medium' to={item.link} key={item.id}>{item.title}</Link>
            ))}
            <div className='flex cursor-pointer'>
              <div className='flex flex-row relative' onClick={()=>setCartOpen(!cartOpen)}>
                <ShoppingCartIcon className='text-black' />
                <span className='flex items-center justify-center ml-3 mt-3 text-sm w-4 h-4 rounded-md bg-blue text-white absolute'>{products ? products?.length : 0}</span>
              </div>
            </div>
          </div>
        </div>
      )}
            */}


      {cartOpen && <Cart />}
    </div>
  )
}

export default Navbar