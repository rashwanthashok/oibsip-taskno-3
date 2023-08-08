import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import PaymentSuccess from '../pages/PaymentSuccess';
import Register from '../pages/Register';
import About from '../components/About.js';
import Vegpizza from '../pages/Menu/Vegpizza.js';
import NonVegpizza from '../pages/Menu/Nonvegpizza.js';
import PizzaMania from '../pages/Menu/PizzaMania.js';
import CustomePizaa from '../pages/CustomisePizza/index.js';
import Checkout from '../pages/CustomisePizza/Checkout.js';

const routes = ({ productsItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, ingredients, setIngredients, checkoutHandler }) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home productsItems={productsItems} handleAddProduct={handleAddProduct} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} checkoutHandler={checkoutHandler} />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/paymentsuccess" element={<PaymentSuccess />} />
                <Route path="/register" element={<Register />} />
                <Route path="/Vegpizza" element={<Vegpizza productsItems={productsItems} handleAddProduct={handleAddProduct} />} />
                <Route path="/Nonvegpizza" element={<NonVegpizza productsItems={productsItems} handleAddProduct={handleAddProduct} />} />
                <Route path="/PizzaMania" element={<PizzaMania productsItems={productsItems} handleAddProduct={handleAddProduct} />} />
                <Route path="/CustomePizaa" element={<CustomePizaa productsItems={productsItems} ingredients={ingredients} setIngredients={setIngredients} handleAddProduct={handleAddProduct} />} />
                <Route path="/checkout" element={<Checkout productsItems={productsItems} ingredients={ingredients} setIngredients={setIngredients} handleAddProduct={handleAddProduct} checkoutHandler={checkoutHandler} />} />
            </Routes>
        </div>
    )
}

export default routes