'use client'
import React from 'react';
import Searching from './components/Searching';
import AdditionalItems from './components/AdditionalItems';
import ShopByBrand from './components/ShopByBrand';
import FeaturedProduct from './components/FeaturedProduct';
import NewArrivalProductCarousel from './components/NewArrivalProductCarousel';
import DealOfTheWeek from './components/DealOfTheWeek';
import BlogSection from './components/BlogSection';
import FloatingSection from './components/FloatingSection';
import Hero2 from './components/Hero2';


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-12">
      <Searching />
      <FloatingSection></FloatingSection>
      <AdditionalItems></AdditionalItems>
      <ShopByBrand></ShopByBrand>
      <FeaturedProduct></FeaturedProduct>
      <Hero2></Hero2>
      <NewArrivalProductCarousel></NewArrivalProductCarousel>
      
      <DealOfTheWeek></DealOfTheWeek>
      <BlogSection></BlogSection>
    </div>
  );
}