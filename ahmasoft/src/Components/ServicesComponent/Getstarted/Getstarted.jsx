import React from 'react'
import { serviesfirstappearancedata } from '../../../assets/Data/Data'
import './Getstarted.css'
export default function Getstarted({ page }) {

    const getstarted = serviesfirstappearancedata.filter(data => data.tag === page)[0].getstarted;

    return (
        <div className='flex justify-center'>
            <div className='w-[90%] p-4 bg-slate-400 rounded-lg text-white startedbg'>
                {getstarted.map((items,i)=>{
                    return(
                        <div>
                            <h1 className='text-[2rem] font-semibold'>{items.question}</h1>
                            <p className='text-white opacity-85'>{items.answer}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
