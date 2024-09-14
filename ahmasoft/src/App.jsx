import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Landingpage from './Components/LandingPage/Landingpage'
import Companybenefits from './Components/CompanyBenefits/Companybenefits.jsx'
import CompletedProjects from './Components/CompletedProjects/CompletedProjects.jsx'
import WhyUs from './Components/WhyUS/WhyUs.jsx'
import Ouroffering from './Components/Ouroffering/Ouroffering.jsx'
import Bestsol from './Components/Bestsol/Bestsol.jsx'
import TrustedSolution from './Components/TrustedSolution/TrustedSolution.jsx'

function App() {

  return (
    <>
      <div className='flex flex-col gap-16'>
        <Navbar />
        <Landingpage />
        <Companybenefits />
        <CompletedProjects />
        <WhyUs />
        <Ouroffering />
      </div>
      <div>
        <Bestsol />
      </div>
      <div className='flex flex-col gap-16'>
      <TrustedSolution />
      </div>
    </>
  )
}

export default App
