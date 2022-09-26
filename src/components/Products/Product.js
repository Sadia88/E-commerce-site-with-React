import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
const {name,img, seller, price, ratings}=props.product
    // console.log(props.product)



    return (
        <div className='product'>
          <img src={img} alt="" />  
          <div className='product-info'>
          <p className='product-name'>{name}</p>
          <h6>Price $ {price}</h6>
          <p><small>Manufacturer : {seller}</small></p>
          <p><small>Rating : {ratings}</small></p>
          
          </div>
          <button className='btn-cart'>
            <p onClick={()=>props.handleAddToCArt(props.product)}>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>

        </div>
    );
};

export default Product;