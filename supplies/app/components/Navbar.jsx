'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FaAngleDown, FaCartPlus } from 'react-icons/fa';
import { PiHeartbeatThin } from 'react-icons/pi';
import { FiShoppingCart } from 'react-icons/fi';

export default function Navbar() {
  const { data: session, status } = useSession();
  const role = session?.user?.role; // 'admin' or 'user' or undefined
  const userEmail = session?.user?.email;

  const [cartCount, setCartCount] = useState(0);

  // Fetch cart items and compute total quantity
  useEffect(() => {
    if (status !== 'authenticated' || role === 'admin' || !userEmail) {
      setCartCount(0);
      return;
    }

    const fetchCartCount = async () => {
      try {
        const res = await fetch(`/api/cart?userEmail=${encodeURIComponent(userEmail)}`);
        if (!res.ok) {
          console.error('Failed to fetch cart count');
          return;
        }
        const items = await res.json();
        // sum up quantities
        const totalQty = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
        setCartCount(totalQty);
      } catch (err) {
        console.error('Error fetching cart count', err);
      }
    };

    fetchCartCount();
  }, [status, role, userEmail]);

  return (
    <div>
      {/* Top bar */}
      <div className="flex justify-end md:justify-between bg-sky-400 px-6 md:px-10 py-2 items-center">
        <p className="text-sm text-white hidden sm:block">
          Due to the COVID-19 epidemic, orders may be processed with a slight delay
        </p>
        <div className="flex gap-3 items-center text-white text-sm">
          <div className="dropdown dropdown-start">
            <button tabIndex={0} className="btn btn-ghost p-0 font-bold">
              EN <FaAngleDown className="inline ml-1" />
            </button>
            <ul className="dropdown-content menu bg-base-100 text-gray-600 rounded-box z-10 w-28 p-2 shadow-lg">
              <li><a>English</a></li>
              <li><a>Bangla</a></li>
            </ul>
          </div>
          <div className="dropdown dropdown-start">
            <button tabIndex={0} className="btn btn-ghost p-0 font-bold">
              $ USD <FaAngleDown className="inline ml-1" />
            </button>
            <ul className="dropdown-content menu bg-base-100 text-gray-600 rounded-box z-10 w-28 p-2 shadow-lg">
              <li><a>USD</a></li>
              <li><a>BDT</a></li>
            </ul>
          </div>
          {session ? (
            <div className="flex items-center gap-4">
              <div className="relative group">
                <img
                  src={session.user.image || '/default-avatar.png'}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1
                                bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0
                                group-hover:opacity-100 transition-opacity">
                  {session.user.name}
                </div>
              </div>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="btn btn-ghost p-0 font-bold"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="flex items-center gap-1 text-white font-bold">
              <MdOutlineAccountCircle className="text-xl" />
              <span>My Account</span>
            </Link>
          )}
        </div>
      </div>

      {/* Main navbar */}
      <nav className="navbar bg-base-100 shadow-sm px-6 md:px-10">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg">
              <li><Link href="/">Home</Link></li>
              {role === 'admin' ? (
                <>
                  <li><Link href="/addProduct">Add Product</Link></li>
                  <li><Link href="/manageAllProduct">All Products</Link></li>
                </>
              ) : (
                <>
                  <li>
                    <div className="indicator">
                      <span className="indicator-item badge badge-xs bg-green-400" >New</span>
                      <Link href="/shop">Shop by Brand</Link>
                    </div>
                  </li>
                  <li><Link href="/shop">Shop by Category</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/shop">Shop</Link></li>
                </>
              )}
            </ul>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/JF0DRRGc/health-report.png"
              alt="logo"
              className="h-10"
            />
            <span className="text-2xl md:text-3xl font-bold text-gray-700">Supplies</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-600 text-md md:text-lg">
            <li><Link href="/">Home</Link></li>
            {role === 'admin' ? (
              <>
                <li><Link href="/addProduct">Add Product</Link></li>
                <li><Link href="/manageAllProduct">All Products</Link></li>
              </>
            ) : (
              <>
                <li>
                  <div className="indicator mr-4">
                    <span className="indicator-item badge badge-xs bg-green-400" >New</span>
                    <Link href="/shop">Shop by Brand</Link>
                  </div>
                </li>
                <li><Link href="/shop">Shop by Category</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/shop">Shop</Link></li>
              </>
            )}
          </ul>
        </div>

        <div className="navbar-end">
          {role !== 'admin' && (
            <Link href="/cart" className="relative flex items-center text-2xl text-gray-600">
              <PiHeartbeatThin className="mr-2" />
              <div className="indicator">
                <span className="indicator-item badge p-1 bg-green-400 text-white rounded-full text-xs">
                  {cartCount}
                </span>
                <FaCartPlus />
              </div>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}