import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import Navbaror from './component/Navber/navbar-or'
import Products from './routes/Products/Products'

function App() {
  return (
    <>
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    </>
  )
}

export default App
