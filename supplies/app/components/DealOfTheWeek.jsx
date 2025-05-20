'use client'

import React, { useState, useEffect } from 'react'
import WeekendSellCard from './WeekendSellCard'

export default function DealOfTheWeek() {
  // 1) Set your target UTC date here:
  const targetDate = new Date('2025-05-27T00:00:00Z').getTime()

  // 2) Compute remaining time
  const calculateTimeLeft = () => {
    const now = Date.now()
    const diff = Math.max(targetDate - now, 0)
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  // 3) State + tick every second
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Don't render countdown until client-side
  if (!mounted) return null

  // 4) Prepare countdown segments
  const segments = [
    { value: timeLeft.days, label: 'days' },
    { value: timeLeft.hours, label: 'hours' },
    { value: timeLeft.minutes, label: 'min' },
    { value: timeLeft.seconds, label: 'sec' },
  ]

  const products = [
    {
      id: 1,
      imageSrc:
        'https://enovathemes.com/propharm/wp-content/uploads/product42-600x600.jpg',
      imageAlt: 'Vitamin C Immune Boost Capsules',
      badges: ['Organic', 'New'],
      title: 'Vitamin C Immune Boost Capsules',
      rating: 4.2,
      reviewsCount: 34,
      price: '24.99',
      onSale: true,
    },
    {
      id: 2,
      imageSrc:
        'https://enovathemes.com/propharm/wp-content/uploads/product74-600x600.jpg',
      imageAlt: 'Omega-3 Fish Oil Softgels',
      badges: ['High Potency', 'Best Seller'],
      title: 'Omega-3 Fish Oil Softgels',
      rating: 4.8,
      reviewsCount: 127,
      price: '19.99',
      onSale: false,
    },
  ]

  const handleAddToCart = (productId) => {
    console.log('Add to cart', productId)
    // TODO: integrate real cart logic
  }

  return (
    <div className="w-full flex flex-col items-center gap-8 px-4 py-8">
      {/* Header + Countdown */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <h1 className="text-3xl font-bold">Deal of the Week</h1>
        <div className="grid grid-flow-col gap-4 text-center auto-cols-max">
          {segments.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col bg-sky-400 text-white rounded-xl p-3"
            >
              <span className="countdown font-mono text-2xl">
                <span
                  style={{ '--value': value.toString() }}
                  aria-live="polite"
                  aria-label={`${value} ${label}`}
                />
              </span>
              <span className="uppercase text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <WeekendSellCard
            key={product.id}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            badges={product.badges}
            title={product.title}
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            price={product.price}
            onAddToCart={() => handleAddToCart(product.id)}
            onSale={product.onSale}
          />
        ))}
      </div>
    </div>
  )
}