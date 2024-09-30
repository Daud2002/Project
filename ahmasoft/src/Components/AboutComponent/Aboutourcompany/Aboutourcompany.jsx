import React from 'react'
import aboutimg from '../../../assets/Images/aboutcompany-image.png'
import './Aboutourcompany.css'
import { SiTicktick } from "react-icons/si";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function Aboutourcompany() {
    return (
        <div className='flex md:flex-row flex-col justify-around mt-16 gap-8 md:gap-0'>
            <motion.img src={aboutimg} alt="" className='md:w-[40%] w-full px-4 rounded-3xl' 
                initial = {{x : -300}}
                whileInView={{x : 0}}
                transition={{duration : 0.6}}
            />
            <div className='md:w-[40%] w-full px-4'>
                <h5 className='text-primary md:text-start text-center flex items-center gap-2'><hr className='w-4 h-0.5 bg-primary'/>About Our Company</h5>
                <h1 className='text-[2rem] font-bold text-start'>We’re Partner of Your Innovations</h1>
                <p className='my-4 text-justify'>At Ahmasoft, we believe in transforming your ideas into reality. As a dedicated partner in your journey towards innovation, we specialize in providing cutting-edge web scraping and data visualization services. Our goal is to empower your business with the insights and tools needed to stay ahead in today’s data-driven world.</p>
                <div className='my-5 mb-10 flex flex-col gap-4'>
                    <ul className='flex w-full'>
                        <li className='flex flex-row items-center gap-3 w-[50%]'><SiTicktick className='text-primary'/> Best quality support</li>
                        <li className='flex flex-row items-center gap-3 w-[50%]'><SiTicktick className='text-primary'/> Serve the best  </li>
                    </ul>
                    <ul className='flex w-full'>
                        <li className='flex flex-row items-start gap-3 w-[50%]'><SiTicktick className='text-primary'/> Money back guarantee</li>
                        <li className='flex flex-row items-center gap-3 w-[50%]'><SiTicktick className='text-primary'/> Trusted Professionals</li>
                    </ul>
                </div>
                <Link className='bg-primary text-white py-4 px-8 rounded-lg hover:bg-white hover:text-primary border-[2px] border-primary duration-300 outline-none' to={'/team'}>Learn More</Link>
            </div>
        </div>
    )
}
