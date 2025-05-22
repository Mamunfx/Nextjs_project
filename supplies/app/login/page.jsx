'use client'
import React from 'react'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row bg-base-100 shadow-2xl rounded-lg overflow-hidden gap-4 my-8">
        {/* Promo Panel */}
        <div className="flex flex-col justify-center p-6 bg-sky-400 text-white w-full lg:w-1/2
                        rounded-b-[2rem] lg:rounded-tr-[5rem] lg:rounded-br-[5rem] lg:rounded-b-none
                        text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-md lg:text-lg">
            Sign in and find your desired task or get your work done with elite journeyman!
          </p>
        </div>

        {/* Login Form Panel */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col items-center">
          {/* Google Sign-In Button */}
          <div className="w-full flex justify-center">
            <button
              type="button"
              className="btn btn-outline rounded-full w-full max-w-[320px]
                         flex items-center justify-center gap-2
                         transition-transform transform hover:scale-105
                         hover:bg-sky-400 hover:text-white hover:border-sky-400"
            >
              <img
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="Google"
                className="w-5 h-5"
              />
              Login with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-6 w-full max-w-[320px]">
            <hr className="w-1/3 border-gray-400 rounded-full h-1" />
            <span className="mx-3 text-gray-500">or</span>
            <hr className="w-1/3 border-gray-400 rounded-full h-1" />
          </div>

          {/* Login Form */}
          <form className="space-y-4 w-full max-w-[320px]" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="*******"
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex justify-between items-center w-full max-w-[320px]">
              <label className="flex items-center space-x-2 text-gray-800">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-sky-400 border-gray-400 rounded focus:ring-sky-400 bg-white"
                />
                <span className="text-sm">Remember me</span>
              </label>
              <Link href="/register" className="text-xs text-sky-700 hover:underline">
                Don't have an account? Sign up
              </Link>
            </div>
            <button
              type="submit"
              className="btn w-full bg-sky-400 text-white hover:bg-sky-500 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}