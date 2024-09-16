import React from 'react'
import { nav_items } from '../../../assets/Data/Data';
import { RiWhatsappFill } from "react-icons/ri";
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/Images/logo.jpg'

export default function Navbar() {
    return (
        <nav className='flex flex-row justify-around py-2 sticky top-0 w-full z-30 bg-white'>
            <div className='flex items-center gap-1'>
                {/* <span className='font-bold text-stroke'>Ahma</span>
                <span className='rounded bg-primary text-white px-4 py-0.5 tracking-widest font-bold text-[1.3rem]'>Soft</span> */}
                <img src={logo} alt="" className='w-[10rem]'/>
            </div>
            <ul className='flex items-center gap-5'>
                {
                    nav_items.map((items, i) => {
                        return (
                            <NavLink to={items.link}>{items.name}</NavLink>
                        )
                    })
                }
            </ul>
            <div className='flex items-center gap-4'>
                <RiWhatsappFill className=' text-green-400 w-8 h-8'/>
                <button className='border-[2px] border-primary text-primary py-1 px-2 rounded animate-pulse hover:bg-primary hover:text-white hover:scale-105 hover:duration-200 hover:animate-none'>Get a free Quote</button>
            </div>
        </nav>
    )
}
