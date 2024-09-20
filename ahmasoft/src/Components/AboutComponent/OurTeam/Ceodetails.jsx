import React from 'react'
import ceo from '../../../assets/Images/company-person-1.jpg'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

export default function Ceodetails() {
  return (
    <div className='flex flex-row justify-around'>
    <div className='w-[50%] flex justify-center'>
      <img src={ceo} alt="" className='w-[30rem] h-[30rem] rounded' />
    </div>
      <div className='w-[50%] flex flex-col gap-5'>
        <h1 className='font-bold text-[2rem]'>Daud Mir</h1>
        <h5 className='text-primary text-[0.8rem] font-medium'>Co founder & CEO</h5>
        <div className='flex flex-row gap-4'>
          <FaFacebookF className='box-content p-4 rounded-[50%] bg-[#f4f2f9] hover:bg-primary duration-200' />
          <IoLogoInstagram className='box-content p-4 rounded-[50%] bg-[#f4f2f9] hover:bg-primary duration-200' />
          <FaLinkedinIn className='box-content p-4 rounded-[50%] bg-[#f4f2f9] hover:bg-primary duration-200' />
        </div>
        <h3 className='font-semibold text-primary text-[2rem]'>I help my clients stand out and they help me grow</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sequi? Ea dolorem vel, repellat similique et cum ullam dolorum temporibus dolor quae id dicta consectetur unde fugit delectus, consequuntur voluptatibus quia. Incidunt obcaecati enim quibusdam aliquid illo? Eligendi a tempora sapiente totam cupiditate dolorem, distinctio repudiandae, neque quod vel accusantium!</p>
      </div>
    </div>
  )
}
