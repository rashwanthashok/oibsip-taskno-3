import React from 'react'
import Button from './elements/Button.js'

function Banner() {
    return (
        <div className='banner w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-between'>

            <div className='banner-disciption w-full md:w-1/2 p-3'>
                <h2 className='mb-6 text-4xl font-bold text-white'>
                    Pizza <br /> Delivery


                </h2>
                <p className='font-semibold text-lg text-red-600 py-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </p>
                <div className="btn-container">
                    <a href=" /CustomePizaa">
                        <Button>Order Now</Button></a>
                    <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3" alt="">
                        see menu
                    </a>
                </div>

            </div>
            <img className='w-2/4' src={require("../assests/images/pizza_banner.png")} alt="banner" />
        </div>
    )
}

export default Banner