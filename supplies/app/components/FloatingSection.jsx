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

<div className="lg:col-span-1 flex flex-col gap-6">
  <FloatingItem />
  <FloatingItem />
</div>
</div>
        </div>
    );
};

export default FloatingSection;
