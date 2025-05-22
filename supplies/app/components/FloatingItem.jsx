"use client"
import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
const FloatingItem = ({imgUrl,bgUrl}) => {
  
 const imgSrc = imgUrl;
  return (
    <div
      className="hero bg-cover bg-center h-full rounded-lg"
      style={{ backgroundImage: `url('${bgUrl}')` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse bg-opacity-50 ">
        
        <div>
        <p className="py-6 text-sm text-gray-600">
            Pyroxidine vitamin b6
          </p>
          <h1 className=" font-bold text-2xl mb-2 text-gray-600">Vitamins and <span className='text-xl text-gray-600'>suppliments</span></h1>
          
          <button className="btn rounded-full bg-green-400 border-none text-white">View more <MdKeyboardArrowRight></MdKeyboardArrowRight></button>
        </div>
        <img
          src={imgSrc}
          className=" rounded-lg shadow-2xl max-h-44"
          alt="Stock"
        />
      </div>
    </div>
  );
};

export default FloatingItem;