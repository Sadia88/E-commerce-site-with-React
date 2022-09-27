import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart}) => {
    console.log(cart)
    let total=0;
    let shipping=0;
    for(const product of cart){
        total=total+product.price
        shipping=shipping+product.shipping;
       
    }
    
   const tax=(total*0.1).toFixed(2)
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: {}</h4>

            <div>
                <button>
                    <p>Clear Cart</p>
                   
                    
                </button>
                <button>
                    <p></p>
                </button>
            </div>
        </div>
    );
};

export default Cart;