import React from 'react'
import ceo from '../../../assets/Images/about_me_img.jpg'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

export default function Ceodetails() {
  return (
    <div className='flex md:flex-row flex-col md:justify-around items-center'>
    <div className='md:w-[50%] w-full px-4 flex justify-center'>
      <img src={ceo} alt="" className='md:w-[30rem] w-[20rem] md:h-[30rem] h-[20rem] rounded-lg' />
    </div>
      <div className='md:w-[50%] w-full px-4 flex flex-col gap-5'>
        <h1 className='font-bold text-[2rem]'>Ahmad Shayan</h1>
        <h5 className='text-primary text-[0.8rem] font-medium'>Founder</h5>
        <div className='flex flex-row gap-4'>
          <FaFacebookF className='box-content p-4 rounded-[50%] bg-[#f4f2f9] hover:bg-primary duration-200' />
          <IoLogoInstagram className='box-content p-4 rounded-[50%] bg-[#f4f2f9] hover:bg-primary duration-200' />
          <FaLinkedinIn className='box-content p-4 rounded-[50%] bg-[#f4f2f9] hover:bg-primary duration-200' />
        </div>
        <h3 className='font-semibold text-primary text-[2rem]'>I help my clients stand out and they help me grow</h3>
        <p className='text-justify'>I’m Ahmad Shayan, Co-founder and CEO. My main goal is to help my clients stand out, and in turn, we grow together. It’s pretty simple for me – when they succeed, so do I. I’ve always focused on bringing fresh ideas and real results to the table, and over time, that’s built trust and a reputation for getting things done. I believe in leading with creativity, collaboration, and making sure every project is something I’m proud of. It's been a great journey so far, and I’m excited to see where we go next.</p>
      </div>
    </div>
  )
}
