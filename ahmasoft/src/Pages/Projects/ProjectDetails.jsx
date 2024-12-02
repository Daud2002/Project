import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../../assets/Data/Data';
import PageDetail from '../../Components/Fixcomponents/PageDetail/PageDetail';
import { motion } from 'framer-motion'

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    return (
        <div className='mb-24 flex flex-col gap-16'>
            <PageDetail name={'Project Details'} page={`Project/${project.tag}`} /> 
            <div className='flex flex-col items-center gap-12'>
                {/* <div className='flex flex-col items-center gap-10 w-[90%]'>
                    <img src={project.img} alt={project.description} className='rounded-md max-w-[50rem] max-h-[30rem]' />
                </div> */}
                <div className='flex flex-row  pr-12 gap-8 w-[90%]'>
                    <div className='flex flex-col gap-2 w-[80%]'>
                    <h1 className='font-bold text-[2rem] text-primary'>{project.heading}</h1>
                        <p className='text-justify'>{project.para}</p>
                    </div>
                    <div className='w-[20%]'>
                        <h1 className='text-primary font-bold mb-6 text-[1.5rem]'>Tools</h1>
                        <ul className='flex flex-col gap-4'>
                            {project.technologies.map((technologies,index)=>{
                                return(
                                    <li key={index}>{technologies}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
