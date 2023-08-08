import React from 'react'
import Banner from '../../components/Banner.js'
import About from '../../components/About.js'
import ProductsPreview from '../../components/ProductsPreview.js'
function Home({productsItems,handleAddProduct}) {
  return (
    <>
      <Banner />
      <ProductsPreview  productsItems={productsItems} handleAddProduct={handleAddProduct}/>
      <About />
    </>
  )
}

export default Home 