'use client';
import Link from 'next/link';
import React from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { PiHeartbeatThin } from "react-icons/pi";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
    return (
        <div >
          <div className='flex justify-between  bg-sky-400 px-10 py-2 items-center '>
            <div className="">
              <p className='text-sm text-white'> dolor sit, amet consectetur adipisicing elit. Pariatur, voluptatibus</p>
            </div>

            <div className='flex gap-3 items-center'>
              
            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className='btn btn-ghost text-white p-0 text-md font-bold'>EN <FaAngleDown /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-fit p-2 shadow-sm">
                <li><a>English</a></li>
                <li><a>Bangla</a></li>
              </ul>
            </div>

            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className='btn btn-ghost text-white p-0 text-md font-bold '>$ Usd <FaAngleDown /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-fit p-2 shadow-sm">
                <li><a>USD</a></li>
                <li><a>BDt</a></li>
              </ul>
            </div>

            <button className='btn btn-ghost text-white p-0 text-md font-bold '>
              <Link href="/login" className='flex gap-2'>
              <MdOutlineAccountCircle className='text-xl'/>
              My account</Link>
            </button>
            </div>
          </div>

        <div className="navbar bg-base-100 shadow-sm px-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/brand">Shop by brand </Link></li>
                <li><Link href="/">Shop by category</Link></li>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/">Shop</Link></li>
                <li><Link href="/">Consultancy</Link></li>
                
              </ul>
            </div>
            <div className='flex gap-2 justify-center items-center text-gray-600'>
              <img className='h-10 object-center' src="https://i.ibb.co/JF0DRRGc/health-report.png" alt="logo" /> <span className='text-3xl font-bold '>Supplies</span>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1  text-gray-600 text-lg">
            <li><Link href="/">Home</Link></li>

              <div className="indicator mr-3">
                <span className="indicator-item badge badge-xs p-0 bg-green-400 ">New</span>
                <li><Link href="/brand">Shop by brand </Link></li>
              </div>
               

                <li><Link href="/">Shop by category</Link></li>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/">Shop</Link></li>
                <li><Link href="/">Consultancy</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
          <div className='flex items-center justify-center align-middle gap-4 text-2xl text-gray-600'>
            <div>
            <PiHeartbeatThin />
            </div>
              <div className="indicator">
                <span className="indicator-item badge p-0 px-1 bg-green-400 rounded-full text-xs text-white ">12</span>
                <FaCartPlus className='mt-2'/>
              </div>
          </div>
          </div>
        </div>
        </div>
    );
};

export default Navbar;