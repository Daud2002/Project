import React from 'react'
import ceo from '../../../assets/Images/ceo.jpeg'
import { FaLinkedin } from "react-icons/fa";
import './OurTeam.css'
import cto from '../../../assets/Images/CTO.jpeg'

export default function Ceodetails() {
  return (
    <div className='flex flex-col gap-20 m-8'>
      <div className='flex md:flex-row flex-col items-center'>
        <div className='md:w-[50%] w-full px-4 flex justify-center'>
          <img src={ceo} alt="" className='rounded-lg max-w-[25rem]' />
        </div>
        <div className='md:w-[50%] w-full flex flex-col items-center md:items-start p-10'>
          <div className='flex flex-row justify-between w-full'>
            <div>
              <h1 className='font-bold text-[2rem] mt-5'>Siddique Shahzad</h1>
              <h5 className='text-primary text-[0.8rem] font-medium'>Co founder & CEO</h5>
            </div>

            <div className='flex flex-row gap-8 ml-2 my-8'>
              <a href='https://www.linkedin.com/in/sshahzad/' target='_blank' className='hover:scale-110 duration-300 text-blue-600 hover:text-blue-600'>
                <FaLinkedin className='w-8 h-8' />
              </a>
            </div>
          </div>

          <p className='text-justify text-[0.9rem]'>
            At Ahmasoft, I believe that every successful project begins with a clear vision, a collaborative team, and a deep commitment to innovation. As the CEO, my focus is on building strong partnerships with our clients by delivering high-quality results that not only meet expectations but exceed them.
            <br />
            My journey in tech and entrepreneurship has always been driven by a passion for problem-solving and helping businesses thrive in the digital age. With each project, I aim to foster a culture of creativity and forward-thinking, ensuring that our solutions are tailored, scalable, and built for long-term success.
            <br />
            What sets Ahmasoft apart is our dedication to continuous growth, both for our clients and our team. I’m proud of the diverse, talented individuals we’ve brought together to make this vision a reality. Together, we are shaping the future, one project at a time.</p>
        </div>
      </div>
      <div className='flex md:flex-row-reverse flex-col items-center'>
        <div className='md:w-[50%] w-full px-4 flex justify-center'>
          <img src={cto} alt="" className='rounded-lg max-w-[25rem]' />
        </div>
        <div className='md:w-[50%] w-full flex flex-col items-center md:items-start p-10'>
          <div className='flex flex-row justify-between w-full'>
            <div>
              <h1 className='font-bold text-[2rem] mt-5'>Ahmad Shayan</h1>
              <h5 className='text-primary text-[0.8rem] font-medium'>CTO</h5>
            </div>

            <div className='flex flex-row gap-8 ml-2 my-8'>
              <a href='https://www.linkedin.com/in/sshahzad/' target='_blank' className='hover:scale-110 duration-300 text-blue-600 hover:text-blue-600'>
                <FaLinkedin className='w-8 h-8' />
              </a>
            </div>
          </div>

          <p className='text-justify text-[0.9rem]'>
            At Ahmasoft, I believe that every successful project begins with a clear vision, a collaborative team, and a deep commitment to innovation. As the CEO, my focus is on building strong partnerships with our clients by delivering high-quality results that not only meet expectations but exceed them.
            <br />
            My journey in tech and entrepreneurship has always been driven by a passion for problem-solving and helping businesses thrive in the digital age. With each project, I aim to foster a culture of creativity and forward-thinking, ensuring that our solutions are tailored, scalable, and built for long-term success.
            <br />
            What sets Ahmasoft apart is our dedication to continuous growth, both for our clients and our team. I’m proud of the diverse, talented individuals we’ve brought together to make this vision a reality. Together, we are shaping the future, one project at a time.</p>
        </div>
      </div>
    </div>
  )
}
