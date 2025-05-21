"use client"
import React from 'react';

const Hero2 = () => {
    return (
        <div>
            <div className='grid grid-cols-12  gap-4'>
          <div
            className="hero  bg-cover bg-center relative col-span-7 rounded-lg"
            style={{ backgroundImage: `url(https://enovathemes.com/propharm/wp-content/uploads/slide5_back.jpg)` }}
          >
            <div className="absolute inset-0  z-0" />
            <div className="hero-content relative z-10  flex-col lg:flex-row-reverse p-8 gap-8">
             
              <div className="max-w-lg">
                <h1 className="text-4xl font-extrabold mb-4">This is the title</h1>
                <p className="mb-6">this is the decription</p>
                <button className="btn btn-primary">Get Started</button>
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
             
              <div className="max-w-lg">
                <h1 className="text-4xl font-extrabold mb-4">This is the title</h1>
                <p className="mb-6">this is the decription</p>
                <button className="btn btn-primary">Get Started</button>
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