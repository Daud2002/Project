import React from 'react'
import pagedetailbg from '../../../assets/Images/content-page.png'
import pagedetailbgright from '../../../assets/Images/content-page-rightside.png'
import { FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import './PageDetail.css'

export default function PageDetail({ name, page, quote }) {
    return (
        <>
            <div className='detailbg flex md:flex-row flex-col-reverse justify-center md:justify-between gap-12 items-center px-12'>
                {/* <div className='flex gap-6 md:flex-col flex-row'>
                    <a href="https://www.linkedin.com/in/ehmadshayan"><FaLinkedin className='w-8 h-8 text-primary hover:scale-110 duration-200' /></a>
                    <a href="https://www.youtube.com/watch?v=ba3yg2egZF4"><FaYoutube className='w-8 h-8 text-primary hover:scale-110 duration-200' /></a>
                    <a href="https://www.facebook.com/A.shayaan"><FaSquareFacebook className='w-8 h-8 text-primary hover:scale-110 duration-200' /></a>
                    <a href="https://www.instagram.com/ahmadshayan.official"><FaInstagram className='w-8 h-8 text-primary hover:scale-110 duration-200' /></a>
                </div> */}
                <div className='invisible'>hi</div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-semibold text-white text-[2.5rem]'>{name}</h1>
                    <p className='flex gap-2 text-center md:text-[#a8a7a7] text-white'><span>{page}</span><span>{quote}</span></p>
                </div>
                <div className='invisible'>
                   HI 
                </div>
            </div>
        </>
    )
}
