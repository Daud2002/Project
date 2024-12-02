import React from 'react'
import { serviesfirstappearancedata } from '../../../assets/Data/Data'
import headingbefore from '../../../assets/Images/headingbefore.png'
import './Whatweoffer.css'

export default function Whatweoffer({ page }) {

    const offerdata = serviesfirstappearancedata.filter(data => data.tag === page);

    return (
        <>
            <div className='flex flex-row items-center gap-2 pl-8'>
                <img src={headingbefore} alt="" className='w-5' />
                <span className='font-semibold text-[1.8rem] text-[#636363]'>What we offers</span>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-12 p-8'>
                {
                    offerdata[0].whatweoffer.map((offers, i) => {
                        return (
                            <div key={i}>
                                <div className='border-[2px] p-5 flex flex-col gap-4 rounded-lg shadow_boxes hover:border-primary hover:scale-105 duration-300 hover:cursor-default'>
                                    {offers.logo}
                                    <h1 className=' font-medium'>{offers.heading}</h1>
                                    <p className='text-justify text-[0.8rem]'>{offers.detail}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
