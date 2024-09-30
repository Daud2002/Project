import React from 'react'
import whyusright from '../../../assets/Images/whychooseus.jpeg'
import signature from '../../../assets/Images/signature.png'
import { whyourservices } from '../../../assets/Data/Data'

export default function Whyourservice({page}) {

    const whyusdata = whyourservices.filter(data => data.tag === page);




  return (
  
    <div className='scrap_bg flex lg:flex-row flex-col items-center py-8 px-3 m-8 rounded-3xl text-center'>
    <div className=' text-white md:p-6 p-2 lg:w-[50%] w-full'>
      <h3 className='text-white flex flex-row justify-center md:justify-start items-center gap-2'><hr className='w-4 h-0.5 bg-white rounded-lg' />{whyusdata[0].title}</h3>
      <h1 className='md:text-[2.5rem] text-[1.5rem] font-bold md:text-left text-center'>Why you Should Choose Our Services</h1>
      <div className='flex lg:flex-row flex-col items-start justify-between my-8'>
        <p className='text-[#ededed] text-justify lg:w-[50%] w-full text-[0.8rem] '>{whyusdata[0].description}
          <img src={signature} alt="" className='text-white' />
        </p>
        <div className='flex flex-col gap-2 items-start'>
          {whyusdata[0].serviceDetails.map((offerings, i) => { return (<li className='text-[#ededed] text-[0.8rem]' key={i}>{offerings}</li>) })}
        </div>
      </div>
    </div>
    <div className='lg:w-[50%] w-full px-12'>
      <img src={whyusright} alt="" className='rounded-xl hidden lg:block' />
    </div>
  </div>
  )
}
