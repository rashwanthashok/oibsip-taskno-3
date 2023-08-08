import React from 'react'
import AddProduct from './AddProduct.js'

function ProductPreviewCard({ productsItem, handleAddProduct }) {


    return (
        <div className='w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent tex-center'>
            <img src={productsItem.image} alt={productsItem.title} />
            <h2 className='p-2 text-lg'>{productsItem.title}</h2>
            <p className='mb-2 h-20 line-clamp-4'>{productsItem.description}</p>
            <p>₹{productsItem.price}</p>
            <AddProduct productsItem={productsItem} handleAddProduct={handleAddProduct} />
        </div>
    )
}

export default ProductPreviewCard