import React from 'react'
import whyusimg from '../../../assets/Images/whyus.jpeg'
import { FaArrowRight } from "react-icons/fa6";

export default function WhyUs() {
    return (
        <div className='md:mt-96 md:mb-32 mb-8'>
            <div className='flex md:flex-row flex-col md:gap-0 gap-6'>
                <div className='md:w-[50%] px-4 flex justify-center'>
                    <img src={whyusimg} alt="Why Us" className='w-[30rem] rounded-md' />
                </div>
                <div className='md:w-[45%] w-full px-4'>
                    <h5 className='text-primary'>-- Company benefits</h5>
                    <h1 className='font-bold text-[2rem]'>Why you Should choose Our Services</h1>
                    <p className='my-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <div className='flex flex-col gap-4 mt-4'>
                        <div className='flex flex-row items-center gap-8'>
                            <FaArrowRight className='border-[2px] border-primary text-primary rounded-[50%] p-4 box-content' />
                            <div>
                                <h1 className='font-bold'>Donec Quis felis Commodo</h1>
                                <p>Lorem ipsum is simply free text dolor sit amet, consectetur notted.</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-8'>
                            <FaArrowRight className='border-[2px] border-primary text-primary rounded-[50%] p-4 box-content' />
                            <div>
                                <h1 className='font-bold'>Donec Quis felis Commodo</h1>
                                <p>Lorem ipsum is simply free text dolor sit amet, consectetur notted.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
