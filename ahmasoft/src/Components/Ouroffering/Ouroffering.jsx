import React from 'react'
import { offering } from '../../assets/Data/Data'

export default function Ouroffering() {
    return (
        <div className='bg-[#f2f0f7] py-20 relative'>
            <div>
                <h5 className='text-primary text-center'>-- What We're Offering to Our Clients</h5>
                <h1 className='font-bold flex flex-col text-center text-[2.2rem]'>
                    <span>Comprehensive Data Solutions:</span>
                    <span>Scraping, Visualization, and</span>
                    <span>Automation</span>
                </h1>
            </div>
            <div>
                <div className='flex flex-row justify-around mt-8'>
                    {
                        offering.slice(0, 3).map((items, i) => {
                            return (
                                <div className='w-[30%] bg-white p-8 flex flex-col gap-4'>
                                    <div className='flex justify-between items-center'>
                                        <h1 className='font-bold text-[1.1rem] text-primary'>{items.title}</h1>
                                        <div>{items.img}</div>
                                    </div>
                                    <div>
                                        <p className='text-justify'>{items.description}</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                <div className='flex flex-row justify-around mt-8'>
                    {
                        offering.slice(3).map((items, i) => {
                            return (
                                <div className='w-[30%] bg-white p-8 flex flex-col gap-4'>
                                    <div className='flex justify-between items-center'>
                                        <h1 className='font-bold text-[1.3rem] text-primary'>{items.title}</h1>
                                        <div>{items.img}</div>
                                    </div>
                                    <div>
                                        <p className='text-justify'>{items.description}</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='absolute -bottom-10 bg-primary w-[80%] text-center flex flex-row justify-around items-center py-8'>
                    <h5 className='text-white font-semibold'>Unlock the full potential of your data. Let us handle the heavy lifting.</h5>
                    <button className='bg-white px-8 py-4 rounded-sm text-primary'>Learn More</button>
                </div>
            </div>
        </div>
    )
}
