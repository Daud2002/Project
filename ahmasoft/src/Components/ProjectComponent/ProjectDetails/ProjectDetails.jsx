import React, { useEffect,useState } from 'react'
import { projects } from '../../../assets/Data/Data'
import './ProjectDetails.css'
import Projectinnerdetail from '../Projectinnerdetail/Projectinnerdetail';
import { useNavigate } from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";
import { FaArrowUp } from "react-icons/fa";



export default function ProjectDetails({ filter }) {

    let filtered = projects.filter(p => p.tag === filter);


    const navigate = useNavigate();

    function onClickHandler(id) {
      navigate(`/projects/${id}`);
    }

    return (
        <>
            <div className='mt-20'>
                {
                    filter === 'All' ?
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mx-[3rem]'>
                            {projects.map((items, i) => {
                                return (
                                    <div key={i} className='border-[1.5px] border-[#d0d0d0] p-8 rounded-lg cursor-default boxesshadow hover:border-primary duration-300 hover:scale-105'>
                                       <h1 className='text-[1.2rem] font-medium'>{items.heading}</h1>
                                       <p className='mt-2'>{items.title}</p>
                                       <button className='border-[1.5px] border-[#d0d0d0] rounded-md p-3 mt-8 flex flex-row gap-5 items-center hover:bg-primary hover:text-white hover:border-none group' onClick={()=>onClickHandler(items.id)}><span>Explore Project</span> <FaArrowUp className=' group-hover:rotate-90 duration-300'/></button>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div className='grid lg:grid-cols-2 grid-cols-1 mx-[3rem]'>{
                            filtered.map((items, i) => {
                                return (
                                    <div key={i} className='border-[1.5px] border-[#d0d0d0] p-8 rounded-lg cursor-default boxesshadow hover:border-primary duration-300 hover:scale-105'>
                                       <h1 className='text-[1.2rem] font-medium'>{items.heading}</h1>
                                       <p className='mt-2'>{items.title}</p>
                                       <button className='border-[1.5px] border-[#d0d0d0] rounded-md p-3 mt-8 flex flex-row gap-5 items-center hover:bg-primary hover:text-white hover:border-none group' onClick={()=>onClickHandler(items.id)}><span>Explore Project</span> <FaArrowUp className=' group-hover:rotate-90 duration-300'/></button>
                                    </div>
                                )
                            })
                        }
                        </div>
                }
            </div>
            {/* <Projectinnerdetail detailstatus = {detailstatus} setdetailstatus={setdetailstatus} dataid={dataid}/> */}
        </>
    )
}
