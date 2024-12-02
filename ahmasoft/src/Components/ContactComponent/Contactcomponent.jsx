import React, { useState, useEffect } from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Contactcomponent() {



  const [formData, setformData] = useState({
    name: '',
    email: '',
    service: '',
    phone: '',
    country: '',
    message: ''
  })


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setformData((prevData) => ({ ...prevData, [name]: value }))
  }


  const templateParams = {
    to_name: 'Ahmasoft',
    from_name: formData.name,
    message: formData.message,
    reply_to: 'mirsab123@gamil.com'
  };


  const onhandleSubmit = async (event) => {
    event.preventDefault();

    // try {

    //   await emailjs.send(
    //     'service_94yx8oh',
    //     'template_1xnf4y7',
    //     templateParams,
    //     'W5O0KtANIT2yQ6SrV'
    //   )
    //     .then((response) => {
    //       toast('Email Sent Successfully')
    //     })
    //     .catch((error) => {
    //       console.error('Failed to send email:', error);
    //       toast.error('Failed to send email!'); // Show error toast
    //     });


    //   setformData({
    //     name: '',
    //     message: ''
    //   });

    // } catch (error) {
    //   console.error('FAILED...', error);
    //   alert('Failed to send message.');
    // }
  }
  // useEffect(() => {
  //   console.log(formData)
  // }, [formData])



  return (
    <div className='flex'>
      <form className='md:w-[75%] w-full flex flex-row justify-center' onSubmit={onhandleSubmit}>
        <div className='w-full md:py-16 md:px-16 py-16 px-6 flex flex-col items-center justify-center gap-16'>
          <h1 className='font-semibold text-[2rem] text-primary'>Contact Us</h1>
          <div className='flex flex-row justify-between w-full'>
            <input type="text" placeholder='Your Name' className='outline-none pl-2 h-12 w-[49%] border-b-[#d0d0d0] border-b-[1px]' name='name' value={formData.name} onChange={onChangeHandler} required />
            <input type="text" placeholder='Your Email' className='outline-none pl-2 h-12 w-[49%] border-b-[#d0d0d0] border-b-[1px]' name='email' value={formData.email} onChange={onChangeHandler} required />

          </div>



          <div className='flex md:flex-row flex-col justify-between gap-8 w-full'>
            <select className='w-full px-2 h-12 outline-none text-[#9f9f9f] border-b-[1px] border-b-[#d0d0d0]' value={formData.service} name='service' onChange={onChangeHandler}>
              <option value='Choose Service'>Choose Service</option>
              <option value='Data Scraping'>Data Scraping</option>
              <option value='Automation'>Automation</option>
              <option value='Data Visualization'>Data Visualization</option>
            </select>
          </div>

          <div className='flex md:flex-row flex-col justify-between gap-8 w-full'>

            <input type="number" placeholder='Your Phone Number' className='outline-none pl-2 h-12 w-[49%] border-b-[#d0d0d0] border-b-[1px]' name='phone' value={formData.phone} onChange={onChangeHandler} required />
            <input type="text" placeholder='Your Country' className='outline-none pl-2 h-12 w-[49%] border-b-[#d0d0d0] border-b-[1px]' name='country' value={formData.country} onChange={onChangeHandler} required />
          </div>

          <textarea id="" className='resize-none w-full h-16 pl-3 pt-3 outline-none border-b-[1px] border-b-[#d0d0d0] overflow-auto' placeholder='Enter your message' name='message' value={formData.message} onChange={onChangeHandler} required />
          <button className='text-white bg-primary hover:bg-white hover:text-primary duration-300 border-[1px] border-primary py-3 font-semibold rounded w-full flex flex-row items-center justify-center gap-6 text-[1.3rem]'>Send <FaArrowRightLong /></button>
        </div>
      </form>
    </div>
  )
}
