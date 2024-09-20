import React, { useEffect, useState } from 'react'
import PageDetail from '../../Components/Fixcomponents/PageDetail/PageDetail'
import { projects } from '../../assets/Data/Data'
import { IoMdLink } from "react-icons/io";
import './Projects.css'
import ProjectDetails from './ProjectDetails';
import { useNavigate } from 'react-router-dom';


export default function Projects() {

  const navigate = useNavigate();

  function onClickHandler(id) {
    navigate(`/projects/${id}`);
  }


  return (
    <div>
      <PageDetail name={'Projects'} />
      <div className='flex flex-row justify-around'>
        {
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
        }
      </div>
    </div>
  )
}
