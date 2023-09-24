import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Products_Minimalist from './pages/Products_Minimalist'
import Products_Lama from './pages/Products_LamaDevStyle'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './hooks/ScrollToTop'

const Layout = () => {
  return (
    <div>
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
    { path: "/products/:id", element: <Products_Lama />},
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
