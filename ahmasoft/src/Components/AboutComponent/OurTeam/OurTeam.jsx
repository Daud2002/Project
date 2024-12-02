import React, { useEffect, useState } from 'react'
import './OurTeam.css'


export default function OurTeam() {

    return (
        <div className='flex flex-col gap-8 my-8'>
            <div className='flex flex-col justify-around items-center text-center mb-8'>
                <div className='lg:w-[40%] w-full px-4 flex flex-col text-center items-center'>
                    <h5 className='text-primary'>-- Our Expert People</h5>
                    <h1 className='font-bold text-[2rem]'>Meet Our Professional Team Members</h1>
                </div>
                <p className='md:w-[60%] w-full px-4 text-center'>Our professional team combines experience, innovation, and dedication to deliver outstanding results. From designers to developers, each member plays a crucial role in turning your vision into reality. Discover the talent behind our success.</p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-12 mx-6'>
               
            </div>
        </div>
    )
}
