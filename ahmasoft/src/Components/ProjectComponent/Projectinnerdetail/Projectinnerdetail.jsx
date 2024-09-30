import React from 'react';
import '../../../Pages/Projects/Projects.css';
import { IoCloseSharp } from "react-icons/io5";
import { projects } from '../../../assets/Data/Data';

export default function Projectinnerdetail({ detailstatus, setdetailstatus, dataid }) {

    const detailed_data = projects.find(x => x.id === dataid);

    return (
        <div className={`bg-[#140e27] outerdetailcontainer h-[100vh] w-full duration-1000 fixed z-50 top-0 flex justify-center ${detailstatus ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
            <div className='m-16 overflow-hidden overflow-y-scroll bg-[#37304e] max-w-[60vw] max-h-[90vh] flex flex-col items-center p-10 detail_container relative'>
                {detailed_data ? (
                    <>
                        <img src={detailed_data.img} alt="" className='my-6 rounded-xl max-w-[50vw] shadow-lg w-full h-[50vh]' />
                        <h1 className='text-white text-justify'>{detailed_data.para}</h1>
                    </>
                ) : (
                    <h1 className='text-white text-justify'>No project details available</h1>
                )}
                <IoCloseSharp className='text-white w-8 h-8 fixed right-7 top-5 cursor-pointer' onClick={() => setdetailstatus(false)} />
            </div>
        </div>
    )
}
