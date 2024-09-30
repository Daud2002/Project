import React from 'react';
import service1 from '../../../assets/Images/service-item-1.png';
import service2 from '../../../assets/Images/service-item-2.png';
import service3 from '../../../assets/Images/service-item-3.png';
import './TrustedSolution.css';
import { GiChart } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion';

export default function TrustedSolution() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const services = [
        {
            img: service3,
            title: "Comprehensive Data Scraping Services",
            description: "Transform raw, unstructured data from various online sources into actionable insights with our advanced data scraping services. We help IT teams and businesses collect, process, and organize data from e-commerce sites, social media platforms, and more, ensuring accuracy and compliance.",
        },
        {
            img: service2,
            title: "Data Visualization for Informed Decision-Making",
            description: "Turn complex data into clear, visual insights that drive strategic decisions. Our data visualization services provide business and finance teams with the tools to interpret and act on data quickly and effectively, enhancing operational efficiency and business intelligence.",
        },
        {
            img: service1,
            title: "Web and App Automation Services",
            description: "Streamline your digital operations and enhance user engagement with our web and app automation services. From automating routine tasks to optimizing workflows, we enable businesses to deliver seamless experiences while reducing manual effort.",
        },
        {
            img: service1,
            title: "Web and App Automation Services Extra",
            description: "Streamline your digital operations and enhance user engagement with our web and app automation services. From automating routine tasks to optimizing workflows, we enable businesses to deliver seamless experiences while reducing manual effort.",
        }
    ];


    return (
        <div className='mt-10 flex flex-col items-center'>
            <div className='flex flex-col w-full p-8'>
                <Slider {...settings}>
                    {services.map((service, index) => (
                        <div key={index} className='md:w-[30%] w-[50%] flex flex-col gap-4 items-center text-center p-8 rounded-2xl relative'>
                            <div className='p-8 bg-[#f7fafd] rounded-xl'>
                                <div className='w-full flex justify-center'>
                                    <img src={service.img} alt={service.title} className='w-[10rem] flex' />
                                </div>
                                <div className='flex flex-col gap-4 text-center mt-4'>
                                    <h1 className='font-bold text-primary text-[1.2rem]'>{service.title}</h1>
                                    <p className='text-[0.7rem] text-center'>{service.description}</p>
                                </div>
                            </div>
                            {/* <div className='absolute w-5 h-5 bg-primary top-0 right-0 rounded-tr-[65%] rounded-bl-[30%] outline-none'></div> */}
                        </div>
                    ))}
                </Slider>
            </div>

            <motion.div className='my-20 bg-img-landing flex flex-col md:flex-row p-10 rounded-lg'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Left Section */}
                <div className='w-full md:w-[25%] mb-10 md:mb-0 text-center'>
                    <h5 className='text-white'>-- Technology Path</h5>
                    <h1 className='font-bold text-[2rem] text-white'>Expert Data Solutions & Automation</h1>
                </div>

                {/* Right Section */}
                <div className='flex flex-col md:flex-row gap-10 md:gap-4 w-full md:w-[75%]'>
                    {/* First Card */}
                    <div className='flex flex-col items-center text-center'>
                        <MdOutlineWork className='border-[1px] border-primary p-2 box-content w-12 h-12 rounded-full text-primary bg-white' />
                        <h1 className='font-bold text-[1.3rem] text-white'>Experienced</h1>
                        <p className='text-white mt-4'>Expertise in data scraping, visualization, and automation for precise, reliable results.</p>
                    </div>

                    {/* Vertical Divider */}
                    <hr className='hidden md:block w-1 h-32 bg-white' />

                    {/* Second Card */}
                    <div className='flex flex-col items-center text-center'>
                        <GiChart className='border-[1px] border-primary p-2 box-content w-12 h-12 rounded-full text-primary bg-white' />
                        <h1 className='font-bold text-[1.3rem] text-white'>Convenience</h1>
                        <p className='text-white mt-4'>Seamless, user-friendly solutions that simplify your data processes.</p>
                    </div>

                    {/* Vertical Divider */}
                    <hr className='hidden md:block w-1 h-32 bg-white' />

                    {/* Third Card */}
                    <div className='flex flex-col items-center text-center'>
                        <IoIosPeople className='border-[1px] border-primary p-2 box-content w-12 h-12 rounded-full text-primary bg-white' />
                        <h1 className='font-bold text-[1.3rem] text-white'>Professional</h1>
                        <p className='text-white mt-4'>Committed to quality, timely delivery, and client satisfaction.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
