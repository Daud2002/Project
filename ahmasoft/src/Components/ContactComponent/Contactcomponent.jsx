import React from 'react'
import bgimg from '../../assets/Images/form-bg.jpg'

export default function Contactcomponent() {
    return (
        <form className='flex flex-col items-center'>
            <div className='flex flex-col gap-8 w-full'>
                <div className='flex md:flex-row flex-col justify-between md:gap-0 gap-6'>
                    <input type="text" placeholder='Your Name' className='md:w-[48%] w-full h-14 pl-4 outline-none rounded-lg'/>
                    <input type="email" placeholder='Email Address' className='md:w-[48%] w-full h-14 pl-4 outline-none rounded-lg'/>
                </div>
                <div className='flex md:flex-row flex-col justify-between md:gap-0 gap-6'>
                    <input type="number" placeholder='Phone number' className='md:w-[48%] h-14 pl-4 outline-none rounded-lg'/>
                    <input type="text" placeholder='Subject' className='md:w-[48%] h-14 pl-4 outline-none rounded-lg'/>
                </div>
               <textarea name="message" className='outline-none resize-none h-32 pl-4 pt-4 rounded-lg' placeholder='Write your message' />
            </div>
            <button className='mt-6 bg-primary text-white py-4 px-8 rounded-xl'>Send Message</button>
        </form>
    )
}
