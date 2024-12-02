import React from 'react'
import PageDetail from '../../Components/Fixcomponents/PageDetail/PageDetail'
import Aboutourcompany from '../../Components/AboutComponent/Aboutourcompany/Aboutourcompany.jsx'
import ClientTestimonial from '../../Components/AboutComponent/ClientTestimonial/ClientTestimonial.jsx'
import Noofprojects from '../../Components/AboutComponent/Noofprojects/Noofprojects.jsx'
import BestSolutions from '../../Components/Home/Bestsol/Bestsol.jsx'
import Ceodetails from '../../Components/AboutComponent/OurTeam/Ceodetails.jsx'
import Contactcomponent from '../../Components/ContactComponent/Contactcomponent.jsx'

export default function About() {
  return (
    <div>
      <PageDetail name={'About'} quote = {'Learn About Our Expertise and Vision'}/>
      <Aboutourcompany />
      <Noofprojects />
      <div className='my-12'>
      <BestSolutions/>
      </div>
      <Ceodetails />
      <ClientTestimonial />
      <Contactcomponent />
    </div>
  )
}
