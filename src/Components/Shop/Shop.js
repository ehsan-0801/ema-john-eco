 import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
 import './Shop.css';
 const Shop = () => {
     
     const [products, setProducts] = useState([]);
     const [cart, setCart] = useState([]);
     useEffect(()=>{
         fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
     },[]) 
     const handleAddToCart = (product)=>{
        console.log(product);
        const newcart = [...cart, product];
        setCart(newcart);
     } 
     return (
         <div className='shop_container'>
             <div className="products_container">
                 {
                     products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                 }
             </div>
             <div className="cart_container">
                 <h4>Order Summary</h4>
                 <p>Selected Items: {cart.length}</p>
             </div>
             
         </div>
     );
 };
 
 export default Shop;