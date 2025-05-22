'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import ProductCard from './ProductCard'

export default function FeaturedProduct() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const [products, setProducts] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  const handleAdd = (productId) => {
    console.log('Add to cart', productId)
    // your cart logic
  }

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('/api/products')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        // normalize price to number
        const cleaned = data.map((p) => ({
          ...p,
          price:
            typeof p.price === 'number'
              ? p.price
              : parseFloat(p.price) || 0,
        }))
        setProducts(cleaned)
      } catch (err) {
        console.error('Failed to fetch products:', err)
        setError(err.message || 'Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return <p className="text-center py-8">Loading featured products…</p>
  }
  if (error) {
    return <p className="text-center py-8 text-red-500">Error: {error}</p>
  }
  if (!products.length) {
    return <p className="text-center py-8">No featured products found.</p>
  }

  return (
    <section className="px-4 py-8">
      {/* Heading + Nav Buttons */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-gray-600 font-bold">Featured Products</h2>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 19l-7-7 7-7" />
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
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
          640:  { slidesPerView: 2 },
          768:  { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id || product.id}>
            <ProductCard
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              badges={product.badges}
              title={product.title}
              rating={product.rating}
              reviewsCount={product.reviewsCount}
              price={product.price}
              onAddToCart={() => handleAdd(product._id || product.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}