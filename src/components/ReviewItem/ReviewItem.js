import { faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product ,handleReviewItem}) => {
    const {id,name,price,quantity,img, shipping}=product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
          <div className='review-details-container'>
            <div className='review-details'>
            <p>{name}</p>
            <p><small>Price: ${price}</small></p>
            <p><small>Shipping Cost : ${shipping}</small></p>
            <p><small>Quantity : {quantity}</small></p>
            </div>

            <div className='delete-container'>
                <button className='btn-delete' onClick={()=>handleReviewItem(id)}><FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon></button>
            </div>
            </div>  
        </div>
    );
};

export default ReviewItem;