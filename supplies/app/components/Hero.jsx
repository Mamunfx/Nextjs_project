"use client"
import React from 'react';

const slides = [
  {
    id: 'slide1',
    bg: 'https://i.ibb.co/LXZhrsP0/slide2-back.jpg',
    img: 'https://enovathemes.com/propharm/wp-content/uploads/jurosta.svg',
    title: 'Box Office News!',
    description: 'Provident cupiditate voluptatem et in. Quaerat fugiat.',
    prev: 'slide4',
    next: 'slide2',
  },
  {
    id: 'slide2',
    bg: 'https://i.ibb.co/tMjV4G6M/slide1-back-3.jpg',
    img: 'https://enovathemes.com/propharm/wp-content/uploads/jurosta.svg',
    title: 'Latest Movie Releases',
    description: 'Stay ahead with the newest blockbusters.',
    prev: 'slide1',
    next: 'slide3',
  },
  {
    id: 'slide3',
    bg: 'https://i.ibb.co/LXZhrsP0/slide2-back.jpg',
    img: 'https://enovathemes.com/propharm/wp-content/uploads/jurosta.svg',
    title: 'Critics Reviews',
    description: 'Expert reviews and ratings all in one place.',
    prev: 'slide2',
    next: 'slide4',
  },
  {
    id: 'slide4',
    bg: 'https://i.ibb.co/XkMF3rwv/slide4-back.jpg',
    img: 'https://enovathemes.com/propharm/wp-content/uploads/jurosta.svg',
    title: 'Exclusive Interviews',
    description: 'Behind-the-scenes with your favorite stars.',
    prev: 'slide3',
    next: 'slide1',
  },
];

const Hero = () => {
  return (
    <div className="carousel w-full">
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
                className="w-64 rounded-lg shadow-2xl"
                alt="Illustration"
              />
              <div className="max-w-lg">
                <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
                <p className="mb-6">{description}</p>
                <button className="btn btn-primary">Get Started</button>
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