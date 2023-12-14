import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './hooks/ScrollToTop'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <div>
      <Toaster />
      <ScrollToTop />
      <Navbar />
      {/* https://reactrouter.com/en/main/components/outlet */}
      {/* Used in parent route element to render child route elements */}
      <Outlet /> 
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  { path:"/", element: <Layout />, children: [
    { path: "/", element: <Home />},
    { path: "/products/:id", element: <Products />},
    { path: "/product/:id", element: <Product />},
  ]}

])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
