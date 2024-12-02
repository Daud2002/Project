import React from 'react'
import { serviesfirstappearancedata } from '../../../assets/Data/Data'
import toolsimg from '../../../assets/Images/tech.jpeg'
export default function Toolstech({ tools }) {


  const tools_data = serviesfirstappearancedata.filter(data => data.tag === tools)[0];

  return (
    <div className='flex md:flex-row flex-col items-center justify-center my-10'>

      <div className='w-[49%] flex justify-center'>
        <img src={toolsimg} alt="" className='max-w-[30rem] min-w-64 rounded-xl' />
      </div>
      <div className='md:w-[49%] w-full items-center flex flex-col gap-5'>
        <h1 className='font-semibold text-[2.5rem] text-center'>Technologies we use</h1>
        <ul>{tools_data.tools.map((items,i) => <li className='list-disc ml-5 text-[#888888]' key={i}>{items}</li>)}</ul>

      </div>

    </div>
  )
}
