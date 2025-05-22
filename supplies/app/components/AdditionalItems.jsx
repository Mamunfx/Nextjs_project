"use client";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function AdditionalItems() {
  // Full list of items, including duplicates
  const items = [
    { src: "https://enovathemes.com/propharm/wp-content/uploads/cat_white_7.jpg",    label: "Baby" },
    { src: "https://enovathemes.com/propharm/wp-content/uploads/cat_white_9.jpg",    label: "Beuty" },
    { src: "https://i.ibb.co/r2KQymGm/cat-white-11.jpg",                             label: "Grocery" },
    { src: "https://enovathemes.com/propharm/wp-content/uploads/cat_white_2.jpg",    label: "Health" },
    { src: "https://enovathemes.com/propharm/wp-content/uploads/cat_white_13.jpg",   label: "Herbs" },
    { src: "https://enovathemes.com/propharm/wp-content/uploads/cat_white_1-1.jpg",  label: "Personal Care" },
    { src: "https://enovathemes.com/propharm/wp-content/uploads/cat_white_7.jpg",    label: "Baby" },
    { src: "https://enovathemes.com/propharm/wp-content/uploads/cat_white_9.jpg",    label: "Beuty" },
    { src: "https://i.ibb.co/r2KQymGm/cat-white-11.jpg",                             label: "Grocery" },
    { src: "https://enovathemes.com/propharm/wp-content/uploads/cat_white_2.jpg",    label: "Health" },
    { src: "https://enovathemes.com/propharm/wp-content/uploads/cat_white_13.jpg",   label: "Herbs" },
    { src: "https://enovathemes.com/propharm/wp-content/uploads/cat_white_1-1.jpg",  label: "Personal Care" },
  ];

  return (
    <div className="w-full">
      <Swiper
        // You can customize these breakpoints as needed
        breakpoints={{
          320:  { slidesPerView: 2, spaceBetween: 8  },
          640:  { slidesPerView: 4, spaceBetween: 12 },
          1024: { slidesPerView: 7, spaceBetween: 16 },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="h-40 w-40 object-cover rounded"
                src={item.src}
                alt={item.label}
              />
              <h2 className="text-sm font-medium">{item.label}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}