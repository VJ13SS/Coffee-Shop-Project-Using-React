import React from 'react'
import './components.css'
import MenuItems from './Menu/menuItems.jsx'
import Products from './Menu/products.jsx'
import bgImg from '/src/Images/bgImg2.jpeg'
export default function Menu(props){
   return(
     <div className = 'menuCard' id = 'product-details'>
       <img src = {bgImg} />
       <h2 id = 'menu'>Our Menu</h2>
       <MenuItems />
       <h2 id = "products">Our Products </h2>
       <Products />
     </div>
   )
}
