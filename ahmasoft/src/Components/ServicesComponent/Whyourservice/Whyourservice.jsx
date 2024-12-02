import React from 'react'
import './Whyourservice.css'
import signature from '../../../assets/Images/signature.png'
import { serviesfirstappearancedata } from '../../../assets/Data/Data'

export default function Whyourservice({ page }) {

  const whyusdata = serviesfirstappearancedata.filter(data => data.tag === page);

  return (

    <div className='startedbg flex lg:flex-row flex-col justify-between lg:items-center items-start p-3 m-8 rounded-3xl h-full'>
      <div className=' text-white md:p-6 p-2 lg:w-[50%] w-full'>
        <h3 className='text-white flex flex-row justify-center md:justify-start items-center gap-2'><hr className='w-4 h-0.5 bg-white rounded-lg' />{whyusdata[0].title}</h3>
        <h1 className='md:text-[2.5rem] text-[1.5rem] font-bold md:text-left text-center'>Why you Should Choose Our Services</h1>
        <div className='flex lg:flex-row flex-col items-start justify-between my-8'>
          <p className='text-[#ededed] lg:text-justify text-start lg:w-[50%] w-full text-[0.8rem] '>{whyusdata[0].whyusdes}
            <img src={signature} alt="" className='text-white lg:block hidden' />
          </p>
        </div>
      </div>
      <div className='flex lg:justify-center justify-start gap-2 lg:w-[50%] w-full'>
        <ol className='flex flex-col items-start justify-start gap-5'>
          {whyusdata[0].whychooseus.map((offerings, i) => {
            return (
              <div className='text-[#ededed] flex flex-col' key={i}>
                <div className='font-medium text-left text-[1.1rem]'>{offerings.heading}</div>
                <div className='font-light text-[#dddddd]'>{offerings.detail}</div>
              </div>
            )
          })}
        </ol>
      </div>
      <img src={signature} alt="" className='text-white lg:hidden block' />
    </div>
  )
}
