"use client";
import Image from "next/image";
import React from "react";

import Image1 from "../../../public/assets/joana.png"
import Image2 from "../../../public/assets/nicola.png"
import Image3 from "../../../public/assets/fabricio.png"
const people = [
  {
    name: "Joanna",
    role: "Leadership Coach",
    imageUrl: Image1,
  },
  {
    name: "Nicola",
    role: "Productivity Coach",
     imageUrl: Image2,
  },
  {
    name: "Fabricio",
    role: "Leadership Coach",
     imageUrl:Image3
    },
  {
    name: "Sonia",
    role: "Vocal Coach",
     imageUrl: Image1,
  },
  {
    name: "Andreas",
    role: "Leadership Coach",
     imageUrl: Image2
    },
  // More people...
];

export default function Members() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className=" px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold tracking-tight text-yellow4 sm:text-4xl">
            Our team
          </h2>
        <ul
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
              width={50}
              height={50}
                alt=""
                src={person.imageUrl}
                className="mx-auto h-24 w-24 rounded-full"
              />
              <h3 className="mt-6 text-base font-semibold leading-7  text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
