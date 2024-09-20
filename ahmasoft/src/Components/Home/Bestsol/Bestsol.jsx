import React from 'react'
import bestsol from '../../../assets/Images/best-sol-&-service.jpg'
import './Bestsol.css'

export default function Bestsol() {
    return (
        <div className='back-img flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between items-center px-4 py-16'>
            <div>
                <h1 className='flex flex-col lg:text-start text-white text-[6vw] font-semibold text-center'>
                    <span>Better IT Solutions & Services</span>
                    <span>at your Fingertips</span>
                </h1>
            </div>
            <button className='bg-white md:px-8 md:py-3 px-2 py-1 text-primary font-semibold rounded-sm'>Learn More</button>
        </div>
    )
}
