"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function AdditionalItems() {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center justify-center gap-4">
                <img src="https://i.ibb.co/r2KQymGm/cat-white-11.jpg" alt="item1" />
                <h2>item 1</h2>
            </div>
        </SwiperSlide>
       
       
      </Swiper>
    </>
  );
}