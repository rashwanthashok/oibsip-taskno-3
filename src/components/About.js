import React from 'react'
import aboutimg from '../assests/images/about.png'

function About() {
    return (
        <div className='text-white'>
            <div className='p-24 grid grid-cols-2'>
                <div className="">
                    <h1 className='text-4xl font-bold text-center my-7' >About Us</h1>
                    <p className='text-lg'>
                        <p>                Welcome to our pizza delivery app, where you can create your very own customized pizza and have it delivered to your doorstep in just 30 minutes!
                        </p>  <br /><p>
                            Our mission is to provide our customers with a delicious and convenient pizza experience. We understand that everyone has different tastes and preferences when it comes to pizza, which is why we offer the option to create your own customized pizza. You can choose from a variety of crusts, sauces, cheeses, and toppings to create your perfect pie.
                        </p>  <br /><p>
                            We take pride in using only the freshest and highest quality ingredients for our pizzas. Our dough is made from scratch daily and we only use the best meats, vegetables, and cheeses for our toppings.
                        </p>  <br /><p>
                            We also believe that convenience is key. Our pizza delivery app allows you to order your pizza with just a few taps on your phone, and our delivery team works hard to ensure that your pizza arrives at your doorstep piping hot and ready to eat within 30 minutes.
                        </p>  <br /><p>
                            At our pizza delivery app, we value our customers and strive to provide exceptional service. If you have any questions or concerns, our customer service team is always available to assist you.
                        </p>  <br /><p>
                            Thank you for choosing our pizza delivery app for your pizza needs. We look forward to serving you!
                        </p>
                    </p>

                </div>
                <div className='flex items-center justify-center'>
                    <img src={aboutimg} alt="about" className='w-[400px] h-[400px] object-cover' />
                </div>
            </div>
        </div>
    )
}

export default About