import React from 'react'
import PageDetail from '../../../Components/Fixcomponents/PageDetail/PageDetail'
import Servicesfirst from '../../../Components/ServicesComponent/Servicesfirst/Servicesfirst'
import Noofprojects from '../../../Components/AboutComponent/Noofprojects/Noofprojects'
import Whyourservice from '../../../Components/ServicesComponent/Whyourservice/Whyourservice'

export default function Datavisualization() {
  return (
    <div>
    <PageDetail name={'Data Visualization'} page={'Services'}/>
    <Servicesfirst page = {'visualization'}/>
    <Whyourservice page = {'visualization'}/>
    <Noofprojects />
    </div>
  )
}
