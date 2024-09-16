import React from 'react'
import landingbg1 from '../../../assets/Images/landing-bg.jpeg'
import './Landingpage.css'
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { services } from '../../../assets/Data/Data.jsx';



export default function Landingpage() {
    return (
        <div className='block'>
            <div className='relative'>
                <img src={landingbg1} alt="" className='w-full h-[90vh]' />
                <div className='absolute top-40 left-10 flex gap-8'>
                    <div className='flex flex-col gap-8'>
                        <FaTwitterSquare className='w-8 h-8' />
                        <FaSquareFacebook className='w-8 h-8' />
                        <FaInstagram className='w-8 h-8' />
                        <FaLinkedin className='w-8 h-8' />
                    </div>
                    <div className='flex flex-col gap-6'>
                        <header className='text-primary font-semibold text-[2rem]'>Welcome to Ahma Soft</header>
                        <h1 className='flex flex-col font-semibold text-[2.5rem]'>
                            <span className=' opacity-65'>Your Trust</span>
                            <span className=' opacity-65'>Our Responsibility</span>
                        </h1>
                        <button className='border-[2px] border-primary py-3 text-primary font-bold hover:bg-primary hover:text-white rounded duration-200 backdrop-blur-sm'>Book free consultation</button>
                    </div>
                </div>
                <div className='flex flex-row mt-16 justify-around absolute -bottom-44 '>
                    {
                        services.map((items, i) => {
                            return (
                                <div className='w-[28%] border-[1px] p-8 flex flex-col gap-4 bg-white relative'>
                                    <h1 className='flex justify-between items-center'>
                                        <span className='font-bold text-[1.5rem]'>{items.name}</span>
                                        <span className='text-[#bebdbd] text-[1.5rem]'>{`0${i + 1}`}</span>
                                    </h1>
                                    <p className='text-justify text-[0.9rem]'>{items.detail}</p>
                                    <p className='absolute bg-[#b882fc] w-6 h-6 top-0 right-0 block'></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
