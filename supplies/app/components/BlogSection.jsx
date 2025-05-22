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
    "id": 1,
    "imageSrc": "https://enovathemes.com/propharm/wp-content/uploads/post5-1240x580.jpg",
    "imageAlt": "Fresh fruits and vegetables on a table",
    "badges": ["Nutrition", "May 18, 2025"],
    "title": "10 Superfoods for Your Immune System",
    "excerpt": "Discover ten nutrient-packed foods that can help strengthen your body's natural defenses.",
    "readTime": "6 min read",
    "href": "/blog/superfoods-boost-immune-system",
    "additionalDescription": "From berries rich in antioxidants to leafy greens loaded with vitamins, learn how to incorporate these superfoods into your daily meals for optimal health."
  },
  {
    "id": 2,
    "imageSrc": "https://enovathemes.com/propharm/wp-content/uploads/post6-1240x580.jpg",
    "imageAlt": "Person doing yoga at sunrise",
    "badges": ["Wellness", "May 15, 2025"],
    "title": "The Science Behind Mindful Meditation",
    "excerpt": "Understand how meditation affects brain chemistry and reduces stress through proven scientific studies.",
    "readTime": "7 min read",
    "href": "/blog/science-mindful-meditation",
    "additionalDescription": "Explore the latest neuroscience research on mindfulness practices, including the benefits for mental clarity, emotional regulation, and long-term cognitive health."
  },
  {
    "id": 3,
    "imageSrc": "https://enovathemes.com/propharm/wp-content/uploads/post2-1240x580.jpg",
    "imageAlt": "Running shoes on a track",
    "badges": ["Fitness", "May 10, 2025"],
    "title": "How to Start a Running Routine Safely",
    "excerpt": "Step-by-step guidance for beginners to build endurance, prevent injuries, and stay motivated on the track.",
    "readTime": "5 min read",
    "href": "/blog/start-running-routine-safely",
    "additionalDescription": "Learn how to choose the right footwear, structure your weekly mileage plan, and incorporate strength exercises to support your running goals."
  },
  {
    "id": 4,
    "imageSrc": "https://enovathemes.com/propharm/wp-content/uploads/post1-1240x580.jpg",
    "imageAlt": "Healthy meal prep containers",
    "badges": ["Meal Prep", "May 5, 2025"],
    "title": "Meal Prepping for Busy Professionals",
    "excerpt": "Time-saving tips and recipes to prepare nutritious meals ahead of your busiest weeks.",
    "readTime": "8 min read",
    "href": "/blog/meal-prepping-busy-professionals",
    "additionalDescription": "From batch-cooked grains to protein-packed salads, discover easy-to-follow meal prep strategies that keep you nourished without sacrificing your schedule."
  },
  {
    "id": 5,
    "imageSrc": "https://enovathemes.com/propharm/wp-content/uploads/post10.jpg",
    "imageAlt": "Hydration station with water and fruit infusions",
    "badges": ["Hydration", "Apr 30, 2025"],
    "title": "The Importance of Hydration: How Much Water Do You Really Need?",
    "excerpt": "Debunking common myths about water intake and learning the true markers of adequate hydration.",
    "readTime": "4 min read",
    "href": "/blog/importance-of-hydration",
    "additionalDescription": "Discover how factors like activity level, climate, and diet influence your daily water needs, plus tips to make drinking water more enjoyable."
  },
  {
    "id": 6,
    "imageSrc": "https://enovathemes.com/propharm/wp-content/uploads/post5-1240x580.jpg",
    "imageAlt": "Person sleeping peacefully",
    "badges": ["Sleep", "Apr 25, 2025"],
    "title": "Optimizing Your Sleep for Better Health",
    "excerpt": "Key habits and environmental tweaks to improve sleep quality and wake up refreshed.",
    "readTime": "6 min read",
    "href": "/blog/optimizing-sleep-better-health",
    "additionalDescription": "Learn about the role of blue light, room temperature, and bedtime routines in regulating your sleep cycle and boosting daytime performance."
  },
  {
    "id": 7,
    "imageSrc": "https://enovathemes.com/propharm/wp-content/uploads/post6-1240x580.jpg",
    "imageAlt": "Person meditating outdoors",
    "badges": ["Mental Health", "Apr 22, 2025"],
    "title": "Managing Anxiety with Breathwork Techniques",
    "excerpt": "Practical breathing exercises to calm your mind and reduce anxiety in minutes.",
    "readTime": "5 min read",
    "href": "/blog/managing-anxiety-breathwork",
    "additionalDescription": "From box breathing to alternate nostril techniques, find out how simple breathwork can regulate your nervous system during stressful moments."
  },
  {
    "id": 8,
    "imageSrc": "https://enovathemes.com/propharm/wp-content/uploads/post2-1240x580.jpg",
    "imageAlt": "Person stretching at home",
    "badges": ["Flexibility", "Apr 18, 2025"],
    "title": "Daily Stretching Routine for Desk Workers",
    "excerpt": "A sequence of stretches to relieve tension and prevent stiffness from long hours at the desk.",
    "readTime": "7 min read",
    "href": "/blog/daily-stretching-desk-workers",
    "additionalDescription": "Integrate these easy stretches into your workday to improve posture, reduce back pain, and enhance overall mobility."
  },
  {
    "id": 9,
    "imageSrc": "https://enovathemes.com/propharm/wp-content/uploads/post1-1240x580.jpg",
    "imageAlt": "Healthy smoothie in a glass",
    "badges": ["Recipes", "Apr 12, 2025"],
    "title": "5 Green Smoothie Recipes for Detox",
    "excerpt": "Blend your way to better digestion and glowing skin with these nutrient-rich smoothie ideas.",
    "readTime": "4 min read",
    "href": "/blog/green-smoothie-recipes-detox",
    "additionalDescription": "Packed with leafy greens, fruits, and superfood boosters, these smoothies are designed to flush out toxins and support liver function."
  },
  {
    "id": 10,
    "imageSrc": "https://enovathemes.com/propharm/wp-content/uploads/post10.jpg",
    "imageAlt": "Woman lifting weights in gym",
    "badges": ["Strength", "Apr 8, 2025"],
    "title": "Building Lean Muscle: A Beginner’s Guide",
    "excerpt": "Fundamental workouts and nutrition tips to help novices gain muscle without unnecessary bulk.",
    "readTime": "8 min read",
    "href": "/blog/building-lean-muscle-beginners-guide",
    "additionalDescription": "Covering resistance training basics, macro balancing, and recovery protocols, this guide gets you started on your strength journey."
  },
  {
    "id": 11,
    "imageSrc": "https://enovathemes.com/propharm/wp-content/uploads/post5-1240x580.jpg",
    "imageAlt": "Group fitness class outdoors",
    "badges": ["Community", "Apr 3, 2025"],
    "title": "How Group Workouts Improve Motivation",
    "excerpt": "Explore the psychological and social benefits of exercising with a community.",
    "readTime": "5 min read",
    "href": "/blog/group-workouts-improve-motivation",
    "additionalDescription": "Discover how accountability, friendly competition, and shared goals in group settings can boost your adherence and enjoyment of exercise."
  },
  {
    "id": 12,
    "imageSrc": "https://enovathemes.com/propharm/wp-content/uploads/post6-1240x580.jpg",
    "imageAlt": "Medical checkup with doctor",
    "badges": ["Preventive Care", "Mar 28, 2025"],
    "title": "Top Health Screenings You Shouldn’t Skip",
    "excerpt": "A checklist of essential medical exams for every age group to catch issues early.",
    "readTime": "6 min read",
    "href": "/blog/top-health-screenings",
    "additionalDescription": "From blood pressure checks to cancer screenings, learn the recommended schedule for routine tests that safeguard your long-term health."
  }
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