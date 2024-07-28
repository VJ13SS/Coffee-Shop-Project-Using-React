import React from 'react'
import './components.css'
import BlogImg1 from '/src/Images/blog1.jpg'
import BlogImg2 from '/src/Images/blog2.jpg'

export default function Footer() {
   return(
     <div className = 'blogs-container'>
       <h2>Coffee Blogs</h2>
       <div className = 'blogs'>
       <div className = 'blog-card'>
         <img src = {BlogImg1} />
         <h3>Know the Coffee Varieties</h3>
         <button><a href = 'https://www.coffeeness.de/en/coffee-varieties/'>Read More</a></button>
       </div>
       <div className = 'blog-card'>
         <img src = {BlogImg2} />
         <h3>Explore Coffee Articles</h3>
         <button><a href = 'https://indiancoffeeculture.com/some-ramble/'>Read More</a></button>
       </div>
     </div>
     </div>
   )
}
