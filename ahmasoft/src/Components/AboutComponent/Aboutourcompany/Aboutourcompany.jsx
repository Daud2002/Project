import React from 'react'
import aboutimg from '../../../assets/Images/aboutcompany-image.png'
import './Aboutourcompany.css'

export default function Aboutourcompany() {
    return (
        <div className='flex flex-row justify-around'>
            <img src={aboutimg} alt="" className='w-[40%]' />
            <div className='w-[40%]'>
                <h5 className='text-primary'>--About Our Company</h5>
                <h1 className='text-[2rem] font-bold'>We’re Partner of Your Innovations</h1>
                <p className='my-4 text-justify'>At Ahmasoft, we believe in transforming your ideas into reality. As a dedicated partner in your journey towards innovation, we specialize in providing cutting-edge web scraping and data visualization services. Our goal is to empower your business with the insights and tools needed to stay ahead in today’s data-driven world.</p>
                <div className='my-5'>
                    <ul className='flex justify-between'>
                        <li><i className='check'></i>Best quality support</li>
                        <li>Serve the best  </li>
                    </ul>
                    <ul className='flex justify-between'>
                        <li>Money back guarantee</li>
                        <li>Trusted Professionals</li>
                    </ul>
                </div>
                <button className='bg-primary text-white py-2 px-4 rounded-sm'>Learn More</button>
            </div>
        </div>
    )
}
