import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/goat-logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Cart from './Cart'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [ cartOpen, setCartOpen ] = useState(false)
  const [ colorChange, setColorChange ] = useState(false)
  const products = useSelector(state => state?.cart?.products)

  const navCategories = [
    { 'id': 1, 'title': 'Electronics', 'link': '/products/1' },
    { 'id': 2, 'title': 'Furniture', 'link': '/products/2'},
    { 'id': 3, 'title': 'Clothing', 'link': '/products/3'},
    { 'id': 4, 'title': 'Appliances', 'link': '/products/4'},
  ]

  return (
    <div className='flex w-full md:px-40 h-20 items-center bg-background overflow-hidden z-40 top-0'>
      <div className='hidden md:flex'>
        <div className='flex items-center gap-4 pl-8'>
          <Link to="/" className='text-3xl'><img className='h-14 w-14' src={logo} alt=""></img></Link>
        </div>
      </div>

      <div className='flex ml-auto pr-8 text-black'>
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

      {cartOpen && <Cart />}
    </div>
  )
}

export default Navbar