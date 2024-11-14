import React from 'react'
import HeroSection from './PAges/heroSection'
import NewsLetter from './PAges/NewsLetter'
import Footer from './PAges/Footer';
import BestSeller from './PAges/bestSellers';
import OurPolicy from './PAges/OurPolicy';
import Header from './Header/Header';
export default function Layout() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <BestSeller/>
    <OurPolicy/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}
