'use client'

import React from 'react'
import Image from 'next/image'

export default function WeekendSellCard({
  imageSrc,
  imageAlt = 'Product image',
  badges = [],
  title,
  rating = 0,
  reviewsCount = 0,
  price,
  onAddToCart,
  onSale = false,
}) {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <svg
      key={i}
      className={`w-5 h-5 ${
        i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09L5.91 11.545.841 7.09l6.068-.883L10 1l2.091 5.207 6.068.883-4.999 4.455 1.788 6.545z" />
    </svg>
  ))

  return (
    // Added flex-1 so the card expands to fill available space
    <div className="card lg:card-side flex-1 bg-base-100 shadow-sm rounded-lg overflow-hidden">
      <figure className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </figure>

      <div className="card-body flex flex-col justify-between p-6 w-full">
        <div>
          {onSale && <span className="badge badge-error mb-2">Sale</span>}
          <h2 className="card-title">{title}</h2>
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {badges.map((b, i) => (
                <span key={i} className="badge badge-outline text-sky-600">
                  {b}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center mt-3">
            {stars}
            {reviewsCount > 0 && (
              <span className="ml-2 text-gray-600 text-sm">
                ({reviewsCount})
              </span>
            )}
          </div>
        </div>
        <div className="card-actions justify-between mt-6">
          <p className="text-2xl font-bold">${price}</p>
          <button onClick={onAddToCart} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}