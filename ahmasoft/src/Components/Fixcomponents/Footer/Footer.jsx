import React from 'react'
import './Footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { nav_items } from '../../../assets/Data/Data';


export default function Footer() {
  return (
    <div>
      <div className='bg-footer-img h-[50vh] flex flex-row justify-between pt-8'>

        <div className='w-[30%] flex flex-col gap-6 pl-4 pr-20'>
          <h1 className='text-white text-[2rem] font-semibold relative'>Ahmasoft
          <div className='absolute bottom-0 w-10 h-0.5 bg-primary rounded' />
          </h1>
          <p className='text-justify text-[0.9rem]'>We thrive on transforming data into opportunities, pushing boundaries in data solutions and automation.</p>
          <div className='flex gap-8'>
            <a href=""><FaLinkedinIn className='border-[1px] p-4 box-content rounded-[20%] h-4 w-4 bg-[#15101e] text-white hover:scale-110 duration-150 hover:bg-primary' /></a>
            <a href=""><FaTwitter className='border-[1px] p-4 box-content rounded-[20%] h-4 w-4 bg-[#15101e] text-white hover:scale-110 duration-150 hover:bg-primary' /></a>
            <a href=""><GrFacebookOption className='border-[1px] p-4 box-content rounded-[20%] h-4 w-4 bg-[#15101e] text-white hover:scale-110 duration-150 hover:bg-primary' /></a>
            <a href=""><FaInstagram className='border-[1px] p-4 box-content rounded-[20%] h-4 w-4 bg-[#15101e] text-white hover:scale-110 duration-150 hover:bg-primary' /></a>
          </div>
        </div>

        <div className='w-[10%] flex flex-col gap-6'>
          <h3 className='text-white font-semibold text-[1.7rem] relative'>Links
            <div className='absolute bottom-0 w-10 h-0.5 bg-primary rounded' />
          </h3>
          <ul className='flex flex-col gap-2'>
            {
              nav_items.slice(1).map((items, i) => {
                return (
                  <p className='hover:text-primary text-[0.9rem]'>
                    {items.name}
                  </p>
                )
              })
            }
          </ul>
        </div>

        <div className='w-[30%] flex flex-col gap-8 pr-6'>
          <h3 className='text-white text-[1.7rem] font-semibold relative'>NewsLetter
          <div className='absolute bottom-0 w-16 h-0.5 bg-primary rounded' />
          </h3>
          <p>Signup for our latest news & articles. We won’t give you spam mails</p>
          <div className='flex'>
            <input type="text" className='outline-none py-2 pl-2' />
            <button className='bg-primary px-3'><CiLocationArrow1 className='text-white' /></button>
          </div>
        </div>

        <div className='w-[30%] flex flex-col gap-8'>
          <h3 className='text-white font-semibold text-[1.7rem] relative'>Contact
          <div className='absolute bottom-0 w-14 h-0.5 bg-primary rounded' />
          </h3>


          <div className='flex flex-col gap-4'>
            <div className='flex flex-row items-center gap-4'>
              <FaPhoneAlt className='w-6 h-6 text-primary' />
              <p className='text-[15px]'>+923047280822</p>
            </div>

            <div className='flex flex-row items-center gap-4'>
              <MdEmail className='w-6 h-6 text-primary' />
              <p className='text-[15px]'>expertshayan@gmail.com</p>
            </div>

            <div className='flex flex-row items-center gap-4'>
              <FaLocationDot className='w-6 h-6 text-primary' />
              <p className='text-[15px]'>Lahore, Pakistan</p>
            </div>
          </div>

        </div>
      </div>


      <div className='bg-[#15101e] text-white flex justify-center py-4'>
        <h3>© All Copyright 2024 reserved by Ahmasoft</h3>
      </div>
    </div>
  )
}
