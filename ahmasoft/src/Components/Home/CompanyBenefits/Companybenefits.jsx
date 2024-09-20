import React from 'react'
import bgimage from '../../../assets/Images/comapany-person-image-background.png'
import person1 from '../../../assets/Images/company-person-1.jpg'
import strategy from '../../../assets/Images/strategy.png'
import automation from '../../../assets/Images/automation.png'
import './CompanyBenefits.css'

export default function Companybenefits() {
  return (
    <div className='mt-8 flex lg:flex-row items-center flex-col lg:gap-0 gap-16'>
      <div className='relative lg:w-[50%] w-[80%] flex justify-center items-center'>
        <img src={bgimage} alt="" className='absolute -left-64 -z-20' />
        <img src={person1} alt="" className='lg:absolute lg:w-[25rem] w-full h-[25rem] left-5 z-10 rounded-md' />
        
      </div>
      <div className='lg:w-[50%] w-full lg:pr-16 px-4 flex flex-col items-center text-center'>
        <h5 className='text-primary'> -- Comapny Benefits</h5>
        <div className='flex flex-col gap-6'>
          <h1 className='text-[2rem] font-bold lg:text-left'>The Best Data Solutions for Your Business</h1>
          <p className='md:text-justify text-center'>Ahmasoft specializes in transforming raw data into actionable insights through advanced data scraping and visualization techniques. Our automation solutions further enhance efficiency by streamlining repetitive tasks, allowing your business to focus on growth and innovation.</p>
          <div className='flex flex-col gap-8'>
            <div className='flex md rounded md:flex-row flex-col items-center gap-8'>
              <img src={strategy} alt="" className='border-b-[5px] border-b-primary p-5 rounded-[50%] shadow-xl w-[7rem]'/>
              <div className='md:text-left text-center'>
                <h1 className='font-bold text-[1.3rem]'>Data-Driven Strategies</h1>
                <p>Transform complex data into clear, actionable strategies to drive your business forward.</p>
              </div>
            </div>
            <div className='flex md:flex-row flex-col items-center gap-8'>
              <img src={automation} alt="" className='border-b-[5px] border-b-primary p-5 rounded-[50%] shadow-xl w-[7rem]'/>
              <div className='md:text-left text-center'>
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
