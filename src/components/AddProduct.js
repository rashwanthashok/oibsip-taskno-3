import React from 'react'

function AddProduct({ handleAddProduct, productsItem }) {
    return (
        <div>
            <div className="flex justify-end">

                <button onClick={() => handleAddProduct(productsItem)} className="bg-yellow-500 hover:bg-yellow-700 rounded-full w-5 h-5 flex items-center justify-center text-lg">
                    <span>+</span>
                </button>
            </div>
        </div>
    )
}

export default AddProduct