'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogCard({
  imageSrc,
  imageAlt = 'Blog image',
  badges = [],
  title,
  excerpt,
  readTime,
  href = '#',
}) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm rounded-lg overflow-hidden mx-auto bg-white shadow hover:shadow-lg transition">
      {/* Image */}
      <div className="relative w-full h-48 sm:h-56 bg-gray-50">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col space-y-2">
        {/* Badges (e.g. category, date) */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold bg-sky-100 text-sky-400 px-2 py-0.5 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-gray-800 font-semibold text-lg line-clamp-2">
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-gray-600 text-sm line-clamp-3">
            {excerpt}
          </p>
        )}

        {/* Read time */}
        {readTime && (
          <span className="text-gray-400 text-xs">
            {readTime}
          </span>
        )}

        {/* Read More button */}
        <div className="mt-3">
          <Link
            href={href}
            className="inline-block px-4 py-2  text-sky-400 font-medium rounded-full hover:bg-sky-500 transition"
          >
            Read More 
          </Link>
        </div>
      </div>
    </div>
  )
}