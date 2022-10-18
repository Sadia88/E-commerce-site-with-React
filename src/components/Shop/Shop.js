import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './shop.css'

const Shop = () => {

    const products=useLoaderData()

    const [cart,setCart]=useState([])


   




    useEffect(()=>{
      const storedCart=getStoredCart();
      const savedCart=[]
      for(const id in storedCart){

        const addedProduct=products.find(product=>product.id===id)
        // console.log(addedProduct)
        if(addedProduct){

          const quantity=storedCart[id]

          addedProduct.quantity=quantity 
          // console.log(addedProduct)
          savedCart.push(addedProduct)
        }
      }

      setCart(savedCart)
    },[products])
    const handleAddToCArt=(selectedProduct)=>{
      let newCart=[];
      // console.log(selectedProduct)
      const exist=cart.find(product=>product.id===selectedProduct.id)
      if(!exist){
        selectedProduct.quantity=1;
         newCart=[...cart,selectedProduct]
      }
     
else{
  const rest=cart.filter(product=>product.id!==selectedProduct.id)
  exist.quantity=exist.quantity+1
  newCart=[...rest,exist]
}
      
      setCart(newCart)

      addToDb(selectedProduct.id)
    }

    return (
        <div className='shop-container'>
          <div className="product-container">

            {

                products.map(product=><Product key={product.id} product={product} handleAddToCArt={handleAddToCArt}></Product>)
            }
          </div>
          <div className="cart-container">
            <Cart cart={cart}></Cart>

            <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
            </div> 
        </div>
    );
};

export default Shop;