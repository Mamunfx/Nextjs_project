'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'

import ProductCard from './ProductCard'

const newArrivals = [
  {
    id: 1,
    imageSrc:
      'https://enovathemes.com/propharm/wp-content/uploads/product42-300x300.jpg',
    imageAlt: 'Vitamin C Immune Boost Capsules',
    badges: ['Organic', 'New'],
    title: 'Vitamin C Immune Boost Capsules',
    rating: 4.2,
    reviewsCount: 34,
    price: '24.99',
  },
  {
    id: 2,
    imageSrc: '/images/omega-3.jpg',
    imageAlt: 'Omega-3 Fish Oil Softgels',
    badges: ['High Potency', 'Best Seller'],
    title: 'Omega-3 Fish Oil Softgels',
    rating: 4.8,
    reviewsCount: 127,
    price: '19.99',
  },
  {
    id: 3,
    imageSrc: '/images/probiotic.jpg',
    imageAlt: 'Probiotic Daily Balance Capsules',
    badges: ['Gluten Free', 'Clinically Proven'],
    title: 'Probiotic Daily Balance Capsules',
    rating: 4.5,
    reviewsCount: 58,
    price: '29.99',
  },
  {
    id: 4,
    imageSrc: '/images/probiotic.jpg',
    imageAlt: 'Probiotic Daily Balance Capsules',
    badges: ['Gluten Free', 'Clinically Proven'],
    title: 'Probiotic Daily Balance Capsules',
    rating: 4.5,
    reviewsCount: 58,
    price: '29.99',
  },
  {
    id: 5,
    imageSrc: '/images/probiotic.jpg',
    imageAlt: 'Probiotic Daily Balance Capsules',
    badges: ['Gluten Free', 'Clinically Proven'],
    title: 'Probiotic Daily Balance Capsules',
    rating: 4.5,
    reviewsCount: 58,
    price: '29.99',
  },
  {
    id: 6,
    imageSrc: '/images/probiotic.jpg',
    imageAlt: 'Probiotic Daily Balance Capsules',
    badges: ['Gluten Free', 'Clinically Proven'],
    title: 'Probiotic Daily Balance Capsules',
    rating: 4.5,
    reviewsCount: 58,
    price: '29.99',
  },
  {
    id: 7,
    imageSrc: '/images/probiotic.jpg',
    imageAlt: 'Probiotic Daily Balance Capsules',
    badges: ['Gluten Free', 'Clinically Proven'],
    title: 'Probiotic Daily Balance Capsules',
    rating: 4.5,
    reviewsCount: 58,
    price: '29.99',
  },
  {
    id: 8,
    imageSrc: '/images/probiotic.jpg',
    imageAlt: 'Probiotic Daily Balance Capsules',
    badges: ['Gluten Free', 'Clinically Proven'],
    title: 'Probiotic Daily Balance Capsules',
    rating: 4.5,
    reviewsCount: 58,
    price: '29.99',
  },
  {
    id: 9,
    imageSrc: '/images/probiotic.jpg',
    imageAlt: 'Probiotic Daily Balance Capsules',
    badges: ['Gluten Free', 'Clinically Proven'],
    title: 'Probiotic Daily Balance Capsules',
    rating: 4.5,
    reviewsCount: 58,
    price: '29.99',
  },
  {
    id: 10,
    imageSrc: '/images/probiotic.jpg',
    imageAlt: 'Probiotic Daily Balance Capsules',
    badges: ['Gluten Free', 'Clinically Proven'],
    title: 'Probiotic Daily Balance Capsules',
    rating: 4.5,
    reviewsCount: 58,
    price: '29.99',
  },
  {
    id: 11,
    imageSrc: '/images/probiotic.jpg',
    imageAlt: 'Probiotic Daily Balance Capsules',
    badges: ['Gluten Free', 'Clinically Proven'],
    title: 'Probiotic Daily Balance Capsules',
    rating: 4.5,
    reviewsCount: 58,
    price: '29.99',
  },
  {
    id: 12,
    imageSrc: '/images/probiotic.jpg',
    imageAlt: 'Probiotic Daily Balance Capsules',
    badges: ['Gluten Free', 'Clinically Proven'],
    title: 'Probiotic Daily Balance Capsules',
    rating: 4.5,
    reviewsCount: 58,
    price: '29.99',
  },
]

export default function NewArrivalProductCarousel() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const handleAdd = (productId) => {
    console.log('Add to cart', productId)
    // integrate with your cart logic
  }

  return (
    <section className="px-4 py-8">
      {/* Heading + Navigation */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-gray-600 font-bold">New Arrivals</h2>
        <div className="flex space-x-2">
          <button
            ref={prevRef}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper Carousel with 2 rows */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Grid]}
        grid={{ rows: 2, fill: 'row' }}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {newArrivals.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              badges={product.badges}
              title={product.title}
              rating={product.rating}
              reviewsCount={product.reviewsCount}
              price={product.price}
              onAddToCart={() => handleAdd(product.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}