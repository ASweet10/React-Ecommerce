import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/goat-logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { MdCopyright } from "react-icons/md"
import { FaBars, FaTimes } from 'react-icons/fa'
import Cart from './Cart'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [ cartOpen, setCartOpen ] = useState(false)
  const [ navOpen, setNavOpen ] = useState(false)
  const products = useSelector(state => state?.cart?.products)

  const navCategories = [
    { 'id': 1, 'title': 'Clothing', 'link': '/products/1' },
    { 'id': 2, 'title': 'Electronics', 'link': '/products/2' },
    { 'id': 3, 'title': 'Furniture', 'link': '/products/3' },
    { 'id': 4, 'title': 'Appliances', 'link': '/products/4' },
  ]

  return (
    <div className='flex w-full md:px-24 h-20 items-center bg-background overflow-hidden z-40 top-0 justify-between'>
      <div className='md:flex pl-4'>
        <div className='flex'>
          <Link to="/" className='flex items-center gap-3'>
            <img className='h-12 w-12' src={logo} alt="" />
            <div className='flex items-start gap-1'>
              <h1 className='text-sm md:text-xl font-bold uppercase'>Pinnacle Trading Co.</h1>
              <MdCopyright className=' text-xs'/>
            </div>
          </Link>

        </div>
      </div>

      {/* Desktop Nav */}
      <div className='hidden md:flex ml-auto pr-8 text-black'>
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

      {/* Mobile Bars */}
      <div onClick={() => setNavOpen(!navOpen)} className='cursor-pointer pr-12 z-10 md:hidden'>
        {navOpen ? <FaTimes className='text-text-dark dark:text-text-light' size={30}/> 
            : <FaBars className='text-text-dark dark:text-text-light' size={30}/> }
      </div>
      {/* Fullscreen Mobile Popup Nav */}
      {/* Turn this into pop-out list from right-hand side */}
      {navOpen && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 
          w-full h-screen bg-background'>
          {navCategories.map(({ id, link }) => {
            return(
              <li key={id}
              className='px-4 cursor-pointer capitalize text-4xl py-6
            hover:scale-105 duration-200 text-text-dark dark:text-text-light'>
              <Link 
              onClick={() => setNavOpen(!navOpen)}
              to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
            )
          })}
        </ul>
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