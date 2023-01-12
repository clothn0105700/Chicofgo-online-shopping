import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'
import Navbaror from './Layout/Navber/navbar'
import Products from './pages/Products/Products'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbaror/>
        <Products />
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
