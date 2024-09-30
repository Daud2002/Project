import React, { useEffect, useState } from 'react'
import PageDetail from '../../Components/Fixcomponents/PageDetail/PageDetail'
import { projects } from '../../assets/Data/Data'
import { IoMdLink } from "react-icons/io";
import './Projects.css'
import ProjectDetails from './ProjectDetails';
import { useNavigate } from 'react-router-dom';
import Projectbar from '../../Components/ProjectComponent/Projectbar/Projectbar';
import automation from '../../assets/Images/automation.jpeg'
import Projectlandingcomponent from '../../Components/ProjectLandingComponent/Projectlandingcomponent';


export default function Projects() {

  const navigate = useNavigate();

  function onClickHandler(id) {
    navigate(`/projects/${id}`);
  }


  return (
    <div className='relative'>
      <PageDetail name={'Projects'} quote={'Success Stories & Innovative Projects'} />
      <Projectlandingcomponent />
      <Projectbar />
      {/* {
          projects.map((items, i) => {
            return (
              <div className='image-container cursor-pointer' onClick={() => onClickHandler(items.id)} key={items.id}>
                <img src={items.img} alt="" className='w-[20rem] h-[20rem]' />
                <IoMdLink className=' absolute top-24 left-28 w-20 h-20 text-white hidden linkicon' />
                <h1 className='absolute bottom-10 font-bold pl-4 text-white'>{items.title}</h1>
                <h5 className='absolute bottom-5 pl-4 text-white'>{items.description}</h5>
              </div>
            )
          })
        } */}
      <div className='flex justify-center my-16'>
        <div className='project_quote text-white font-semibold text-[1rem] md:text-[1.5rem] flex justify-center text-center px-3 py-16 rounded-2xl w-[90%]'>
          Transforming Client Visions Into Engaging Digital Experiences
        </div>
      </div>
    </div>
  )
}
