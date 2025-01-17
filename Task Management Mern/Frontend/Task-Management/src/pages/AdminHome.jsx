import React from 'react'
import Carousel from '../component/Carousel';
import Hero from '../component/Hero';
import Ctabutton from '../component/Ctabutton';
import Navbar from '../component/Navbar';

function AdminHome() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Carousel />
      <Ctabutton />
    </div>
  )
}

export default AdminHome
