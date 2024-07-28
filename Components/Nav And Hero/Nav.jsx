import React from 'react'
import Logo from '/src/Images/CoffeeShopLogo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const [displayCart,setDisplayCart] = React.useState(false);
  const cartStyles = {
    opacity:'1',
    transform:'translateY(0%)'
  }
  function diaplyCartItems() {
     console.log("cart")
    setDisplayCart(!displayCart);
  }
  
   return (
       <nav>
         <div className = 'nav-logo'>
           <img src = {Logo} />
         </div>
         <div className = 'nav-links'>
           <ul>
             <li><a href = '#hero-section'>Home</a></li>
             <li><a href = '#about'>About Us</a></li>
             <li><a href = '#product-details'>Products</a></li>
             <li><a href = '#contact-us'>Contact Us</a></li>
           </ul>
         </div>
         <div className = 'nav-icons'>
           <FontAwesomeIcon icon={faSearch}/>
           <FontAwesomeIcon icon={faShoppingCart} id = 'cart' onClick = {diaplyCartItems}/>
         </div>
         <div className = "cart-items" style = {displayCart?cartStyles:{}}>
           <span>No items in Cart</span>
         </div>
         
         
       </nav>
   )
}
