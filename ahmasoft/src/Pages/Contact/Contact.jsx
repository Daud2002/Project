import React, { useEffect, useState } from 'react'
import PageDetail from '../../Components/Fixcomponents/PageDetail/PageDetail'
import './Contact.css'
import contactimg from '../../assets/Images/contact_us.jpg'
import Contactcomponent from '../../Components/ContactComponent/Contactcomponent'


export default function Contact() {







  return (
    <div className='flex flex-col items-center'>
      <PageDetail name={'Contact Us'} quote={"We're Here To Help"} />
      <div className='flex flex-col gap-8 mb-8 contact_page max-w-[1300px]'>

        <div className='flex flex-col justify-around mt-12 md:gap-0 gap-10'>

          <div className='w-full flex flex-row'>
            <div className='md:w-[55%] w-full p-8 flex flex-col md:gap-2 gap-5 justify-center'>
              <h1 className='font-semibold md:text-[3.2rem] text-[2.5rem] text-[#223554]'>Let’s get started with your project</h1>
              <h3 className='text-[#223554]'>Whether you’re looking to build something new and exciting or need our help with an ongoing project, we’ve got you covered.</h3>
            </div>
            <div className='w-[45%] md:block hidden p-8'>
              <img src={contactimg} alt="" className='rounded-xl' />
            </div>
          </div>
          <Contactcomponent />
        </div>
        <div className='p-14'>
          <h1 className='font-semibold text-[2rem] text-[#223554]'>What happens next</h1>
          <ul className='ml-3 mt-6 flex flex-col gap-7'>
            <li className='text-[1.2rem]'>Our business development team will reach out to you within two business days</li>
            <li className='text-[1.2rem]'>A discovery session is organized to gain a clear understanding of your project needs</li>
            <li className='text-[1.2rem]'>Our technical and business teams review the project scope and propose the most suitable approach</li>
            <li className='text-[1.2rem]'>A software development agreement is signed, reflecting the mutually agreed terms of the proposal</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
