"use client"
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

const Searching = () => {
    return (
      <div className='w-11/12 mx-auto lg:block hidden'>
        <div className="pb-3  border-gray-200 flex items-center justify-between">

          <div className='flex gap-8'>
            <div className="">
              <button className="btn btn-outline rounded-full text-gray-600"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
              </svg> All categories</button>
            </div>

            <div className='flex items-center '>

              <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className='btn rounded-none rounded-l-full text-gray-600'>Category <FaAngleDown /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-fit p-2 shadow-sm">
                  <li><a>Beauty</a></li>
                  <li><a>Medicine</a></li>
                  <li><a>Fitness</a></li>
                </ul>
              </div>

              <input type="text" placeholder="What are you looking for?" className="input rounded-none px-4 pr-36 w-full" />
              <button className='btn rounded-none rounded-r-full text-white text-xl bg-orange-400 border-orange-400'><IoSearch /></button>
            </div>

          </div>

          <div className='flex gap-8'>
            <div className='text-gray-600 text-xs flex items-center gap-3'>
              <IoLocationOutline className='text-sky-400 text-2xl' />
              <div>
                <p>Location</p>
                <p className='font-black'>Click to discover</p>
              </div>
            </div>

            <div className='text-gray-600 text-xs flex items-center gap-3'>
              <FiPhoneCall className='text-sky-400 text-2xl' />
              <div>
                <p>Sales and services</p>
                <p className='font-black'>993-77-88-66</p>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    );
};

export default Searching;