import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import HowSection from './How-Section'
import Achievement from '../../Components/Achievement'

function HomePage() {
  return (
    <div>
        <Navbar />
        <Banner />
        <HowSection />
        <Achievement />
    </div>
  )
}

export default HomePage