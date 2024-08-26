'use client'
import Image from 'next/image'
import React from 'react'

import ImageW from "../../../public/assets/LisbonComm.png"

export default function Community() {
  return (
    <div className="relative bg-purple py-16">
      <div className="relative z-10 text-center pb-8">
        <p className="text-white text-4xl font-bold uppercase">Our Community</p>
        <div className="flex justify-center space-x-2 my-4">
          {Array(10).fill(0).map((_, index) => (
            <span key={index} className="w-4 h-4 bg-yellow-500 rounded-full"></span>
          ))}
        </div>
      </div>
      <div className="relative mx-auto flex flex-col items-center md:flex-row max-w-7xl lg:items-start">
        <div className="md:w-1/2 lg:w-1/2">
          <Image
            alt="Community Image"
            src={ImageW}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="mt-8 md:mt-0 md:ml-16 lg:ml-24 text-center md:text-left md:w-1/2 lg:w-1/2">
          <p className="text-white text-lg leading-7">
            Join a community of local professionals, expats, and digital nomads who are passionate about <strong>personal growth.</strong> 
            Whether you're looking to expand your business or seeking growth and connections abroad, this group is for you!
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-yellow-500 px-6 py-3 text-base font-semibold text-black shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
            >
              Join our next Event
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
