import React from 'react'
import pagedetailbg from '../../../assets/Images/content-page.png'
import pagedetailbgright from '../../../assets/Images/content-page-rightside.png'
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function PageDetail({ name }) {
    return (
        <div className='relative h-[70vh]'>
            <img src={pagedetailbg} alt="" className='h-[50vh]' />
            <img src={pagedetailbgright} alt="" className='absolute right-0 top-0 h-[50vh]' />
            <div className='absolute top-10 left-6 flex gap-6 flex-col'>
                <FaTwitterSquare className='w-8 h-8' />
                <FaSquareFacebook className='w-8 h-8' />
                <FaInstagram className='w-8 h-8' />
                <FaLinkedin className='w-8 h-8' />
            </div>
            <div className='absolute top-20 left-[35rem]'>
                <h1 className='font-semibold text-white text-[2.5rem]'>{name}</h1>
                <p>Home/{name}</p>
            </div>
        </div>
    )
}
