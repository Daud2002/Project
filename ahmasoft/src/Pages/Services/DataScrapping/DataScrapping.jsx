import React from 'react'
import PageDetail from '../../../Components/Fixcomponents/PageDetail/PageDetail'
import ClientTestimonial from '../../../Components/AboutComponent/ClientTestimonial/ClientTestimonial.jsx'
import './DataScrapping.css'
import Noofprojects from '../../../Components/AboutComponent/Noofprojects/Noofprojects.jsx'
import Servicesfirst from '../../../Components/ServicesComponent/Servicesfirst/Servicesfirst.jsx'
import Whyourservice from '../../../Components/ServicesComponent/Whyourservice/Whyourservice.jsx'

export default function DataScrapping() {

  return (
    <div>
      <PageDetail name={'Data Scrapping'} page={'Services'} />
      <Servicesfirst page = {'scraping'}/>
      <Whyourservice page = {'scraping'}/>
      <ClientTestimonial />
      <Noofprojects />
    </div>
  )
}
