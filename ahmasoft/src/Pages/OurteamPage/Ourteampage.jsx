import React from 'react'
import PageDetail from '../../Components/Fixcomponents/PageDetail/PageDetail'
import Ceodetails from '../../Components/AboutComponent/OurTeam/Ceodetails'
import OurTeam from '../../Components/AboutComponent/OurTeam/OurTeam'
import Contactcomponent from '../../Components/ContactComponent/Contactcomponent.jsx'
import './Ourteampage.css'

export default function Ourteampage() {
  return (
    <div className='flex flex-col gap-20'>
      <PageDetail name={'Our Team'} />
      <Ceodetails />
      <OurTeam />
      <div className='bg-imgs flex flex-col items-center py-16'>
        <div className='w-[60%] flex flex-col justify-center text-center gap-8'>
          <h5 className='text-primary'>-- Contact With US</h5>
          <h1 className='font-bold text-[3rem]'>Feel Free to Contact with Our IT Experts</h1>
          <Contactcomponent />
        </div>
      </div>
    </div>
  )
}
