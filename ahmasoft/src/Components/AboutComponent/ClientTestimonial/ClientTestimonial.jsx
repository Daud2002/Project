import React from 'react'
import aboutbg from '../../../assets/Images/aboutpage-bg.png'
import person1 from '../../../assets/Images/aboutpage-person-1.png'
import person2 from '../../../assets/Images/aboutpage-person-2.png'
import person3 from '../../../assets/Images/aboutpage-person-3.png'
import Slider from "react-slick";
import { testimonial } from '../../../assets/Data/Data'
import { LiaStarSolid } from "react-icons/lia";



export default function ClientTestimonial() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false
  };


  return (
    <div className='h-[100vh] bg-[#f4f2f9] flex lg:flex-row flex-col w-full'>
      <div className='lg:w-[50%] flex flex-col md:px-8 px-4 justify-center'>
        <h5 className='text-primary flex items-center justify-center lg:justify-start gap-2'>
          <hr className='w-6 h-0.5 bg-primary rounded-3xl md:text-left' />
         <span>Client Testimonials</span> 
        </h5>
        <h1 className='font-bold md:text-[2.5rem] text-[1.8rem] text-center lg:text-left'>Check What They’re Talking About</h1>
        <Slider {...settings} className='!flex'>
          {
            testimonial.map((items, i) => {
              return (
                <div className='p-10 w-full flex flex-col' key={i}>
                  <div className='flex flex-row items-center mb-6 gap-10'>
                    <img src={items.img} alt="" className='border-[3px] border-primary rounded-full p-2 w-32' />
                    <div>
                      <h1 className='font-bold text-[1.5rem]'>{items.name}</h1>
                      <div className='flex flex-row gap-3'>
                      {
                        Array.from({ length: items.stars }).map((_, i) => { return <LiaStarSolid key={i} className='text-[#ffd700]'/> })
                      }
                      </div>
                    </div>
                  </div>
                  <p className='text-justify'>{items.testimonial}</p>
                </div>
              )
            })
          }
        </Slider>
      </div>


      <div className='w-[50%] relative lg:block hidden'>
        <img src={aboutbg} alt="" className='absolute top-0 right-0' />
        <img src={person1} alt="" className='absolute bottom-5 right-0' />
        <img src={person2} alt="" className='absolute top-10 right-10 z-10' />
        <img src={person3} alt="" className='absolute top-20 right-20 z-0' />
      </div>
    </div>
  )
}
