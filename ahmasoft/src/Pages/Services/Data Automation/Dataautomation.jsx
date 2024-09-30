import React from 'react'
import PageDetail from '../../../Components/Fixcomponents/PageDetail/PageDetail'
import Servicesfirst from '../../../Components/ServicesComponent/Servicesfirst/Servicesfirst'
import Noofprojects from '../../../Components/AboutComponent/Noofprojects/Noofprojects'
import Whyourservice from '../../../Components/ServicesComponent/Whyourservice/Whyourservice'

export default function Dataautomation() {
  return (
    <div>
    <PageDetail name={'Data Automation'} page={'Services'}/>
    <Servicesfirst page = {'automation'}/>
    <Whyourservice page = {'automation'}/>
    <Noofprojects />
    </div>
  )
}
