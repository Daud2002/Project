import React, { Suspense, lazy } from 'react'
import Lazyloadcomponent from '../../Components/Fixcomponents/Lazyloadcomponent/Lazyloadcomponent.jsx'
const  FAQs = lazy(()=>import('../../Components/Home/FAQs/FAQs.jsx'))
const Landingpage = lazy(()=>import('../../Components/Home/LandingPage/Landingpage.jsx'))
const Companybenefits = lazy(()=>import('../../Components/Home/CompanyBenefits/Companybenefits.jsx'))
const CompletedProjects = lazy(()=>import( '../../Components/Home/CompletedProjects/CompletedProjects.jsx'))
const WhyUs = lazy(()=>import('../../Components/Home/WhyUS/WhyUs.jsx'))
const Ouroffering =lazy(()=>import('../../Components/Home/Ouroffering/Ouroffering.jsx'))


export default function Home() {
    return (
        <div className=' overflow-hidden relative'>
            <Suspense fallback={<Lazyloadcomponent />}>
                <Landingpage />
                <Companybenefits />
                <CompletedProjects />
                <WhyUs />
                <Ouroffering />
                <FAQs />
            </Suspense>
        </div>
    )
}
