import React from 'react'
import { Link } from 'react-router-dom'

export default function BestSolutions() {
    return (
        <div className='flex justify-center'>
            <div className='absolute -bottom-10 bg-primary w-[80%] text-center flex flex-row justify-around items-center py-8'>
                <h5 className='text-white font-semibold'>Unlock the full potential of your data. Let us handle the heavy lifting.</h5>
                <Link to={'/about'} className='bg-white px-8 py-4 rounded-sm text-primary'>Learn More</Link>
            </div>
        </div>
    )
}
