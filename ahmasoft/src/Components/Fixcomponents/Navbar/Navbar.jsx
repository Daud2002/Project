import React, { useEffect, useState } from 'react'
import { nav_items } from '../../../assets/Data/Data';
import { RiWhatsappFill } from "react-icons/ri";
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../../assets/Images/logo.png'


export default function Navbar() {

    const [isOpen, setisOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <>
            <nav className='flex flex-row md:justify-around justify-between items-center py-2 md:px-0 px-4 fixed top-0 w-full z-30 backdrop-blur-3xl'>
                <div className='flex items-center gap-1'>
                    <img src={logo} alt="" className='lg:w-[10rem] w-[7rem]' />
                </div>
                <ul className='md:flex hidden items-center gap-5'>
                    {
                        nav_items.map((items, i) => {
                            return (
                                <div className='flex flex-col relative group' key={i}>
                                    <NavLink to={items.link} className='hover:text-primary xl:text-[15px] text-[10px] py-3 text-[#a1a1a1]' key={i}>{items.name}</NavLink>
                                    {items.sublink && (
                                        <div className='text-md ml-4 absolute top-12 -left-6 flex flex-col gap-8 bg-white px-6 py-4 w-56 group-hover:opacity-100 opacity-0 transition-opacity border-[1px] border-primary rounded'>
                                            {items.sublink.map((item, i) => {
                                                return (
                                                    <Link to={item.link} className='hover:text-primary sublinks'>{item.title}</Link>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            )
                        })
                    }
                </ul>
                <div className='md:flex hidden items-center gap-4'>
                    <RiWhatsappFill className=' text-green-400 w-8 h-8 md:hidden' />
                    <button className='border-[2px] border-primary text-primary py-1 px-2 rounded animate-pulse hover:bg-primary hover:text-white hover:scale-105 hover:duration-200 hover:animate-none xl:text-[15px] text-[10px]'>Get a free Quote</button>
                </div>
                <div className='md:hidden flex flex-col'>
                    <div className='w-12 h-10 '>
                        <div className= 'flex flex-col justify-between gap-2 mt-1.5' onClick={() => setisOpen(prev => !prev)}>
                            <div className = {`${isOpen ? 'burger-lines' : 'cancel'} w-10 h-1 bg-primary rounded-md`} />
                            <div className = {`${isOpen ? 'burger-lines' : 'cancel'} w-10 h-1 bg-primary rounded-md`} />
                            <div className = {`${isOpen ? 'burger-lines' : 'cancel'} w-10 h-1 bg-primary rounded-md`} />
                        </div>
                    </div>
                    <div className='w-[70%]'>
                        <div className={`h-[100vh] pr-14 bg-white absolute top-[3.5rem]  ${isOpen ? '-left-0' : '-left-96'} duration-500`}>
                            <ul className='flex flex-col mt-8 pl-4 gap-8'>
                                {
                                    nav_items.map((items, i) => {
                                        return (
                                            <NavLink to={items.link} onClick={()=>setisOpen(false)}>{items.name}</NavLink>
                                        )
                                    })
                                }
                            </ul>
                            <div className='flex justify-start pl-4 mt-10'>
                            <button className='border-[2px] border-primary text-primary py-1 px-2 rounded animate-pulse hover:bg-primary hover:text-white hover:scale-105 hover:duration-200 hover:animate-none'>Get a free Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
