import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header.js';
import React, { useState, useEffect } from 'react';
import Routes from '../Routes/Routes';
import data from './Data.js';
import axios from "axios";

import { useAuth } from "../context/AuthContext";
function Navigation() {
    const { productsItems } = data;
    const [cartItems, setCartItems] = useState([]);
    const handleAddProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    const handleRemoveProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item
                )
            );
        }
    };

    const handleCartClearance = () => {
        setCartItems([]);
    };

    const [ingredients, setIngredients] = useState({
        basil: false,
        cheese: false,
        mushroom: false,
        olive: false,
        pineapple: false,
        tomato: false,
    });

    useEffect(() => {
        const data = localStorage.getItem("ingredients");
        if (data) {
            // set data in string
            setIngredients(JSON.parse(data));
        }
    }, []);

    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.totalPrice,
            currency: "INR",
            name: "shiwang Pandey",
            description: "Tutorial of RazorPay",
            image: "https://www.shiwangpandey.in/assests/img/perfil.png",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "shiwang pandey",
                email: "shiwangpande1@gmail.com",
                contact: "8459795840"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);




    const { currentUser } = useAuth;



    return (
        <>
            <Router >
                <Header cartItems={cartItems} />
                <Routes  amount={totalPrice} ingredients={ingredients} productsItems={productsItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} setIngredients={setIngredients} checkoutHandler={checkoutHandler}  />
            </Router>
        </>
    )
}

export default Navigation