import React from 'react';
import { serviesfirstappearancedata } from '../../../assets/Data/Data';
import './Industryserve.css';
import headbefore from '../../../assets/Images/headingbefore.png';

export default function Industryserve({ page }) {
    const industrydata = serviesfirstappearancedata.filter(data => data.tag === page)[0].industries;

    return (
        <div className='flex justify-center my-20'>
            <div className="w-[90%] flex flex-col gap-8">
                <div className='flex flex-row gap-3 items-center'>
                    <img src={headbefore} alt="" className='w-5' />
                    <h1 className='text-[2rem] font-medium text-[#434343]'>Industries We Served</h1>
                </div>
                <div>
                    <div className='flex flex-row flex-wrap gap-4 cursor-default'>
                        {industrydata.map((items, i) => {
                            return (
                                <div key={i} className='lg:w-[49%] w-full border-[1px] p-5 flex flex-row items-center gap-5 rounded-md faqborder hover:border-primary hover:scale-105 duration-200'>
                                    {items.logo}
                                    <div>
                                        <h1 className='font-semibold text-[#434343]'>{items.industry}</h1>
                                        <h5 className='text-[0.9rem] opacity-50'>{items.detail}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
