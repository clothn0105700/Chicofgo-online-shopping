import React from 'react'
import Navbaror from '../../component/Navber/navbar-or'
import Footer from '../../component/Footer/Footer'
import Path from '../../component/Item/Path/Path'
import List from '../../component/Products/List'

const Products = () => {
  return (
    <>
      <Navbaror />
      <Path pathObj={{ path: ['．商品列表'] }} />
      <List />
      <Footer />
    </>
  )
}

export default Products
