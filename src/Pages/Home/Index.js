import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import HowSection from './How-Section'
import Achievement from '../../Components/Achievement'
import BuildingSection from './BuildingSection'
import Clients from '../../Components/Clients'
import LearnCloudSection from './Learn&CloudSection'
import Contact from '../../Components/Contact'

function HomePage() {
  return (
    <div>
        <Navbar />
        <Banner />
        <HowSection />
        <Achievement />
        <BuildingSection />
        <Clients />
        <LearnCloudSection />
        <Contact />
    </div>
  )
}

export default HomePage