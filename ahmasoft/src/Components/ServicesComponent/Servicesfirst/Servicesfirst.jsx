import React from 'react'
import carescrap from '../../../assets/Images/care_scraping.png'
import { serviesfirstappearancedata } from '../../../assets/Data/Data'

export default function Servicesfirst({ page }) {

    const servicedata = serviesfirstappearancedata.filter(data => data.tag === page);
    
    return (
        <div className='flex lg:flex-row flex-col gap-4 my-16'>
            <div className='lg:w-[50%] w-full p-4'>
                <img src={servicedata[0].landingserviceimg} alt='Data Scraping' className='rounded-lg' />
            </div>
            <div className='lg:w-[50%] w-full md:px-8 px-4'>
                <h5 className='flex flex-row items-center gap-2 text-primary'><hr className='w-4 h-0.5 bg-primary' />Company Benefits</h5>
                <h1 className='font-bold text-[2rem] mt-2'>{servicedata[0].title}</h1>
                <p className='text-justify'>{servicedata[0].intro}</p>
                <div className='flex flex-row items-center gap-6 pr-6 mt-8'>
                    <img src={servicedata[0].firstapperancesmalllogo} alt="" className='w-16 h-16 bg-blue-50 rounded-full p-2' />
                    <h3 className='font-semibold md:text-[1.2rem] text-center md:text-left'>Stop worrying, we take care of your technology problems</h3>
                </div>
            </div>
        </div>
    )
}
