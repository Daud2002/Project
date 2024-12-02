import React, { useEffect, useState } from 'react'
import { faqs } from '../../../assets/Data/Data'
import { FaAngleDown } from "react-icons/fa6";
import headbefore from '../../../assets/Images/heading_before_img.jpg'
import './FAQs.css'


export default function FAQs() {
    const [faqid, setfaqid] = useState(null);



    return (
        <div className='flex flex-col items-center my-16 gap-16'>
            <div className='w-[95%] flex flex-col gap-6'>
            <h1 className='font-bold md:text-[2rem] text-[1.5rem] flex flex-row items-center gap-4'><span><img src={headbefore} alt="" className='w-4 h-6'/></span>Frequently Asked Questions ( FAQs )</h1>
                {
                    faqs.map((data, i) => {
                        return (
                            <div key={i} className='flex flex-col gap-2 faqborder'>
                                <div className= {`flex justify-between w-full  px-3 py-4 items-center duration-300 rounded-sm cursor-pointer ${i === faqid ? 'bg-primary text-white' : 'text-black bg-white'}`} onClick={()=>setfaqid(prev => prev===i ? null : i)}>
                                    <h1>{data.question}</h1>
                                   {i === faqid ? <FaAngleDown className=' rotate-0 duration-500'/> : <FaAngleDown className='duration-500 rotate-180'/>} 
                                </div>
                                <div className={`rounded-md relative duration-1000 ease-in-out p-3 ${i === faqid ? 'bottom-0 opacity-100 block' : 'bottom-20 opacity-0 hidden'}`}>
                                    <p className='text-justify text-[#a8a7a7]'>{data.answer}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
