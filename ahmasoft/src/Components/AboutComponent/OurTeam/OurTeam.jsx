import React, { useEffect, useState } from 'react'
import './OurTeam.css'
import { team_members } from '../../../assets/Data/Data'
import { FaLastfm, FaLink } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";


export default function OurTeam() {



    return (
        <div className='flex flex-col gap-8 my-8'>
            <div className='flex flex-col justify-around items-center text-center mb-8'>
                <div className='lg:w-[40%] w-full px-4 flex flex-col text-center items-center'>
                    <h5 className='text-primary'>-- Our Expert People</h5>
                    <h1 className='font-bold text-[2rem]'>Meet Our Professional Team Members</h1>
                </div>
                <p className='md:w-[60%] w-full px-4 text-center'>Our professional team combines experience, innovation, and dedication to deliver outstanding results. From designers to developers, each member plays a crucial role in turning your vision into reality. Discover the talent behind our success.</p>
            </div>
            <div className='flex md:flex-row flex-col md:justify-around items-center gap-12 mx-6'>
                {
                    team_members.map((items, i) => {
                        return (
                            <div className='flex flex-col relative gap-4' key={i}>
                                <div className='overflow-hidden'>
                                    <img src={items.img} alt="" className='rounded-xl h-80 hover:scale-125 duration-500' />
                                    <div className='group'>
                                        <FaLink className='absolute right-4 bottom-4 text-[2rem] group cursor-pointer box-content' />
                                        <div className={`w-12 h-32 bg-white absolute right-1 md:-bottom-2 bottom-20 border-[1px] rounded flex flex-col items-center gap-6 p-3 group-hover:opacity-100 md:group-hover:bottom-12 group-hover:bottom-12 duration-300 opacity-0`}>
                                            <a href={items.links[0].facebook} target='_blank' className='hover:scale-110 hover:text-primary'><FaFacebookF /></a>
                                            <a href={items.links[1].insta} target='_blank' className='hover:scale-110 hover:text-primary'><IoLogoInstagram /></a>
                                            <a href={items.links[2].linkedin} target='_blank' className='hover:scale-110 hover:text-primary'><FaLinkedinIn /></a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='font-bold text-[1.3rem]'>{items.name}</h1>
                                    <p className='text-[15px]'>{items.role}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
