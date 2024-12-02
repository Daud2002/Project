import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { serviesfirstappearancedata } from '../../../assets/Data/Data';
import headbefore from '../../../assets/Images/headingbefore.png'
import '../../../Components/Home/FAQs/FAQs.css'

export default function ServicesFAQs({ service }) {
    const [faqid, setfaqid] = useState(null);

    const faqdata = serviesfirstappearancedata.filter(data => data.tag === service)[0].faqs;

    return (
        <div className='flex flex-col items-center my-16 gap-16'>
            <div className='w-[95%] flex flex-col gap-6'>
                <h1 className='font-bold text-[2rem] flex flex-row items-center gap-4'><span><img alt="" src={headbefore} className='w-4 h-6' /></span>Frequently Asked Questions ( FAQs )</h1>
                {
                    faqdata.map((data, i) => {
                        return (
                            <div key={i} className='flex flex-col gap-2 faqborder '>
                                <div className={`flex justify-between w-full  px-3 py-4 items-center duration-300 rounded-sm cursor-pointer ${i === faqid ? 'bg-primary text-white' : 'text-black bg-white'}`} onClick={() => setfaqid(prev => prev === i ? null : i)}>
                                    <h1>{data.question}</h1>
                                    {i === faqid ? <FaAngleDown className=' rotate-0 duration-500' /> : <FaAngleDown className='duration-500 rotate-180' />}
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
