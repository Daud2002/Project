import React from 'react'
import bgimage from '../../../assets/Images/comapany-person-image-background.jpg'
import person1 from '../../../assets/Images/company-person-1.jpg'
import strategy from '../../../assets/Images/01_icon.png'
import automation from '../../../assets/Images/02_icon.png'
import './CompanyBenefits.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Companybenefits() {


  return (
    <div className='flex lg:flex-row items-center flex-col lg:gap-10 gap-16 my-16 lg:h-[100vh] h-auto'>
      <motion.div
        className='relative lg:w-[50%] w-full flex justify-center items-center px-4'
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={bgimage} alt="" className='absolute -left-64 -z-20 2xl:w-[60rem] md:w-[35rem]' />
        <img src={person1} alt="" className='lg:absolute 2xl:w-[50rem] 2xl:h-[35rem] lg:w-[35rem] lg:h-[25rem] md:w-full md:h-[30rem] w-full h-[20rem] left-5 z-10 rounded-2xl' />
      </motion.div>


      <motion.div
        className='lg:w-[50%] w-full lg:pr-16 px-4 flex flex-col items-center lg:items-start lg:text-left text-center'
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h5 className='text-primary flex flex-row items-center gap-2 2xl:text-[1.5rem] xl:text-[1.2rem] text-[1rem]'><hr className='w-6 h-0.5 bg-primary' /> Comapny Benefits</h5>
        <div className='flex flex-col gap-6'>
          <h1 className='2xl:text-[3.5rem] xl:text-[2.5rem] lg:text-[2rem] md:text-[1.8rem] text-[1.5rem] font-bold lg:text-left'>The Best Data Solutions for Your Business</h1>
          <p className='lg:text-justify text-center md:text-[0.8rem]'>Ahmasoft specializes in transforming raw data into actionable insights through advanced data scraping and visualization techniques. Our automation solutions further enhance efficiency by streamlining repetitive tasks, allowing your business to focus on growth and innovation.</p>
          <div className='flex flex-col gap-8'>
            <div className='flex md rounded lg:flex-row flex-col items-center gap-8'>
              <img src={strategy} alt="" className='border-b-[5px] border-b-primary p-5 rounded-[50%] shadow-xl w-[5rem]' />
              <div className='lg:text-left text-center'>
                <h1 className='font-bold 2xl:text-[1.7rem] xl:text-[1.5rem]'>Data-Driven Strategies</h1>
                <p className='md:text-[0.8rem]'>Transform complex data into clear, actionable strategies to drive your business forward.</p>
              </div>
            </div>
            <div className='flex lg:flex-row flex-col items-center gap-8'>
              <img src={automation} alt="" className='border-b-[5px] border-b-primary p-5 rounded-[50%] shadow-xl w-[5rem]' />
              <div className='lg:text-left text-center'>
                <h1 className='font-bold 2xl:text-[1.7rem] xl:text-[1.5rem]'>Custom Automation Solutions</h1>
                <p className='md:text-[0.8rem]'>Automate your workflows and enhance efficiency with our tailored automation services.</p>
              </div>
            </div>
          </div>
        </div>
        <Link to={'/about'} className='border-[2px] border-primary text-primary mt-10 px-10 py-3 hover:bg-primary hover:text-white rounded-md duration-200'>Learn More</Link>
      </motion.div>
    </div>
  )
}
