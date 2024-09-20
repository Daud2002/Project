import React from 'react'
import { completed_projects } from '../../../assets/Data/Data'

export default function CompletedProjects() {
  return (
    <div className='my-20'>
      <div className='w-full md:h-[50vh] bg-[#1d1729] flex flex-col items-center justify-center md:relative'>
        <h5 className='text-primary'>-- Completed Projects</h5>
        <h1 className='text-white font-bold flex flex-col text-center text-[2.2rem]'><span>Improved & Enhanced</span><span>Tech Projects</span></h1>
        <div className='flex md:flex-row flex-col md:justify-around md:absolute md:-bottom-72'>
          {
            completed_projects.slice(2).map((items, i) => {
              return (
                <div className='flex flex-col md:w-[30%] w-[90%] gap-3'>
                  <img src={items.img} alt="" className='w-[25rem] h-[20rem] rounded' />
                  <h1 className='text-primary font-bold text-[1.1rem]'>{items.title}</h1>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
