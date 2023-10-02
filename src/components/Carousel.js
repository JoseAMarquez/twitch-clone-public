import '../App.css';

import React, { useState } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Carousel = ({ streams }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className='text-white
      text-2xl absolute cursor-pointer z-10 right-0 -mt-[10%] 
      '
        onClick={onClick}
      >
        <IoIosArrowForward />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className=' ml-0 mt-[10%] text-white text-2xl absolute cursor-pointer z-10'
        onClick={onClick}
      >
        <IoIosArrowBack />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className=' max-w-full max-h-[350px] pt-5 '>
      <Slider {...settings}>
        {streams.map((stream, idx) => (
          <div
            key={idx}
            className={
              idx === imageIndex
                ? 'transform ease-in duration-300 '
                : 'scale-50 transform ease-out duration-300 opacity-50 '
            }
          >
            <div className='flex flex-row '>
              <img
                className={
                  idx === imageIndex
                    ? 'opacity-100 object-contain'
                    : 'opacity-50 object-contain '
                }
                src={
                  idx === imageIndex
                    ? stream.thumbnail_url
                        .replace(/{width}/g, '530')
                        .replace(/{height}/g, '300')
                    : stream.thumbnail_url
                        .replace(/{width}/g, '650')
                        .replace(/{height}/g, '260')
                }
                alt=''
              />
              <div
                className={
                  idx === imageIndex
                    ? 'flex flex-col bg-[#18181b] min-w-[200px] pl-3 pt-3'
                    : 'hidden '
                }
              >
                <p className='text-purple-400 '>{stream.user_name}</p>
                <p className='text-purple-400 '>{stream.game_name}</p>
                <p className='text-white'>{stream.viewer_count} Viewers</p>
                <div className='space-x-2 '>
                  {stream.tags?.slice(0, 2).map((tag, index) => {
                    return (
                      <p
                        key={index}
                        className='inline-flex text-[#9c9ca6] bg-[#2f2f35] rounded-full px-2'
                      >
                        {tag}
                      </p>
                    );
                  })}
                </div>
                <p className='text-white'>{stream.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
