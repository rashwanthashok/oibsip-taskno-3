import React from 'react'
import './index.css'
// import PizzaCart from "./DisplayPizza"

function index() {

  return (
    <div className='text-white mt-10 '>
      <h1 className='text-center font-bolder text-6xl my-5'>Menu</h1>

      <div class="grid grid-cols-3 gap-5 mx-5 rounded overflow-hidden shadow-lg">
        <div className='border-2 border-white-500'>
          <img class="w-full" src="https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=740&t=st=1681248758~exp=1681249358~hmac=304ec7b9c8ef208257b8bef5acc03358e8c341698fe117bbdb8d7f44a03265fd" alt="Sunset in the mountains" />
          <div className='flex flex-col justify-between min-h-[30%] items-center'>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">Veg Pizza</div>
              <p class="text-white text-base">
                A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier   </p>
            </div>
            <div class="flex justify-center px-6 pt-4 pb-2">
              <a href='/Vegpizza' className=''><button class=" bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded ">
                View All
              </button></a>
            </div>

          </div>
        </div>
        <div className='border-2 border-white-500'>
          <img class="w-full" src="https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=740&t=st=1681248758~exp=1681249358~hmac=304ec7b9c8ef208257b8bef5acc03358e8c341698fe117bbdb8d7f44a03265fd" alt="Sunset in the mountains" />
          <div className='flex flex-col justify-between min-h-[30%] items-center'>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">Non-veg Pizza</div>
              <p class="text-white text-base">
                Choose your favourite non-veg pizzas from the Domino's Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings</p>
            </div>
            <div class="flex justify-center px-6 pt-4 pb-2">
              <a href="/Nonvegpizza" className=''>   <button class=" bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded ">
                View All
              </button></a>
            </div>
          </div>
        </div>
        <div className='border-2 border-white-500'>
          <img class="w-full" src="https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=740&t=st=1681248758~exp=1681249358~hmac=304ec7b9c8ef208257b8bef5acc03358e8c341698fe117bbdb8d7f44a03265fd" alt="Sunset in the mountains" />
          <div className='flex flex-col justify-between min-h-[30%] items-center'>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">PIZZA MANIA</div>
              <p class="text-white text-base">
                Indulge into mouth-watering taste of Pizza mania range, perfect answer to all your food cravings </p>
            </div>
            <div class="flex justify-center px-6 pt-4 pb-2">
              <a href='/PizzaMania' className=''>    <button class=" bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                View All
              </button> </a>
            </div>
          </div>
        </div>
      </div>

      {/* <PizzaCart /> */}


    </div>

  )
}

export default index