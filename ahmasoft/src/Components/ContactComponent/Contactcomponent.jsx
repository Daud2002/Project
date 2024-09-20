import React from 'react'
import bgimg from '../../assets/Images/form-bg.jpg'

export default function Contactcomponent() {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col gap-8 w-full'>
                <div className='flex flex-row justify-between'>
                    <input type="text" placeholder='Your Name' className='w-[48%] h-14 pl-4 outline-none'/>
                    <input type="email" placeholder='Email Address' className='w-[48%] h-14 pl-4 outline-none'/>
                </div>
                <div className='flex flex-row justify-between'>
                    <input type="number" placeholder='Phone number' className='w-[48%] h-14 pl-4 outline-none'/>
                    <input type="text" placeholder='Subject' className='w-[48%] h-14 pl-4 outline-none'/>
                </div>
               <textarea name="message" className='outline-none resize-none h-32 pl-4 pt-4' placeholder='Write your message' />
            </div>
            <button className='mt-6 bg-primary text-white py-4 px-8'>Send Message</button>
        </div>
    )
}
