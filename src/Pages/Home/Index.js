import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import HowSection from './How-Section'
import Achievement from '../../Components/Achievement'
import BuildingSection from './BuildingSection'
import Clients from '../../Components/Clients'
import LearnCloudSection from './Learn&CloudSection'

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
    </div>
  )
}

export default HomePage