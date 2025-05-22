'use client'
import React from 'react'
import Link from 'next/link'
import {
  FaRocket,
  FaChartLine,
  FaHeadset,
  FaUser,
  FaUserTie,
  FaEnvelope,
  FaImage,
  FaLock,
} from 'react-icons/fa'

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Info Panel */}
        <div className="hidden lg:flex flex-col justify-center items-start bg-sky-400 p-12 space-y-6 text-white rounded-r-[8rem]">
          <h2 className="text-4xl font-extrabold">Welcome to Journeyman</h2>
          <p className="text-lg">
            Join a community of creators and unlock premium tools to accelerate your workflow.
            Register now and start earning coins!
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaRocket className="mr-3 text-2xl" />
              <span>Fast onboarding</span>
            </li>
            <li className="flex items-center">
              <FaChartLine className="mr-3 text-2xl" />
              <span>Powerful analytics</span>
            </li>
            <li className="flex items-center">
              <FaHeadset className="mr-3 text-2xl" />
              <span>24/7 priority support</span>
            </li>
          </ul>
        </div>

        {/* Right Form Panel */}
        <div className="p-8 lg:p-12">
          <h1 className="text-3xl font-extrabold text-center text-gray-800">
            Create Your Account
          </h1>
          <p className="text-center text-gray-500 mb-6 mt-1">
            It’s quick and free.
          </p>

          {/* Google Sign-Up Button */}
          <div className="w-full flex justify-center">
            <button
              type="button"
              className="w-9/12 max-w-xs flex items-center justify-center gap-2 py-2 mb-6 border-2 border-gray-200 rounded-full
                         hover:border-sky-400 hover:bg-sky-50 transition"
            >
              <img
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-gray-700 font-medium">
                Sign up with Google
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-6">
            <hr className="w-1/3 border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="w-1/3 border-gray-300" />
          </div>

          <form className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="pl-10 w-full border border-gray-200 rounded-lg py-2
                             focus:ring-2 focus:ring-sky-300 outline-none transition"
                />
              </div>
              <div className="relative">
                <FaUserTie className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="pl-10 w-full border border-gray-200 rounded-lg py-2
                             focus:ring-2 focus:ring-sky-300 outline-none transition"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="pl-10 w-full border border-gray-200 rounded-lg py-2
                           focus:ring-2 focus:ring-sky-300 outline-none transition"
              />
            </div>

            {/* Profile Image Upload */}
            <div className="relative">
            
              <input
                type="file"
                accept="image/*"
                className="block w-full text-sm text-gray-500
                           file:mr-4 file:py-2 file:px-4
                           file:rounded file:border-0
                           file:text-sm file:font-semibold
                           file:bg-sky-50 file:text-sky-400
                           hover:file:bg-sky-100 transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="pl-10 w-full border border-gray-200 rounded-lg py-2
                           focus:ring-2 focus:ring-sky-300 outline-none transition"
              />
            </div>

            {/* Role Selector */}
            <div>
              <select
                className="w-full border border-gray-200 rounded-lg py-2 px-4
                           focus:ring-2 focus:ring-sky-300 outline-none transition"
              >
                <option>Worker</option>
                <option>Buyer</option>
              </select>
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-center gap-2 mt-2 text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 text-sky-400 border-gray-400 rounded focus:ring-sky-400 bg-white"
              />
              <span className="text-sm">
                I agree to the{' '}
                <Link href="/terms" className="text-sky-600 hover:underline">
                  Terms & Privacy
                </Link>
              </span>
            </label>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-9/12 max-w-xs flex items-center justify-center py-2
                           bg-sky-400 text-white font-semibold rounded-full shadow
                           hover:bg-sky-500 transition"
              >
                Register
              </button>
            </div>
          </form>

          {/* Already have an account */}
          <p className="mt-6 text-center text-gray-500">
            Already registered?{' '}
            <Link href="/login" className="text-sky-700 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}