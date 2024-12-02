import React from 'react'
import whyusimg from '../../../assets/Images/whyus.jpeg'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { whyus_services } from '../../../assets/Data/Data';
import { GiCheckMark } from "react-icons/gi";


export default function WhyUs() {
    return (
        <div className='my-16'>
            <div className='flex md:flex-row flex-col md:gap-0 gap-6'>
                <motion.div className='md:w-[50%] flex justify-center px-6'
                    initial={{ x: -200 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={whyusimg} alt="Why Us" className='rounded-xl 2xl:w-[40rem]' />
                </motion.div>

                <motion.div className='md:w-[45%] w-full px-4'
                    initial={{ y: 200 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h5 className='text-primary flex flex-row items-center gap-4'><hr className='w-6 h-[0.2rem] rounded-3xl bg-primary outline-none'/> Why Us</h5>
                    <h1 className='font-bold xl:text-[2.2rem] sm:text-[1.5rem]'>Why You Should Choose Our Services</h1>
                    {/* <p className='my-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p> */}
                    <div className='flex flex-col gap-4 mt-4'>
                        {
                            whyus_services.map((items, i) => {
                                return (
                                    <div className='flex flex-row items-center gap-8 text-justify' key={i}>
                                        <GiCheckMark className='text-primary flex-shrink-0 text-xl' />
                                        <div>
                                            <h1 className='font-bold xl:text-[1.2rem]'>{items.title}</h1>
                                            <p className='text-[0.8rem] font-light'>{items.detail}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
