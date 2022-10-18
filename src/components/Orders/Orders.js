import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products,initialCart}=useLoaderData()
    const [cart,setCart]=useState(initialCart)
    const handleReviewItem=(id)=>{
        const remaining=cart.filter(product=>product.id!==id)
        setCart(remaining)
        removeFromDb(id)
    }
    
    return (
      
            <div className='shop-container'>
          <div className="order-container">

            {
                cart.map(product=><ReviewItem  key={product.id} product={product} handleReviewItem={handleReviewItem}></ReviewItem>)
            }
          </div>
          <div className="cart-container">
            <Cart cart={cart}></Cart>
            <Link to='/shipping'>
              <button>Proceed shipping</button>
            </Link>
            </div> 

          
        </div>
            
       
    );
    
};

export default Orders;