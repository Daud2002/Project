import React from 'react'
import aboutbg from '../../../assets/Images/aboutpage-bg.png'
import person1 from '../../../assets/Images/aboutpage-person-1.png'
import person2 from '../../../assets/Images/aboutpage-person-2.png'
import person3 from '../../../assets/Images/aboutpage-person-3.png'




export default function ClientTestimonial() {
  return (
    <div className='h-[100vh] bg-[#f6eeff] flex flex-row relative'>


      <div className='w-[40%]'>
        <h5>--Client Testimonials</h5>
        <h1>Check What They’re Talking About</h1>
        <div>
          <img src="" alt="" />
          <div>
            <h1>Mike Hardson</h1>
            <p>Senior Designer</p>
          </div>
        </div>
        <p>This is due to their excellent service, competitive pricing and customer support. It’s refresing to get such a personal touch. Duis aute lorem ipsum is simply free text available in the market reprehen</p>
      </div>


      <div className='w-[40%]'>
      <img src={aboutbg} alt="" className='absolute top-0 right-0'/>
      <img src={person1} alt="" className='absolute top-0 right-0'/>
      <img src={person2} alt="" className='absolute top-0 right-0'/>
      <img src={person3} alt="" className='absolute top-0 right-0'/>
      </div>
    </div>
  )
}
