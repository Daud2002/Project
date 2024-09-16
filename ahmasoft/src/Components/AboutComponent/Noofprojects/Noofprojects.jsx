import React from 'react'
import CountUp from 'react-countup'

export default function Noofprojects() {
    return (
        <div className='flex flex-row justify-around my-20'>
            <div className='flex flex-col items-center'>
                <div className='relative'>
                    <CountUp start={0} end={30} duration={2} delay={0} className='text-[3.5rem] font-bold italic'/><span className='absolute top-0 -right-6 font-bold text-[2rem] text-primary'>+</span>
                </div>
                <span className='text-primary font-bold uppercase px-2 py-1'>ACTIVE CLIENTS</span>
            </div>
            <div className='flex flex-col items-center'>
                <div className='relative'>
                    <CountUp start={0} end={90} duration={2} delay={0} className='text-[3.5rem] font-bold italic'/><span className='absolute top-0 -right-6 font-bold text-[2rem] text-primary'>+</span>
                </div>
                <span className='text-primary font-bold uppercase px-2 py-1'>Projects Completed</span>
            </div>
            <div className='flex flex-col items-center'>
                <div className='relative'>
                    <CountUp start={0} end={10} duration={1} delay={0} className='text-[3.5rem] font-bold italic'/><span className='absolute top-0 -right-6 font-bold text-[2rem] text-primary'>+</span>
                </div>
                <span className='text-primary font-bold uppercase px-2 py-1'>Glorious Years</span>
            </div>
            <div className='flex flex-col items-center'>
                <div className='relative'>
                    <CountUp start={0} end={120} duration={2} delay={0} className='text-[3.5rem] font-bold italic'/><span className='absolute top-0 -right-6 font-bold text-[2rem] text-primary'>+</span>
                </div>
                <span className='text-primary font-bold uppercase px-2 py-1'>Professional Team</span>
            </div>
            
        </div>
    )
}
