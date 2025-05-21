'use client'
import React from "react";

const Pera = () => {
    return (
        <div>
            <div
            className="hero  bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(https://enovathemes.com/propharm/wp-content/uploads/slide1_back-3.jpg)` }}
          >
            <div className="absolute inset-0  z-0" />
            <div className="hero-content relative z-10  flex-col lg:flex-row-reverse p-8 gap-8">
             
              <div className="max-w-lg">
                <h1 className=" font-extrabold mb-4 badge badge-warning">This is the title</h1>
                <p className="mb-6">this is the decription</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
              <img
                src="https://enovathemes.com/propharm/wp-content/uploads/banner-image-4.png"
                
                alt="Illustration"
              />
            </div>

          </div>
        </div>
    );
};

export default Pera;