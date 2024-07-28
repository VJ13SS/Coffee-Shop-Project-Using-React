import React from 'react'
import './components.css'
import GalleryImg1 from '/src/Images/Gallery1.jpeg'
import GalleryImg2 from '/src/Images/Gallery2.jpeg'
import GalleryImg3 from '/src/Images/Gallery3.jpg'
import GalleryImg4 from '/src/Images/Gallery4.jpeg'

export default function About() {
  return(
    <div className = "about-us">
      
      
      <div className = "about-us-text" id = 'about'>
        <h1>About Us...</h1>
        <br></br>
        <p>
Welcome, your cozy retreat in the town. We are passionate about coffee, sourcing our beans from the finest regions and roasting them to perfection. Our skilled baristas craft each cup with care, from rich espressos to creamy lattes. Beyond great coffee, we offer a warm, inviting space where friends meet, ideas are born, and community thrives. Join us for a delightful coffee experience that feels like home.</p>
        <br></br>
        <p>We take pride in delivering an exceptional coffee experience. Our journey starts with ethically sourced, high-quality beans from renowned coffee regions. Expertly roasted to highlight their unique flavors, each batch is a testament to our dedication. Our baristas, true artisans, meticulously craft every cup, ensuring the perfect balance and richness. With an unwavering commitment to freshness and precision, we guarantee a delightful and memorable coffee moment. Discover why every sip stands out – it’s the result of passion, skill, and a love for the finest coffee.</p>
      </div>
    </div>
  )
}
