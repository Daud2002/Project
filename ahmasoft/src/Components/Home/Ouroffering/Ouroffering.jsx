import React from 'react'
import { offering } from '../../../assets/Data/Data'
import BestSolutions from '../Bestsolutions/BestSolutions'

export default function Ouroffering() {
    return (
        <div className='bg-[#f2f0f7] py-20 relative'>
            <div className='flex flex-col gap-4'>
                <h5 className='text-primary text-center'>-- What We're Offering to Our Clients</h5>
                <h1 className='font-bold flex flex-col text-center text-[4vw]'>
                    <span>Comprehensive Data Solutions:</span>
                    <span>Scraping, Visualization, and</span>
                    <span>Automation</span>
                </h1>
            </div>
            <div className='flex flex-col md:gap-8'>
                <div className='flex md:flex-row flex-col justify-around mt-8 md:p-0 p-4 md:gap-0 gap-4'>
                    {
                        offering.slice(0, 3).map((items, i) => {
                            return (
                                <div className='md:w-[30%] w-full bg-white p-8 flex flex-col gap-4' key={i}>
                                    <div className='flex justify-between items-center'>
                                        <h1 className='font-bold md:text-[2.3vw] text-[4vw] text-primary'>{items.title}</h1>
                                        <div>{items.img}</div>
                                    </div>
                                    <div>
                                        <p className='text-justify md:text-[1.5vw] text-[2.3vw]'>{items.description}</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                <div className='flex md:flex-row flex-col justify-around mb-8 md:p-0 p-4 md:gap-0 gap-4'>
                    {
                        offering.slice(3).map((items, i) => {
                            return (
                                <div className='md:w-[30%] w-full bg-white p-8 flex flex-col gap-4' key={i}>
                                    <div className='flex justify-between items-center'>
                                        <h1 className='font-bold md:text-[2.3vw] text-[4vw] text-primary'>{items.title}</h1>
                                        <div>{items.img}</div>
                                    </div>
                                    <div>
                                        <p className='text-justify md:text-[1.5vw] text-[2.3vw]'>{items.description}</p>
                                    </div>
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
