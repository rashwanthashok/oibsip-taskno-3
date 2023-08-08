import React from 'react'
import Menu from './menu'
import "./cart.css"
function PizzaMania({ productsItems, handleAddProduct }) {
  return (
    <div className=" text-white mt-10 bg-yellow-600 ">

      <h1 className='text-center font-bolder text-6xl my-5'>Pizza Mania</h1>
      <div className='grid grid-cols-3 gap-40 mx-10'>
        {
          productsItems.map((productsItem) => (

            <div className="items-infos flex flex-col items-center">
              <div className="product-img">
                <img src={productsItem.image} alt={productsItem.title} />
              </div>

              <div className="title">
                <h2>{productsItem.title}</h2>
                <p>{productsItem.description}</p>
              </div>
              <div className="price">
                <h3>₹{productsItem.price}</h3>
              </div>

              <div className='add-to-button'>
                <button onClick={() => handleAddProduct(productsItem)} >Add to Cart</button>
              </div>


            </div>
          ))
        }
      </div>
    </div>
  );
};

export default PizzaMania