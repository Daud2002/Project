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

export default function Dataautomation() {
  return (
    <div>
    <PageDetail name={'Automation'} page={'Services / Automation'}/>
    <Servicesfirst page = {'automation'}/>
    <Whatweoffer page = {'automation'}/>
    <Whyourservice page = {'automation'}/>
    <Noofprojects />
    <Industryserve page = {'automation'}/>
    <Toolstech tools={'automation'}/>
    <ServicesFAQs service = {'automation'}/>
    </div>
  )
}
