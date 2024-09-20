import React, { useEffect, useState } from 'react'
import './OurTeam.css'
import { team_members } from '../../../assets/Data/Data'
import { FaLastfm, FaLink } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";


export default function OurTeam() {



    return (
        <div>
            <div className='flex flex-row justify-around items-center'>
                <div className='w-[40%] flex flex-col items-start'>
                    <h5 className='text-primary'>-- Our Expert People</h5>
                    <h1 className='font-bold text-[2rem]'>Meet Our Professional Team Members</h1>
                </div>
                <p className='w-[40%]'>There are many variations of passages of available but majority have suffered alteration in some form, by humou or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='flex flex-row justify-around'>
                {
                    team_members.map((items, i) => {
                        return (
                            <div className='flex flex-col relative gap-4'>
                                <div>
                                    <img src={items.img} alt="" className='rounded' />
                                    <div className='group'>
                                    <FaLink className='absolute right-4 bottom-4 text-[2rem] group cursor-pointer box-content' />
                                    
                                    <div className={`w-12 h-32 bg-white absolute right-1 -bottom-2 border-[1px] rounded flex flex-col items-center gap-6 p-3 group-hover:opacity-100 group-hover:bottom-12 duration-300 opacity-0`}>
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
