import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home'
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
      <Outlet /> 
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  { path:"/", element: <Layout />, children: [
    { path: "/", element: <Home />},
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
