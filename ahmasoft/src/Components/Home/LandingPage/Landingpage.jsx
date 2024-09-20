import React from 'react'
import './Landingpage.css'
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { services } from '../../../assets/Data/Data.jsx';
import video from '../../../assets/Images/bg-video.mp4'



export default function Landingpage() {
    return (
        <div className='block'>
            <div className='relative'>
                <video src={video} alt="" className='h-[100vh] w-full object-cover' autoPlay muted loop />
                <div className='absolute sm:top-32 top-14 flex sm:flex-row md:justify-between w-full flex-col gap-12 text-center px-8 text-primary'>
                    <div className='flex flex-col gap-6'>
                        <header className='text-primary font-semibold text-[10vw] sm:text-[5vw]'>Welcome to Ahmasoft</header>
                        <h1 className='flex flex-col md:items-start font-semibold text-[7vw] sm:text-[4vw] my-4 text-white'>
                            <span className=' opacity-65'>Your Trust</span>
                            <span className=' opacity-65'>Our Responsibility</span>
                        </h1>
                        <button className='border-[2px] border-primary py-3 text-primary font-bold hover:bg-primary hover:text-white rounded duration-200 backdrop-blur-sm'>Book free consultation</button>
                    </div>
                    <div className='flex sm:flex-col flex-row gap-8'>
                        <FaTwitterSquare className='w-8 h-8 text-primary' />
                        <FaSquareFacebook className='w-8 h-8 text-primary' />
                        <FaInstagram className='w-8 h-8 text-primary' />
                        <FaLinkedin className='w-8 h-8 text-primary' />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col mt-16 md:justify-between px-4 items-center md:gap-0 gap-6'>
                    {
                        services.map((items, i) => {
                            return (
                                <div className='md:w-[30%] w-[90%] border-[1px] p-8 flex flex-col gap-4 bg-white relative'>
                                    <h1 className='flex justify-between items-center'>
                                        <span className='font-bold text-[3vw] md:text-[2vw]'>{items.name}</span>
                                        <span className='text-[#bebdbd] text-[1.5vw]'>{`0${i + 1}`}</span>
                                    </h1>
                                    <p className='text-justify text-[2.5vw] md:text-[1vw]'>{items.detail}</p>
                                    <p className='absolute bg-[#29abe2] w-6 h-6 top-0 right-0 block'></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
