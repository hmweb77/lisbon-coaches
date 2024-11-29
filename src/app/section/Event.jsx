"use client";
import Image from "next/image";
import React from "react";
import ImageH from "../../../public/assets/hero-image.jpg";
import ImageW from "../../../public/assets/Screenshot 2024-11-28 at 19.37.09.png";
import ImageQ from "../../../public/assets/hero2.png";
import Link from "next/link";

export default function Event() {
  return (
    <div className=" bg-green3">
      <div className="  md:absolute lg:w-1/2">
        <Image alt="" src={ImageW} className=" lg:pl-16" />
      </div>
      <div className=" text-center pb-8 mx-auto max-w-7xl  lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 ">
          <p className="mt-2 text-3xl font-bold  text-yellow4 sm:text-4xl">
            Our next workshop
          </p>
          <p className="mt-6 text-base leading-7 text-white">
            In this workshop, you'll learn the tools and techniques to become an
            Inspiring Leader. You'll discover how to motivate and engage your
            team, driving them to achieve great performance and innovation. Join
            us and transform your leadership style to lead your team to success.
          </p>
          <div className="mt-8">
            <Link
              href="https://www.eventbrite.pt/e/networking-like-a-pro-for-inspiring-leaders-tickets-1053673940119?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=wsa&aff=ebdsshwebmobile"
              className="inline-flex rounded-md bg-yellow4 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-yellow2 "
            >
              Join our next workshop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
