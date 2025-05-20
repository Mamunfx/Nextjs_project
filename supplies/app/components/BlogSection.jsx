'use client'
import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import BlogCard from './BlogCard'

const posts = [
  {
    id: 1,
    imageSrc: 'https://source.unsplash.com/collection/190727/800x600',
    imageAlt: 'Writing blog post',
    badges: ['Article', 'May 10, 2025'],
    title: 'How to Build Scalable React Apps',
    excerpt:
      'Learn the key patterns and strategies for architecting large-scale React applications that are maintainable and performant.',
    readTime: '5 min read',
    href: '/blog/scalable-react-apps',
  },
  {
    id: 2,
    imageSrc: 'https://source.unsplash.com/collection/1163637/800x600',
    imageAlt: 'JavaScript code editor',
    badges: ['Tip', 'May 4, 2025'],
    title: '10 JavaScript Tricks You Didn’t Know',
    excerpt:
      'From optional chaining to logical assignment, discover ten handy JS features that can simplify your code today.',
    readTime: '4 min read',
    href: '/blog/js-tricks-you-didnt-know',
  },
  {
    id: 3,
    imageSrc: 'https://source.unsplash.com/collection/958983/800x600',
    imageAlt: 'Tailwind CSS examples',
    badges: ['Design', 'Apr 28, 2025'],
    title: 'Designing with Tailwind CSS',
    excerpt:
      'A deep dive into utility-first design: how to structure your UI components and themes with Tailwind.',
    readTime: '6 min read',
    href: '/blog/designing-with-tailwind',
  },
  {
    id: 4,
    imageSrc: 'https://source.unsplash.com/collection/1421041/800x600',
    imageAlt: 'Team collaboration',
    badges: ['Guide', 'Apr 20, 2025'],
    title: 'Effective Remote Collaboration',
    excerpt:
      'Tools, processes, and best practices to keep your distributed team aligned and productive.',
    readTime: '7 min read',
    href: '/blog/remote-collaboration',
  },
  {
    id: 5,
    imageSrc: 'https://source.unsplash.com/collection/927423/800x600',
    imageAlt: 'GraphQL schema',
    badges: ['Tutorial', 'Apr 15, 2025'],
    title: 'Getting Started with GraphQL',
    excerpt:
      'An introduction to GraphQL: queries, mutations, and best practices for integrating with React.',
    readTime: '5 min read',
    href: '/blog/getting-started-with-graphql',
  },
]

export default function BlogSection() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [swiperEl, setSwiperEl] = useState(null)

  // once swiper instance & button refs mount, wire navigation
  useEffect(() => {
    if (swiperEl && prevRef.current && nextRef.current) {
      swiperEl.params.navigation.prevEl = prevRef.current
      swiperEl.params.navigation.nextEl = nextRef.current
      swiperEl.navigation.init()
      swiperEl.navigation.update()
    }
  }, [swiperEl])

  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl text-gray-600 font-bold mb-6">
        From Blog
      </h2>

      <div className="relative">
        

        {/* Swiper - manual scroll only */}
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={setSwiperEl}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation // enable navigation module
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <BlogCard {...post} />
            </SwiperSlide>
          ))}
        </Swiper>

       
      </div>
    </section>
  )
}