import React from 'react'
import productData from './productData.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Products() {
  const itemCards = productData.map((item)=>(
    <div className = 'product' key = {item.id}>
      <div className = 'product-icons'>
        <FontAwesomeIcon icon={faEye} />      
        <FontAwesomeIcon icon={faShoppingCart} />
        
      </div>
      <img src = {item.img} />
      <h3>{item.name}</h3>
      <button><span>{item.price}</span> Buy</button>
    </div>
  )
  )
   return (

     <div className = 'products'>
       {itemCards}
     </div>
   )
}
