import React from 'react';
import { projects } from '../../../assets/Data/Data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './CompletedProjects.css'
import { useNavigate } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa";

// Custom Arrow components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        borderRadius: '50%'
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        borderRadius: '50%'
      }}
      onClick={onClick}
    />
  );
};

export default function CompletedProjects() {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />, // Use custom arrows
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();
  
  function onClickHandler(id) {
    navigate(`/projects/${id}`);
  }

  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="bg-[#1d1729] flex flex-col gap-3 items-center justify-center py-14 rounded-2xl mx-6 w-[95%]">
        <h5 className="text-primary flex items-center gap-2 text-[0.8rem]">
          <hr className="w-6 h-0.5 bg-primary rounded-2xl" /> Completed Projects
        </h5>
        <h1 className="text-white font-bold flex flex-col text-center text-[1.2rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.4rem]">
          <span>Completed Projects</span>
          <span>Lasting Impact</span>
        </h1>
      </div>
      <div className="flex flex-col my-16 w-[90%]">
        <Slider {...settings}>
          {projects.filter(projects => projects.completed === true).map((items, i) => (
            <div key={i} className='border-[1.5px] border-[#d0d0d0] p-8 rounded-lg cursor-default hover:border-primary duration-300 hover:scale-100 scale-95'>
              <h1 className='text-[1.2rem] font-medium'>{items.heading}</h1>
              <p className='mt-2'>{items.title}</p>
              <button  className='border-[1.5px] border-[#d0d0d0] rounded-md p-3 mt-8 flex flex-row gap-5 items-center hover:bg-primary hover:text-white hover:border-none group' onClick={() => onClickHandler(items.id)}><span>Explore Project</span> <FaArrowUp className=' group-hover:rotate-90 duration-300' /></button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
