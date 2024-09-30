import React, { useEffect, useState } from 'react'
import { faqs } from '../../../assets/Data/Data'
import { FaAngleDown } from "react-icons/fa6";


export default function FAQs() {

    const [faqsOpen, setfaqsOpen] = useState(false);
    const [faqid, setfaqid] = useState(null);

useEffect(()=>{
    console.log(faqid);
},[faqid])


    return (
        <div className='flex justify-center mb-16'>
            <div className='w-[80%] flex flex-col gap-8'>
                {
                    faqs.map((data, i) => {
                        return (
                            <div key={i} className='flex flex-col gap-2 border-[1px] rounded-xl' onClick={()=>setfaqsOpen(prev => !prev )}>
                                <div className= {`flex justify-between w-full border-[1px] border-primary px-3 py-5 items-center duration-300 rounded-lg cursor-pointer ${i === faqid ? 'bg-primary text-white' : 'text-primary bg-white'}`} onClick={()=>setfaqid(prev => prev===i ? null : i)}>
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
