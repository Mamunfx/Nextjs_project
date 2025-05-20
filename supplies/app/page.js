import React from 'react';
import Searching from './components/Searching';
import Hero from './components/Hero';
import FloatingItem from './components/FloatingItem';
import AdditionalItems from './components/AdditionalItems';
import ShopByBrand from './components/ShopByBrand';
import FeaturedProduct from './components/FeaturedProduct';
import NewArrivalProductCarousel from './components/NewArrivalProductCarousel';
import DealOfTheWeek from './components/DealOfTheWeek';
import BlogSection from './components/BlogSection';


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-12">

      <Searching />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

        <div className="lg:col-span-2 ">
          <Hero />
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <FloatingItem />
          <FloatingItem />
        </div>
      </div>

      <AdditionalItems></AdditionalItems>
      <ShopByBrand></ShopByBrand>
      <FeaturedProduct></FeaturedProduct>

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

      
      <NewArrivalProductCarousel></NewArrivalProductCarousel>

      <div
            className="hero  bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(https://enovathemes.com/propharm/wp-content/uploads/slide1_back-3.jpg)` }}
          >
            <div className="absolute inset-0  z-0" />
            <div className="hero-content relative z-10  flex-col lg:flex-row-reverse p-8 gap-8">
             
              <div className="max-w-lg">
                <h1 className=" font-extrabold mb-4 badge badge-warning">This is the title</h1>
                <p className="mb-6">this is the decription</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
              <img
                src="https://enovathemes.com/propharm/wp-content/uploads/banner-image-4.png"
                className=""
                alt="Illustration"
              />
            </div>

          </div>

          <DealOfTheWeek></DealOfTheWeek>

          <BlogSection></BlogSection>
    </div>
  );
}