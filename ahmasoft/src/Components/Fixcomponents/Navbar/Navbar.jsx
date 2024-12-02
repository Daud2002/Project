import React, { useEffect, useState } from 'react'
import { nav_items } from '../../../assets/Data/Data';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/Images/logo.png'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";


export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    const [sub, setsub] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);


    const index = (ind) => {
        setsub((prev) => (prev === ind ? false : ind))
        if (!ind) {
            setisOpen((prev) => !prev);
        }
    }



    return (
        <>
            <nav className='flex flex-row md:justify-around justify-between items-center py-2 md:px-0 px-4 sticky top-0 z-50 bg-white w-full'>
                <Link to={'/'} className='flex items-center gap-1'>
                    <img src={logo} alt="Logo" className='lg:w-[10rem] w-[5rem]' />
                </Link>

                {/* Desktop Menu */}

                {/* Desktop Quote Button */}
                <div className='md:flex hidden items-center gap-4'>
                    <ul className='md:flex hidden items-center gap-6'>
                        {nav_items.map((items, i) => (
                            <li className='flex flex-col relative' key={i}>
                                <Link to={items.link} className='hover:text-primary xl:text-[15px] text-[10px] py-3 text-[#a1a1a1] hover:scale-105 duration-100' onClick={(e) => { if (items.sublinks) { e.preventDefault; index(i) } }}>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex flex-row' >{items.name}</div>
                                        <div>{items.sublinks ? <span><FaAngleUp className={`duration-300 ${sub ? ' rotate-180' : 'rotate-0'}`} /></span> : ''}</div>
                                    </div>
                                </Link>
                                <div className={`fixed ${sub ? 'mt-12' : '-mt-64'} duration-300 border border-gray-200 rounded-xl shadow shadow-[#d0d0d0] bg-white`}>{items.sublinks && (<div>{items.sub.map((items, i) => <Link to={items.link} onClick={() => setsub(false)} className='flex p-2 text-[#6a6a6a]' key={i}>{items.name}</Link>)}</div>)}</div>
                            </li>
                        ))}
                    </ul>
                    <Link to={'/contact'} className='border-[2px] border-primary text-primary py-1 px-2 rounded animate-pulse hover:bg-primary hover:text-white hover:scale-105 hover:duration-200 hover:animate-none xl:text-[15px] text-[10px] ml-5'>
                        Get a free Quote
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className='md:hidden flex flex-col'>
                    <div className='w-12 h-10' onClick={() => { setisOpen(prev => !prev); setsub(false) }}>
                        <div className='flex flex-col justify-between gap-2 mt-1.5'>
                            <div className={`${isOpen ? 'burger-lines' : 'cancel'} w-10 h-1 bg-primary rounded-md`} />
                            <div className={`${isOpen ? 'burger-lines' : 'cancel'} w-10 h-1 bg-primary rounded-md`} />
                            <div className={`${isOpen ? 'burger-lines' : 'cancel'} w-10 h-1 bg-primary rounded-md`} />
                        </div>
                    </div>

                    <div >
                        <div className={`h-auto pb-6 ${sub ? 'w-[80%]' : 'w-[50%]'} pr-14 bg-white absolute navshadow top-[3.5rem] ${isOpen ? '-left-0' : '-left-96'} duration-500`}>
                            <ul className='flex flex-col mt-8 pl-4 gap-2'>
                                {nav_items.map((items, i) => (
                                    <li className='flex flex-col' key={i}>
                                        <div className='flex flex-row justify-between items-center relative'>
                                            <Link to={items.link} className='hover:text-primary py-3 text-[#a1a1a1] duration-100' onClick={() => index(items.sublinks ? i : '')}>
                                                <div className='flex items-center gap-2'>
                                                    <div className='flex flex-row'>{items.name}</div>
                                                    <div>{items.sublinks ? <span><FaAngleLeft className={`duration-300 ${sub ? ' rotate-180' : 'rotate-0'}`} /></span> : ''}</div>
                                                </div>
                                            </Link>
                                            <div className={`fixed ${sub ? 'ml-28' : '-ml-64'} duration-300 border border-gray-200 rounded-xl shadow shadow-[#d0d0d0] bg-white`}>{items.sublinks && (<div>{items.sub.map((items, i) => <Link to={items.link} key={i} onClick={() => { setsub(false); setisOpen(false) }} className='flex p-2 text-[#6a6a6a]'>{items.name}</Link>)}</div>)}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <Link to={'/contact'} className='flex justify-start pl-4 mt-10'>
                                <button className='border-[2px] border-primary text-primary py-1 px-2 rounded animate-pulse hover:bg-primary hover:text-white hover:scale-105 hover:duration-200 hover:animate-none md:text-[1rem] text-[0.7rem]'>
                                    Get a free Quote
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
