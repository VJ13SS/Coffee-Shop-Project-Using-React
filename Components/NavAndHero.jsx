import React from 'react'
import './components.css'
import Hero from './Nav And Hero/Hero'
import Nav from './Nav And Hero/Nav'


export default function NavAndHero() {
   return (
     <div className = 'NavAndHero'>
       <Nav />
       <Hero />
     </div>
   )
}
