import React from 'react'
import reviewsData from './reviewsData.js'

export default function CustomerReviews() {
  const reviewCards = reviewsData.map((review)=>(
    <div className = 'reviewCard' key = {review.id}>
      <div className = 'reviewUser'>
        <img src = {review.img} />
      <h3>{review.name}</h3>
      </div>    
      <p>{review.text}</p>
    </div>
  )
  )
   return (

     <div className = 'customer-reviews'>
       {reviewCards}
     </div>
   )
}
