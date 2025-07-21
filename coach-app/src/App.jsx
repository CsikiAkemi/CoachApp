import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import LifeCoaching from './components/Content/LifeCoaching'
import BusinessCoaching from './components/Content/BusinessCoaching'
import CsoportosCoaching from './components/Content/CsoportosCoaching'
import TaplalkozasiTancsadas from './components/Content/TaplalkozasiTanacsadas'
import Price from './components/Price/Price';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';



function App() {
  

  return (
    <>
      <Navbar/>
      <Header/>
      <Cards/>
      <LifeCoaching/>
      <BusinessCoaching/>
      <CsoportosCoaching/>
      <TaplalkozasiTancsadas/>
      <Price/>
      <Contact/>
      <About/>
      <Calendar/>
      <Footer/>
      
    </>
  )
}

export default App
