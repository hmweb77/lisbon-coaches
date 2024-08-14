'use client'
import Image from 'next/image'
import React from 'react'
import ImageH from "../../../public/assets/hero-image.jpg"
import ImageW from "../../../public/assets/hero1.png"
import ImageQ from "../../../public/assets/hero2.png"


export default function Event() {
    return (
      <div className="relative bg-green3">
        <div className="  md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <Image
            alt=""
            src={ImageW}
            className="pt-20"
          />
        
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          
            <p className="mt-2 text-3xl font-bold tracking-tight text-yellow4 sm:text-4xl">Our next workshop</p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
              tincidunt duis.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Join our next workshop
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  