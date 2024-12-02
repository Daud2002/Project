import React from 'react'
import PageDetail from '../../../Components/Fixcomponents/PageDetail/PageDetail'
import Servicesfirst from '../../../Components/ServicesComponent/Servicesfirst/Servicesfirst.jsx'
import Whyourservice from '../../../Components/ServicesComponent/Whyourservice/Whyourservice.jsx'
import Whatweoffer from '../../../Components/ServicesComponent/Whatweoffer/Whatweoffer.jsx'
import ServicesFAQs from '../ServicesFAQs/ServicesFAQs.jsx'
import Industryserve from '../Industryserve/Industryserve.jsx'
import Toolstech from '../../../Components/ServicesComponent/Toolstech/Toolstech.jsx'
import Getstarted from '../../../Components/ServicesComponent/Getstarted/Getstarted.jsx'

export default function DataScrapping() {

  return (
    <div className=''>
      <PageDetail name={'Data Scraping'} page={'Services / data scraping'} />
      <Servicesfirst page={'scraping'} />
      <Whatweoffer page={'scraping'} />
      <Whyourservice page={'scraping'} />
      <Industryserve page={'scraping'} />
      <Toolstech tools = {'scraping'} />
      <ServicesFAQs service = {'scraping'}/>
    </div>
  )
}
