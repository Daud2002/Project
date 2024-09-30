import React from 'react'
import projectlanding from '../../assets/Images/Project.jpg'
export default function Projectlandingcomponent() {
    return (
        <div className='flex lg:flex-row flex-col'>
            <div className='lg:w-[50%] w-full md:p-16 p-4'>
                <img src={projectlanding} alt="" className='rounded-xl' />
            </div>
            <div className='lg:p-16 p-4 lg:w-[50%] w-full'>
                <h5 className='text-primary flex items-center gap-2'><hr className='w-4 h-0.5 bg-primary' />Our Projects</h5>
                <h1 className='font-bold text-[1.4rem] 2xl:text-[2rem] lg:text-[1.5rem]'>Innovative Solutions in Web Scraping, Automation & Data Visualization</h1>
                <p className='text-justify text-[0.9rem] lg:text-[1rem] 2xl:text-[1.4rem] mt-4'>At Ahmasoft, we specialize in delivering cutting-edge solutions that drive efficiency and insights. Our expertise in data visualization transforms raw data into interactive, insightful dashboards, enabling smarter decision-making. We build automation systems that streamline operations, reduce manual efforts, and enhance productivity by integrating APIs and automating workflows. Additionally, our web scraping services provide accurate, structured data from diverse sources, empowering businesses with actionable information for analysis and strategic growth.</p>
            </div>
        </div>
    )
}
