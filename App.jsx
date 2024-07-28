import React from 'react'
import './App.css'
import NavAndHero from './Components/NavAndHero'
import About from './Components/about'
import mainImg from '/src/Images/mainLogo.jpeg'
import Menu from './Components/menu.jsx'
import Reviews from './Components/reviews.jsx'
import Contacts from './Components/contacts.jsx'
import Blogs from './Components/blogs.jsx'
import Footer from './Components/footer.jsx'


export default function App() {
  return (
    <main>
      <img src = {mainImg} />
      <NavAndHero />
      <About />
      <Menu />
      <Reviews />
      <Contacts />
      <Blogs />
      <Footer />
    </main>
  )
}
