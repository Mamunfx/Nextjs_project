"use client"
import React from 'react';

const slides = [
  {
    id: 'slide1',
    bg: 'https://i.ibb.co/LXZhrsP0/slide2-back.jpg',
    img: 'https://enovathemes.com/propharm/wp-content/uploads/slider-1-as6.png',
    title: 'Cold and flu protection!',
    description: 'For all family members',
    prev: 'slide3',
    next: 'slide2',
  },
  {
    id: 'slide2',
    bg: 'https://i.ibb.co/tMjV4G6M/slide1-back-3.jpg',
    img: 'https://enovathemes.com/propharm/wp-content/uploads/slider-1-asset-1.png',
    title: 'Vitamins and suppliments',
    description: 'Pyrodixine vitamin b6.',
    prev: 'slide1',
    next: 'slide3',
  },
  {
    id: 'slide3',
    bg: 'https://i.ibb.co/LXZhrsP0/slide2-back.jpg',
    img: 'https://enovathemes.com/propharm/wp-content/uploads/slider-1-as8.png',
    title: 'Ultra organic face cream',
    description: 'New released product.',
    prev: 'slide2',
    next: 'slide1',
  },
 
];

const Hero = () => {
  return (
    <div className="carousel w-full rounded-lg">
      {slides.map(({ id, bg, img, title, description, prev, next }) => (
        <div key={id} id={id} className="carousel-item relative w-full">
          {/* background + overlay */}
          <div
            className="hero  bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bg})` }}
          >
            {/* semi-transparent overlay */}
            <div className="absolute inset-0  z-0" />

            {/* content above the overlay */}
            <div className="hero-content relative z-10 text-white flex-col lg:flex-row-reverse p-8 gap-8">
              <img
                src={img}
                className=" h-96 rounded-lg shadow-2xl"
                alt="Illustration"
              />
              <div className="max-w-lg">
              <p className="mb-6 text-gray-600">{description}</p>
                <h1 className="text-4xl font-extrabold mb-4 text-gray-600 w-4/6">{title}</h1>
               
                <button className="btn rounded-full text-gray-600">Buy it now</button>
              </div>
            </div>
          </div>

          {/* carousel controls */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
            <a href={`#${prev}`} className="btn btn-circle">❮</a>
            <a href={`#${next}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;