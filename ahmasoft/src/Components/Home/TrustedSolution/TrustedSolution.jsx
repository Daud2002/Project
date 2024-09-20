import React from 'react'
import service1 from '../../../assets/Images/service-item-1.png'
import service2 from '../../../assets/Images/service-item-2.png'
import service3 from '../../../assets/Images/service-item-3.png'
import './TrustedSolution.css'
import { GiChart } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";


export default function TrustedSolution() {
    return (
        <div className='mt-10'>
            <div className='flex flex-row justify-around overflow-hidden'>
                <div className='w-[40%] flex flex-row gap-8 p-8 border-[1px] relative'>
                    <img src={service3} alt="" className='w-[10rem] h-[10rem]' />
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-primary text-[1.2rem]'>Comprehensive Data Scraping Services</h1>
                        <p className='text-justify text-[0.7rem]'>Transform raw, unstructured data from various online sources into actionable insights with our advanced data scraping services. We help IT teams and businesses collect, process, and organize data from e-commerce sites, social media platforms, and more, ensuring accuracy and compliance.</p>
                    </div>
                    <div className='absolute w-5 h-5 bg-primary top-0 right-0'></div>
                </div>
                <div className='w-[40%] flex flex-row gap-8 p-8 border-[1px] relative'>
                    <img src={service2} alt="" className='w-[10rem] h-[10rem]' />
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-primary text-[1.1rem]'>Data Visualization for Informed Decision-Making</h1>
                        <p className='text-justify text-[0.7rem]'>Turn complex data into clear, visual insights that drive strategic decisions. Our data visualization services provide business and finance teams with the tools to interpret and act on data quickly and effectively, enhancing operational efficiency and business intelligence</p>
                    </div>
                    <div className='absolute w-5 h-5 bg-primary top-0 right-0'></div>
                </div>
                {/* <div className='w-[50%] flex flex-row'>
                    <img src={service1} alt="" className='w-[10rem] h-[10rem]'/>
                    <div>
                        <h1>Web and App Automation</h1>
                        <p>Streamline your digital operations and enhance user engagement with our web and app automation services. From automating routine tasks to optimizing workflows, we enable gaming and entertainment companies to deliver seamless experiences while reducing manual effort.</p>
                    </div>
                </div> */}
            </div>
            <div className='mt-20 bg-img flex flex-col md:flex-row p-10'>
                {/* Left Section */}
                <div className='w-full md:w-[30%] mb-10 md:mb-0 text-center'>
                    <h5 className='text-white'>-- Technology Path</h5>
                    <h1 className='font-bold text-[2rem] text-white'>Expert Data Solutions & Automation</h1>
                </div>

                {/* Right Section */}
                <div className='flex flex-col md:flex-row gap-10 md:gap-4 w-full md:w-[70%]'>
                    {/* First Card */}
                    <div className='flex flex-col items-center text-center'>
                        <MdOutlineWork className='border-[1px] border-primary p-2 box-content w-12 h-12 rounded-full text-primary bg-white' />
                        <h1 className='font-bold text-[1.3rem] text-white'>Experienced</h1>
                        <p className='text-white mt-4'>Expertise in data scraping, visualization, and automation for precise, reliable results</p>
                    </div>

                    {/* Vertical Divider */}
                    <hr className='hidden md:block w-1 h-32 bg-white' />

                    {/* Second Card */}
                    <div className='flex flex-col items-center text-center'>
                        <GiChart className='border-[1px] border-primary p-2 box-content w-12 h-12 rounded-full text-primary bg-white' />
                        <h1 className='font-bold text-[1.3rem] text-white'>Convenience</h1>
                        <p className='text-white mt-4'>Seamless, user-friendly solutions that simplify your data processes</p>
                    </div>

                    {/* Vertical Divider */}
                    <hr className='hidden md:block w-1 h-32 bg-white' />

                    {/* Third Card */}
                    <div className='flex flex-col items-center text-center'>
                        <IoIosPeople className='border-[1px] border-primary p-2 box-content w-12 h-12 rounded-full text-primary bg-white' />
                        <h1 className='font-bold text-[1.3rem] text-white'>Professional</h1>
                        <p className='text-white mt-4'>Committed to quality, timely delivery, and client satisfaction</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
