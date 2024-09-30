import React, { useEffect, useState } from 'react'
import { nav_items } from '../../../assets/Data/Data';
import { RiWhatsappFill } from "react-icons/ri";
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/Images/logo.png'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState({});

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    // Function to toggle each submenu independently
    const toggleSubMenu = (index) => {
        setSubmenuOpen((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <>
            <nav className='flex flex-row md:justify-around justify-between items-center py-2 md:px-0 px-4 sticky top-0 z-50 bg-white w-full'>
                <div className='flex items-center gap-1'>
                    <img src={logo} alt="Logo" className='lg:w-[10rem] w-[7rem]' />
                </div>
                
                {/* Desktop Menu */}
                <ul className='md:flex hidden items-center gap-5'>
                    {nav_items.map((items, i) => (
                        <li className='flex flex-col relative group' key={i}>
                            <NavLink to={items.link} className='hover:text-primary xl:text-[15px] text-[10px] py-3 text-[#a1a1a1] hover:scale-105 duration-100'>
                                {items.name}
                            </NavLink>
                            {items.sublink && (
                                <div className='text-md ml-4 absolute -top-32 group-hover:top-12 rounded-xl -left-6 flex flex-col gap-8 bg-[#ededed] px-6 py-4 w-56 group-hover:opacity-100 opacity-0'>
                                    {items.sublink.map((item, i) => (
                                        <NavLink to={item.link} className='hover:text-primary text-[#a1a1a1] hover:scale-105 duration-100' key={i}>
                                            {item.title}
                                        </NavLink>
                                    ))}
                                    <p className='w-4 h-4 bg-[#a1a1a1] absolute -top-2 rotate-45 -z-10'></p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Desktop WhatsApp Button */}
                <div className='md:flex hidden items-center gap-4'>
                    <button className='border-[2px] border-primary text-primary py-1 px-2 rounded animate-pulse hover:bg-primary hover:text-white hover:scale-105 hover:duration-200 hover:animate-none xl:text-[15px] text-[10px]'>
                        Get a free Quote
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className='md:hidden flex flex-col'>
                    <div className='w-12 h-10' onClick={() => setisOpen(prev => !prev)}>
                        <div className='flex flex-col justify-between gap-2 mt-1.5'>
                            <div className={`${isOpen ? 'burger-lines' : 'cancel'} w-10 h-1 bg-primary rounded-md`} />
                            <div className={`${isOpen ? 'burger-lines' : 'cancel'} w-10 h-1 bg-primary rounded-md`} />
                            <div className={`${isOpen ? 'burger-lines' : 'cancel'} w-10 h-1 bg-primary rounded-md`} />
                        </div>
                    </div>

                    <div >
                        <div className={`h-[100vh] w-[50%] pr-14 bg-white absolute top-[3.5rem] ${isOpen ? '-left-0' : '-left-96'} duration-500`}>
                            <ul className='flex flex-col mt-8 pl-4 gap-2'>
                                {nav_items.map((items, i) => (
                                    <li className='flex flex-col' key={i}>
                                        <div className='flex flex-row justify-between items-center'>
                                            <NavLink to={items.link} className='hover:text-primary py-3 text-[#a1a1a1] duration-100' onClick={()=>setisOpen(false)}>
                                                {items.name}
                                            </NavLink>
                                            {items.sublink ? (
                                                <span onClick={() => toggleSubMenu(i)} className='duration-300'>
                                                    {submenuOpen[i] ? <FaAngleUp /> : <FaAngleDown />}
                                                </span>
                                            ) : null}
                                        </div>
                                        {items.sublink && (
                                            <div className={`ml-4 rounded-xl flex-col gap-8 bg-[#ededed] px-6 py-4 w-56 ${submenuOpen[i] ? 'flex' : 'hidden'}`} onClick={()=>setisOpen(false)}>
                                                {items.sublink.map((item, subIndex) => (
                                                    <NavLink to={item.link} className='hover:text-primary text-[#a1a1a1] hover:scale-105 duration-100' key={subIndex}>
                                                        {item.title}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <div className='flex justify-start pl-4 mt-10'>
                                <button className='border-[2px] border-primary text-primary py-1 px-2 rounded animate-pulse hover:bg-primary hover:text-white hover:scale-105 hover:duration-200 hover:animate-none md:text-[1rem] text-[0.7rem]'>
                                    Get a free Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
