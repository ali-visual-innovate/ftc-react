import React from "react";
import icon2 from "../images/icon2.png";
import "./mtrading.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import torch1 from '../images/torch1.png'
import torch2 from '../images/torch2.png'
import torch3 from '../images/torch3.png'
import torch4 from '../images/torch4.png'
import torch5 from '../images/torch5.png'
import torch6 from '../images/torch6.png'
import torch7 from '../images/torch7.png'


const MTrading = () => {
  return (
    <>
      <div className="container">
        <div className="mep-trading">
          
          <div className="icon2">
            <img src={icon2} alt="" />
          </div>
          <div className="mep-trading-col">
            <h1>MEP Trading</h1>
            <p>
              We are Sole agent for big brands in LED light fixtures, and agent
              for many products such as firefighting products, LED light,
              Valves, and others.
            </p>
          </div>
        </div>
        <div className="mep-trading-slider">
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={torch1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={torch2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={torch3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={torch4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={torch5} alt="" /></SwiperSlide>
      <SwiperSlide><img src={torch6} alt="" /></SwiperSlide>
      <SwiperSlide><img src={torch7} alt="" /></SwiperSlide>

    </Swiper>
        </div>
      </div>
    </>
  );
};

export default MTrading;
