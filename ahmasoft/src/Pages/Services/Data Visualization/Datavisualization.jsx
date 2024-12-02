import React from 'react'
import PageDetail from '../../../Components/Fixcomponents/PageDetail/PageDetail'
import Servicesfirst from '../../../Components/ServicesComponent/Servicesfirst/Servicesfirst'
import Noofprojects from '../../../Components/AboutComponent/Noofprojects/Noofprojects'
import Whyourservice from '../../../Components/ServicesComponent/Whyourservice/Whyourservice'
import Whatweoffer from '../../../Components/ServicesComponent/Whatweoffer/Whatweoffer'
import ServicesFAQs from '../ServicesFAQs/ServicesFAQs'
import Industryserve from '../Industryserve/Industryserve'
import Toolstech from '../../../Components/ServicesComponent/Toolstech/Toolstech'
import Getstarted from '../../../Components/ServicesComponent/Getstarted/Getstarted'

export default function Datavisualization() {
  return (
    <div>
    <PageDetail name={'Data Visualization'} page={'Services / data visualization'}/>
    <Servicesfirst page = {'visualization'}/>
    <Whatweoffer page={'visualization'}/>
    <Whyourservice page = {'visualization'}/>
    <Noofprojects />
    <Industryserve page = {'visualization'} />
    <Toolstech tools={'visualization'} />
    <ServicesFAQs service = {'visualization'}/>
    </div>
  )
}
