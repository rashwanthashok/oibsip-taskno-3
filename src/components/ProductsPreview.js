import React, { useState, useEffect } from "react";
import ProductPreviewCard from "./ProductPreviewCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";
import data from "../navigation/Data.js";
function ProductPreview({ productsItems, handleAddProduct }) {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    // useEffect(() => {
    //     fetch(data.productsItem)
    //         .then(response => response.json())
    //         .then(data => setProducts(data?.data))
    //         .catch(e => console.log(e))
    // }, [])

    // const onAddProduct = (productsItem) => {
    //     dispatch(addToCart(productsItem))
    // }

    return (
        <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
            <Carousel responsive={responsive}>
                {
                   productsItems.map((productsItem) => {
                        return (
                            <div className="w-full p-3">
                                <ProductPreviewCard productsItem={productsItem} handleAddProduct={handleAddProduct} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default ProductPreview