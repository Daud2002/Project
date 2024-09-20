import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../../assets/Data/Data';
import PageDetail from '../../Components/Fixcomponents/PageDetail/PageDetail';

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    return (
        <div className='mb-24'>
            <PageDetail name={'Project Details'} page={'Project'} />
            <div className='flex flex-row'>
                <div className='w-[50%] flex justify-center'>
                    <img src={project.img} alt="" className='w-[30rem] rounded-md' />
                </div>
                <div className='w-[50%] flex flex-col pr-12 gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-[1.5rem] text-justify'>{project.heading}</h1>
                        <h3 className=' text-[#868585]'>{project.description}</h3>
                    </div>
                    <p className='text-justify'>{project.para}</p>
                </div>
            </div>
        </div>
    )
}
