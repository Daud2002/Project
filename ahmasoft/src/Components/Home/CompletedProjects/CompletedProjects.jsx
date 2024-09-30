import React from 'react';
import { completed_projects } from '../../../assets/Data/Data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './CompletedProjects.css'

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
          {completed_projects.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center text-center gap-3 p-4 outline-none"
            >
              <img
                src={item.img}
                alt={`Completed project ${item.title}`}
                className="rounded-lg w-full h-[50vh]"
              />
              <h1 className="font-bold text-[1.1rem]">{item.title}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
