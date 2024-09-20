import React from 'react'
import PageDetail from '../../Components/Fixcomponents/PageDetail/PageDetail'
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import './Contact.css'




export default function Contact() {
  return (
    <div>
      <PageDetail name={'Contact Us'} />
      <div className='flex flex-row justify-around'>
        <div className='w-[45%] flex flex-col gap-8 px-5'>
          <h5 className='text-primary'>-- Contact With US</h5>
          <h1 className='text-[2rem] font-bold'>Feel Free to Get in Touch</h1>
          <div className='flex flex-col gap-8 mt-8'>
            <div className='relative flex flex-row gap-4'>
              <LuPhoneCall className='text-primary w-8 h-8' />
              <div>
                <h3 className='font-semibold'>Call Anytime</h3>
                <p>000000000</p>
              </div>
            </div>
            <div className='relative flex flex-row gap-4'>
              <HiOutlineMailOpen className='text-primary w-8 h-8' />
              <div>
                <h3 className='font-semibold'>Send Email</h3>
                <a href='mailto:expertshayan@gmail.com'><p>expertshayan@gmail.com</p></a>
              </div>
            </div>
            <div className='relative flex flex-row gap-4'>
              <IoLocationOutline className='text-primary w-8 h-8' />
              <div>
                <h3 className='font-semibold'>Visit Now</h3>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
        <form className='bg-imgs w-[55%] flex flex-row justify-center'>
        <div className='w-full p-16 flex flex-col items-center justify-center gap-8'>
          <div className='flex flex-row justify-between gap-8 w-full'>
            <input type="text" placeholder='Your Name' className='outline-none pl-2 h-14 w-[48%]'/>
            <input type="text" placeholder='Email Address' className='outline-none pl-2 h-14 w-[48%]'/>
          </div>
          <div className='flex flex-row justify-between gap-8 w-full'>
            <input type="number" placeholder='Mobile Number' className='outline-none pl-2 h-14 w-[48%]'/>
            <input type="text" placeholder='Subject' className='outline-none pl-2 h-14 w-[48%]'/>
          </div>
          <textarea name="" id="" className='resize-none w-full h-32 pl-3 pt-3 outline-none' placeholder='Enter your message' />
          <button className='text-primary bg-white border-[1px] border-primary py-4 rounded w-full'>Send Message</button>
        </div>
        </form>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.5086510219626!2d74.30691007423523!3d31.592519343576384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c82d18c2ced%3A0x1aa4688a984fdde1!2sMinar-e-Pakistan!5e0!3m2!1sen!2s!4v1726646036953!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='overflow-hidden w-full outline-none'></iframe>
    </div>
  )
}
