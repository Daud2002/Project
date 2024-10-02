import React, { useEffect,useState } from 'react'
import { projects } from '../../../assets/Data/Data'
import './ProjectDetails.css'
import Projectinnerdetail from '../Projectinnerdetail/Projectinnerdetail';
import { useNavigate } from 'react-router-dom';

export default function ProjectDetails({ filter }) {

    let filtered = projects.filter(p => p.tag === filter);
    const [detailstatus, setdetailstatus] = useState();
    const [dataid,setdataid] = useState();

    const navigate = useNavigate();

    function onClickHandler(id) {
      navigate(`/projects/${id}`);
      setdetailstatus(true);
      setdataid(id);
    }

    return (
        <>
            <div>
                {
                    filter === 'All' ?
                        <div className='grid lg:grid-cols-3 grid-cols-1'>
                            {projects.map((items, i) => {
                                return (
                                    <div className='flex flex-col md:p-8 p-3' key={i}>
                                        <div className='overflow-hidden container-img rounded-xl relative text-center w-full flex justify-center group cursor-pointer' onClick={()=>onClickHandler(items.id)}>
                                            <img src={items.img} alt="" className='w-full box-border group-hover:scale-125 hover:rounded-xl rounded-xl duration-700' />
                                            <h1 className='bg-primary w-[80%] text-white font-semibold px-8 absolute bottom-0 py-3 z-10 rounded-xl opacity-0 group-hover:opacity-100 group-hover:bottom-4 duration-200'>{items.title}</h1>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div className='grid lg:grid-cols-3 grid-cols-1'>{
                            filtered.map((items, i) => {
                                return (
                                    <div className='flex flex-col md:p-8 p-3' key={i}>
                                        <div className='overflow-hidden container-img rounded-xl relative text-center flex justify-center items-center w-full group cursor-pointer' onClick={()=>onClickHandler(items.id)}>
                                            <img src={items.img} alt="" className='w-full box-border group-hover:scale-125 hover:rounded-xl rounded-xl duration-700' />
                                            <h1 className='bg-primary w-[80%] text-white font-semibold px-8 absolute bottom-0 py-3 z-10 rounded-xl opacity-0 group-hover:opacity-100 group-hover:bottom-4 duration-200'>{items.title}</h1>
                                        </div>
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
