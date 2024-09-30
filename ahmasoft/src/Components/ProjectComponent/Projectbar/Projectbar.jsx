import React, { useEffect } from 'react'
import { project_bar, projects } from '../../../assets/Data/Data'
import { useState } from 'react'
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './Projectbar.css'
import { motion } from 'framer-motion'

export default function Projectbar() {

    const [filterbar, setfilterbar] = useState('All');




    return (
        <div>
            <nav className='flex flex-row gap-6 justify-center w-full mt-8 overflow-x-auto scrollbar pl-20 overflow-y-hidden'>
                <li value= 'All' className= {`list-none cursor-pointer text-[1.1rem] ${filterbar === 'All' ? 'activebar' : 'hover:text-primary'}`} onClick={()=>setfilterbar('All')}>All</li>
                <div className='flex flex-row gap-6'>{
                    project_bar.map((items,i)=>{
                        return(
                            <li key={i} className={`list-none text-[1.1rem] cursor-pointer ${filterbar === items ? 'activebar' : 'hover:text-primary'}`} onClick={()=>setfilterbar(items)}>{items}</li>
                        )
                    })}</div>
            </nav>
            <motion.div 
            initial={{scale : 0}}
            whileInView={{scale : 1}}
            transition={{duration : 1}}
            >
            <ProjectDetails filter={filterbar}/>
            </motion.div>
        </div>
    )
}
