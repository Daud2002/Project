import React from 'react'
import { offering } from '../../../assets/Data/Data'
import BestSolutions from '../Bestsolutions/BestSolutions'
import './Ouroffering.css'
import cardsbg from '../../../assets/Images/cards_bg.avif'

export default function Ouroffering() {
    return (
        <div className='bg-[#f2f0f7] py-20 relative'>
            <div className='flex flex-col gap-4'>
                <h5 className='text-primary text-center flex flex-row items-center justify-center gap-4'> <hr className='w-6 h-0.5 bg-primary rounded-2xl'/>What We're Offering to Our Clients</h5>
                <h1 className='font-bold flex flex-col text-center items-center'>
                    <span className='md:text-[2rem] text-[1.5rem]'>Comprehensive Data Solutions</span>
                    <span className='md:text-[1.8rem] text-[1.3rem]'>For Your Business Needs</span>
                </h1>
            </div>
            <div className='flex flex-col md:gap-8'>
                <div className='flex md:flex-row flex-col justify-around mt-8 md:p-0 p-4  gap-4 flex-wrap'>
                    {
                        offering.map((items, i) => {
                            return (
                                <div className='flex flex-col w-full md:w-[48%] lg:w-[30%] relative group flex-wrap gap-6' key={i}>
                                    <div className='w-full h-full bg-white p-8 flex flex-col gap-4 z-20 rounded-xl hover:scale-110 duration-1000' key={i}>
                                        <div className='flex justify-between items-center gap-2'>
                                            <h1 className='font-bold md:text-[1.3rem] text-[4vw] text-primary'>{items.title}</h1>
                                            <img src={items.img} alt="" className='w-12'/>
                                        </div>
                                        <div>
                                            <p className='text-justify'>{items.description}</p>
                                        </div>
                                    </div>
                                    <img src={cardsbg} alt="" className='absolute h-full w-full group-hover:opacity-10 group-hover:scale-100 scale-0 duration-300 opacity-0 z-30 rounded-xl' />
                                </div>

                            )
                        })
                    }
                </div>
            </div>
            {/* <BestSolutions /> */}
        </div>
    )
}
