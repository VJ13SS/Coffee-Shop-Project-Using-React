import React from 'react'
import menuData from './menuData.js'

export default function MenuItems() {
  const itemCards = menuData.map((item)=>(
    <div className = 'menuItem' key = {item.id}>
      <img src = {item.img} />
      <h3>{item.name}</h3>
      <span>{item.price}</span>
    </div>
  )
  )
   return (

     <div className = 'menuItems'>
       {itemCards}
     </div>
   )
}
