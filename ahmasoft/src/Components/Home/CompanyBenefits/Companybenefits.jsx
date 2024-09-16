import React from 'react'
import bgimage from '../../../assets/Images/comapany-person-image-background.png'
import person1 from '../../../assets/Images/company-person-1.jpg'
import person2 from '../../../assets/Images/company-person-2.jpg'
import person3 from '../../../assets/Images/company-person-3.jpg'
import strategy from '../../../assets/Images/strategy.png'
import automation from '../../../assets/Images/automation.png'

export default function Companybenefits() {
  return (
    <div className='mt-80 flex flex-row'>
      <div className='relative w-[50%]'>
        <img src={bgimage} alt="" className='absolute -left-32 -z-20' />
        <div>
          <img src={person1} alt="" className='absolute w-[25rem] h-[25rem] left-20 z-10' />
          <img src={person2} alt="" className='absolute left-60 top-80' />
          <img src={person3} alt="" className='absolute top-80 -left-40' />
        </div>
      </div>
      <div className='w-[50%] pr-16'>
        <h5 className='text-primary'> -- Comapny Benefits</h5>
        <div className='flex flex-col gap-6'>
          <h1 className='text-[2rem] font-bold'>The Best Data Solutions for Your Business</h1>
          <p className='text-justify'>Ahmasoft specializes in transforming raw data into actionable insights through advanced data scraping and visualization techniques. Our automation solutions further enhance efficiency by streamlining repetitive tasks, allowing your business to focus on growth and innovation.</p>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-row gap-8'>
              <img src={strategy} alt="" className='border-b-[5px] border-b-primary p-5 rounded-[50%] shadow-xl'/>
              <div>
                <h1 className='font-bold text-[1.3rem]'>Data-Driven Strategies</h1>
                <p>Transform complex data into clear, actionable strategies to drive your business forward.</p>
              </div>
            </div>
            <div className='flex flex-row gap-8'>
              <img src={automation} alt="" className='border-b-[5px] border-b-primary p-5 rounded-[50%] shadow-xl'/>
              <div>
                <h1 className='font-bold text-[1.3rem]'>Custom Automation Solutions</h1>
                <p>Automate your workflows and enhance efficiency with our tailored automation services.</p>
              </div>
            </div>
          </div>
        </div>
          <button className='border-[2px] border-primary text-primary mt-10 px-10 py-3 hover:bg-primary hover:text-white rounded-md duration-200'>Learn More</button>

      </div>
    </div>
  )
}
