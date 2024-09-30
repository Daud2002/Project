import React from 'react'
import PageDetail from '../../Components/Fixcomponents/PageDetail/PageDetail'
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import './Contact.css'




export default function Contact() {

  const onhandleSubmit = (event) =>{
    event.preventDefault();
  }



  return (
    <div className='flex flex-col gap-8 mb-8'>
      <PageDetail name={'Contact Us'} quote={"We're Here To Help"}/>
      <div className='flex md:flex-row flex-col justify-around mt-12 md:gap-0 gap-10'>
        <div className='md:w-[45%] w-full flex flex-col gap-8 px-5'>
          <h5 className='text-primary text-left flex items-center gap-2'><  hr className='w-4 h-0.5 bg-primary rounded-xl' /> Contact With US</h5>
          <h1 className='text-[2rem] font-bold text-left'>Feel Free to Get in Touch</h1>
          <div className='flex flex-col gap-8 mt-8'>
            <div className='relative flex flex-row gap-4'>
              <LuPhoneCall className='text-primary w-8 h-8' />
              <div>
                <h3 className='font-semibold'>Call Anytime</h3>
                <p><a href='tel:+92 304 7280822'>+92 304 7280822</a></p>
              </div>
            </div>
            <div className='relative flex flex-row gap-4'>
              <HiOutlineMailOpen className='text-primary w-8 h-8' />
              <div>
                <h3 className='font-semibold'>Send Email</h3>
                <p><a href='mailto:expertshayan@gmail.com'>expertshayan@gmail.com</a></p>
              </div>
            </div>
            <div className='relative flex flex-row gap-4'>
              <IoLocationOutline className='text-primary w-8 h-8' />
              <div>
                <h3 className='font-semibold'>Visit Now</h3>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
            <div className='flex flex-row gap-8 mt-2 items-center'>
              <a href="https://www.linkedin.com/in/ehmadshayan"><FaLinkedin className='w-6 h-6 text-primary hover:scale-110 duration-200' /></a>
              <a href="https://www.youtube.com/watch?v=ba3yg2egZF4"><FaYoutube className='w-8 h-8 text-primary hover:text-red-700 hover:scale-110 duration-200' /></a>
              <a href="https://www.facebook.com/A.shayaan"><FaSquareFacebook className='w-6 h-6 text-primary hover:text-blue-600 hover:scale-110 duration-200' /></a>
              <a href="https://www.instagram.com/ahmadshayan.official"><FaInstagram className='w-6 h-6 text-primary hover:text-purple-600 hover:scale-110 duration-200' /></a>
            </div>
          </div>
        </div>
        <form className='bg-imgs md:w-[55%] w-full flex flex-row justify-center' onSubmit={onhandleSubmit}>
          <div className='w-full md:py-16 md:px-16 py-16 px-6 flex flex-col items-center justify-center gap-8'>
            <div className='flex md:flex-row flex-col justify-between gap-8 w-full'>
              <input type="text" placeholder='Your Name' className='outline-none pl-2 h-14 md:w-[48%] rounded-lg' />
              <input type="text" placeholder='Email Address' className='outline-none pl-2 h-14 md:w-[48%] rounded-lg' />
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-8 w-full'>
              <input type="number" placeholder='Mobile Number' className='outline-none pl-2 h-14 md:w-[48%] rounded-lg' />
              <input type="text" placeholder='Subject' className='outline-none pl-2 h-14 md:w-[48%] rounded-lg' />
            </div>
            <textarea name="" id="" className='resize-none w-full h-32 pl-3 pt-3 outline-none' placeholder='Enter your message' />
            <button className='text-white bg-primary hover:bg-white hover:text-primary duration-300 border-[1px] border-primary py-4 rounded w-[70%]'>Send Message</button>
          </div>
        </form>
      </div>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.5086510219626!2d74.30691007423523!3d31.592519343576384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c82d18c2ced%3A0x1aa4688a984fdde1!2sMinar-e-Pakistan!5e0!3m2!1sen!2s!4v1726646036953!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='overflow-hidden w-full outline-none'></iframe> */}
    </div>
  )
}
