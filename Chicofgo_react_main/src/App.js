import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'
import Navbar from './Layout/Navber/navbar'
import Products from './pages/Products/Products'
import ProductDetail from './pages/Products/Product_detail/ProductDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ProductDetail />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
