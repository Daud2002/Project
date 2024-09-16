import React from 'react'
import Landingpage from '../../Components/Home/LandingPage/Landingpage.jsx'
import Companybenefits from '../../Components/Home/CompanyBenefits/Companybenefits.jsx'
import CompletedProjects from '../../Components/Home/CompletedProjects/CompletedProjects.jsx'
import WhyUs from '../../Components/Home/WhyUS/WhyUs.jsx'
import Ouroffering from '../../Components/Home/Ouroffering/Ouroffering.jsx'
import Bestsol from '../../Components/Home/Bestsol/Bestsol.jsx'
import TrustedSolution from '../../Components/Home/TrustedSolution/TrustedSolution.jsx'

export default function Home() {
    return (
        <div>
            <Landingpage />
            <Companybenefits />
            <CompletedProjects />
            <WhyUs />
            <Ouroffering />
            <Bestsol />
            <TrustedSolution />
        </div>
    )
}
