"use client"
import React from 'react';

const FloatingItem = () => {
  const bgUrl = "https://i.ibb.co/tMjV4G6M/slide1-back-3.jpg";

  return (
    <div
      className="hero bg-cover bg-center"
      style={{ backgroundImage: `url('${bgUrl}')` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse bg-opacity-50">
        <img
          src="https://enovathemes.com/propharm/wp-content/uploads/jurosta.svg"
          className=" rounded-lg shadow-2xl"
          alt="Stock"
        />
        <div>
          <h1 className=" font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default FloatingItem;