import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Products/Product';
import './shop.css'

const Shop = () => {

    const [products,setProducts]=useState([])

    const [cart,setCart]=useState([])


    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }
    
    ,[])

    const handleAddToCArt=(product)=>{

      console.log(product)

      const newCart=[...cart,product]
      setCart(newCart)
    }

    return (
        <div className='shop-container'>
          <div className="product-container">

            {

                products.map(product=><Product key={product.id} product={product} handleAddToCArt={handleAddToCArt}></Product>)
            }
          </div>
          <div className="cart-container">
            <h4>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${cart.price}</p>
            </div> 
        </div>
    );
};

export default Shop;