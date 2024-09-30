import React from 'react'

import './Bestsol.css'
import { Link } from 'react-router-dom'

export default function Bestsol() {
    return (
        <div className='back-img flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between items-center md:px-8 py-16 mx-8 rounded-lg'>
            <div>
                <h1 className='flex flex-col lg:text-start text-white md:text-[2rem] text-[1.3rem] font-semibold text-center'>
                    <span>Better IT Solutions & Services</span>
                    <span>at your Fingertips</span>
                </h1>
            </div>
            <Link className='bg-white md:px-8 md:py-3 px-2 py-1 text-primary font-semibold rounded-lg' to={'/about'}>Learn More</Link>
        </div>
    )
}
