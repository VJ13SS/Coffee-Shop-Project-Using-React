import React from 'react'
import './components.css'
import CustomerReviews from './Reviews/customerReviews.jsx'
import bgImg from '/src/Images/bgImg3.jpg'

export default function Reviews() {
   return(
     
     <div className = 'reviews'>
       <img src = {bgImg} />
       <h2>Customer Reviews</h2>
       <CustomerReviews />
     </div>
   )
}
