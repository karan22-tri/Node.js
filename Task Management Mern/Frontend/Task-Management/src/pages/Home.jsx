import React from 'react'
import Carousel from '../component/Carousel';
import Header from '../component/Header';
import Hero from '../component/Hero';
import Ctabutton from '../component/Ctabutton';

function Home() {
  return (
    <div>
     <Header />
      <Hero />
      <Carousel />
      <Ctabutton />
    </div>
  )
}

export default Home
