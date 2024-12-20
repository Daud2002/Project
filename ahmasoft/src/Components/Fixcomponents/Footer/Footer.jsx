import React from 'react'
import './Footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { footer_nav, nav_items } from '../../../assets/Data/Data';
import logo from '../../../assets/Images/logo.png'
import { NavLink } from 'react-router-dom';


export default function Footer() {
  return (
    <div>
      <div className='bg-footer-img flex md:flex-row flex-col md:justify-between justify-center pt-8 md:gap-0 gap-12 pb-10 px-6'>

        <div className='md:w-[30%] w-full flex flex-col items-start md:items-start text-center gap-6 md:pl-4 md:pr-20'>
          <h1 className='text-white text-[2rem] font-semibold'><img src={logo} alt="" className='w-[10rem]'/>
          </h1>
          <p className='text-justify text-[0.9rem]'>We thrive on transforming data into opportunities, pushing boundaries in data solutions and automation.</p>
          <div className='flex flex-row gap-4'>
            {/* <div className='flex gap-4'> */}
              <a href="https://www.linkedin.com/company/ahmasoft" target='_blank'><FaLinkedinIn className='border-[1px] p-4 box-content rounded-[20%] h-4 w-4 bg-[#15101e] text-white hover:scale-110 duration-150 hover:bg-primary' /></a>
              <a href=""><FaTwitter className='border-[1px] p-4 box-content rounded-[20%] h-4 w-4 bg-[#15101e] text-white hover:scale-110 duration-150 hover:bg-primary' /></a>
            {/* </div> */}
            {/* <div className='flex gap-4'> */}
              <a href="https://www.facebook.com/people/Ahmasoft/61567032779943/" target='_blank'><GrFacebookOption className='border-[1px] p-4 box-content rounded-[20%] h-4 w-4 bg-[#15101e] text-white hover:scale-110 duration-150 hover:bg-primary' /></a>
              <a href=""><FaInstagram className='border-[1px] p-4 box-content rounded-[20%] h-4 w-4 bg-[#15101e] text-white hover:scale-110 duration-150 hover:bg-primary' /></a>
            {/* </div> */}
          </div>
        </div>

        <div className='md:w-[15%] w-full flex flex-col items-start gap-6'>
          <h3 className='text-white font-semibold text-[1.7rem] relative'>Links
            <div className='absolute bottom-0 w-10 h-0.5 bg-primary rounded' />
          </h3>
          <ul className='flex flex-col gap-2'>
            {
              footer_nav.map((items, i) => {
                return (
                  <NavLink to={items.link} className='hover:text-primary text-[0.9rem] text-[#a8a7a7]' key={i}>
                    {items.name}
                  </NavLink>
                )
              })
            }
          </ul>
        </div>

        <div className='md:w-[25%] w-full flex flex-col items-start gap-8'>
          <h3 className='text-white text-[1.7rem] font-semibold relative'>Services
            <div className='absolute bottom-0 w-16 h-0.5 bg-primary rounded' />
          </h3>
          <ul className='flex flex-col gap-4 text-[#a8a7a7]'>
            <NavLink to={'/datascrapping'}>Data Scraping</NavLink>
            <NavLink to={'/dataautomation'}>Automation</NavLink>
            <NavLink to={'/datavisualization'}>Data Visualization</NavLink>
          </ul>
        </div>

        <div className='md:w-[30%] w-full flex flex-col items-start gap-8'>
          <h3 className='text-white font-semibold text-[1.7rem] relative'>Contact
            <div className='absolute bottom-0 w-14 h-0.5 bg-primary rounded' />
          </h3>
          <div className='flex flex-col gap-4 w-full px-4'>
            <div className='flex flex-row items-center gap-4'>
              <FaPhoneAlt className='w-6 h-6 text-primary' />
              <a className='text-[15px] text-[#a8a7a7]' href='tel:+923047280822'>+92 304 7280822</a>
            </div>

            <div className='flex flex-row items-center gap-4'>
              <MdEmail className='w-6 h-6 text-primary' />
              <a className='text-[15px] text-[#a8a7a7]' href='mailto:expertshayan@gmail.com'>ahmasoft.official@gmail.com</a>
            </div>

            <div className='flex flex-row items-center gap-4'>
              <FaLocationDot className='w-6 h-6 text-primary' />
              <p className='text-[15px]'>Lahore, Pakistan</p>
            </div>
          </div>

        </div>
      </div>


      <div className='bg-[#15101e] text-white flex justify-center py-4 text-center'>
        <h3>© All Copyright 2024 reserved by Ahmasoft</h3>
      </div>
    </div>
  )
}
