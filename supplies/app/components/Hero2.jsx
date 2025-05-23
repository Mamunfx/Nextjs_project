"use client"
import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero2 = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-12  gap-4 '>
          <div
            className="hero  bg-cover bg-center relative col-span-7 rounded-lg "
            style={{ backgroundImage: `url(https://enovathemes.com/propharm/wp-content/uploads/slide5_back.jpg)` }}
          >
            <div className="absolute inset-0  z-0" />
            <div className="hero-content relative z-10  flex-col lg:flex-row-reverse p-8 gap-8">
             
              <div className="max-w-lg text-gray-600">
              <p className="mb-6">Pyridoxine Vitamin B6</p>
                <h1 className="text-4xl font-extrabold mb-4">Vitamins & Supplements</h1>
                
                <button className="btn bg-green-400 rounded-full text-white">View More <MdKeyboardArrowRight /></button>
              </div>
              <img
                src="https://enovathemes.com/propharm/wp-content/uploads/banner-image-15.png"
                className=""
                alt="Illustration"
              />
            </div>

          </div>
          <div
            className="hero  bg-cover bg-center relative col-span-5 rounded-lg"
            style={{ backgroundImage: `url(https://enovathemes.com/propharm/wp-content/uploads/slide4_back.jpg)` }}
          >
            <div className="absolute inset-0  z-0" />
            <div className="hero-content relative z-10  flex-col  p-8 gap-8">
             
            <div className="max-w-lg text-gray-600">
              <p className="mb-6">Pyridoxine Vitamin B6</p>
                <h1 className="text-4xl font-extrabold mb-4">Vitamins & Supplements</h1>
                
                <button className="btn bg-green-400 rounded-full text-white">View More <MdKeyboardArrowRight /></button>
              </div>
              <img
                src="https://enovathemes.com/propharm/wp-content/uploads/banner-image-14.png"
                className=""
                alt="Illustration"
              />
            </div>
          </div>
       
      </div>
        </div>
    );
};

export default Hero2;