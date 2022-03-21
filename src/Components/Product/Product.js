import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props.product)
    const {handleAddToCart, product} = props;
    const {name,img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product_info'>
                <h3 className='product_name'>{name}</h3>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() =>handleAddToCart()} className='btn-cart'>
                <p className='btn_text'>Add to Cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;