"use client"
import React from 'react';
import Hero from './Hero';
import FloatingItem from './FloatingItem';

const FloatingSection = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

<div className="lg:col-span-2 ">
  <Hero />
</div>

<div className="lg:col-span-1 flex flex-col gap-6 ">
  <FloatingItem bgUrl={'https://enovathemes.com/propharm/wp-content/uploads/slide2_back.jpg'} imgUrl={'https://enovathemes.com/propharm/wp-content/uploads/banner-image-18.png'}/>
  <FloatingItem bgUrl={'https://enovathemes.com/propharm/wp-content/uploads/slide5_back.jpg'} imgUrl={'https://enovathemes.com/propharm/wp-content/uploads/banner-image-19.png'}/>
</div>
</div>
        </div>
    );
};

export default FloatingSection;
