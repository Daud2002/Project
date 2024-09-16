import React from 'react'
import bestsol from '../../../assets/Images/best-sol-&-service.jpg'

export default function Bestsol() {
    return (
        <div>
            <div className='relative -z-10'>
                <img src={bestsol} alt="" />
                <div className='absolute top-40 left-10'>
                    <h1 className='flex flex-col text-start text-white text-[2rem] font-semibold'>
                        <span>Better IT Solutions & Services</span>
                        <span>at your Fingertips</span>
                    </h1>
                </div>
                <button className='absolute top-40 right-10 bg-white px-8 py-3 text-primary font-semibold rounded-sm'>Learn More</button>
            </div>

        </div>
    )
}
