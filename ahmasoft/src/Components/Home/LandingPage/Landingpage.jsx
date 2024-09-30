import React from 'react'
import './Landingpage.css'
import { FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { services } from '../../../assets/Data/Data.jsx';
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"



export default function Landingpage() {
    return (
        <div className='block'>
            <div className='relative'>
                <div className='flex flex-row justify-between w-full text-primary h-[90vh]'>
                    <div className='flex flex-col gap-6 sm:w-[50%] w-full justify-center sm:items-start items-center pl-8'>
                        <header className='text-primary font-semibold 2xl:text-[3rem] lg:text-[2rem] md:text-[1.5rem]'>Welcome to Ahmasoft</header>
                        <h1 className='flex flex-col sm:items-start items-center font-semibold 2xl:text-[5rem] xl:text-[4rem] lg:text-[2.5rem] md:text-[1.5rem] text-[1.3rem] my-4 text-[#686868]'>
                            <span className=' opacity-65'>Your Trust</span>
                            <span className=' opacity-65'>Our Responsibility</span>
                        </h1>
                        <NavLink to={'/contact'} className='border-[2px] border-primary py-3 text-primary font-bold hover:bg-primary hover:text-white rounded duration-200 backdrop-blur-sm px-4'>Book Free Consultation</NavLink>
                    </div>
                    <div className='relative xl:w-[20%] lg:w-[25%] md:w-[30%] sm:w-[40%]'>
                        <div className='flex flex-col justify-center landingbgright h-full'>
                        <div className='absolute 2xl:right-16 xl:right-10 lg:right-7 md:right-4 sm:right-6 flex flex-col justify-center sm:gap-6 lg:gap-10 xl:gap-12 2xl:gap-20'>
                            <a href="https://www.linkedin.com/in/ehmadshayan">
                                <FaLinkedin className='2xl:w-16 2xl:h-16 xl:w-10 xl:h-10 sm:w-8 sm:h-8 text-white z-10 rounded hover:scale-110 duration-300' />
                            </a>

                            <a href="https://www.youtube.com/watch?v=ba3yg2egZF4">
                                <FaYoutube className='2xl:w-16 2xl:h-16 xl:w-10 xl:h-10 sm:w-8 sm:h-8 text-white z-10 rounded hover:scale-110 duration-300' />
                            </a>

                            <a href="https://www.facebook.com/A.shayaan/">
                                <FaSquareFacebook className='2xl:w-16 2xl:h-16 xl:w-10 xl:h-10 sm:w-8 sm:h-8 text-white z-10 rounded hover:scale-110 duration-300' />
                            </a>

                            <a href="https://www.instagram.com/ahmadshayan.official/">
                                <FaInstagram className='2xl:w-16 2xl:h-16 xl:w-10 xl:h-10 sm:w-8 sm:h-8 text-white z-10 rounded hover:scale-110 duration-300' />
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
                <motion.div
                    className='flex md:flex-row flex-col mt-16 justify-between xl:justify-around px-4 items-center md:gap-0 gap-6'
                    initial={{ y: 110, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {services.map((items, i) => (
                        <div
                            className='md:w-[30%] w-[90%] lg:w-[28%] border-[1px] shadow-black drop-shadow-md p-6 md:p-8 flex flex-col gap-3 md:gap-4 bg-white relative rounded-xl'
                            key={i}
                        >
                            <h1 className='flex justify-between items-center'>
                                <span className='font-bold text-[6vw] md:text-[2vw]'>{items.name}</span>
                                <span className='text-[#bebdbd] text-[4vw] md:text-[1.5vw]'>{`0${i + 1}`}</span>
                            </h1>
                            <p className='text-justify xl:text-[1.2rem] text-[0.8rem]'>{items.detail}</p>
                            <p className='absolute bg-[#29abe2] w-6 h-6 top-0 right-0 block rounded-tr-xl rounded-bl-xl'></p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </div>
    )
}
