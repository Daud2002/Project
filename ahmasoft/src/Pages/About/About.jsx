import React from 'react'
import PageDetail from '../../Components/Fixcomponents/PageDetail/PageDetail'
import Aboutourcompany from '../../Components/AboutComponent/Aboutourcompany/Aboutourcompany.jsx'
import ClientTestimonial from '../../Components/AboutComponent/ClientTestimonial/ClientTestimonial.jsx'
import Noofprojects from '../../Components/AboutComponent/Noofprojects/Noofprojects.jsx'

export default function About() {
  return (
    <div>
      <PageDetail name={'About'}/>
      <Aboutourcompany />
      <Noofprojects />
      <ClientTestimonial />
    </div>
  )
}
