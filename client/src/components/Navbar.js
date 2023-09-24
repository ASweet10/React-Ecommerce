import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/goat-logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Cart from './Cart'

const Navbar = () => {
  const [ cartOpen, setCartOpen ] = useState(false)
  const [ colorChange, setColorChange ] = useState(false)

  const navCategories = [
    {
      'id': 1, 'title': 'Headwear', 'link': '/products/1',
      'id': 2, 'title': 'Apparel', 'link': '/products/1',
      'id': 3, 'title': 'Accessories', 'link': '/products/1',
      'id': 4, 'title': 'Shoes', 'link': '/products/1',      
    }
  ]

  return (
    <div className='flex w-full md:px-40 h-20 items-center bg-background overflow-hidden z-40 top-0'>
      <div className='hidden md:flex'>
        <div className='flex items-center gap-4 pl-8'>
          <Link to="/" className='text-3xl'><img className='h-14 w-14' src={logo} alt=""></img></Link>
        </div>
        
      </div>


      <div className='flex ml-auto pr-8 text-black'>
        <div>
          <Link className='ml-auto mr-6 text-inherit cursor-pointer font-medium' to="/products/1">Headwear</Link>
          <Link className='ml-auto mr-6 text-inherit cursor-pointer font-medium' to="/products/1">Headwear</Link>
          <Link className='ml-auto mr-6 text-inherit cursor-pointer font-medium' to="/products/1">Headwear</Link>
        </div>      
        <div className='flex cursor-pointer'>
          <div className='flex flex-row relative' onClick={()=>setCartOpen(!cartOpen)}>
            <ShoppingCartIcon className='text-black' />
            <span className='flex items-center justify-center ml-3 mt-3 text-sm w-4 h-4 rounded-md bg-blue text-white absolute'>0</span>
          </div>
        </div>
      </div>

      {cartOpen && <Cart />}
    </div>
  )
}

export default Navbar