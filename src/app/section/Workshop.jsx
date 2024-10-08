"use client";
import Image from "next/image";

import Workshop1 from "../../../public/assets/workshop1.png";
import Workshop2 from "../../../public/assets/workshop2.png";
import Workshop3 from "../../../public/assets/workshop3.png";
import Workshop4 from "../../../public/assets/workshop4.png";
import Workshop5 from "../../../public/assets/workshop5.png";
import Workshop7 from "../../../public/assets/workshop7.png";
import Workshop8 from "../../../public/assets/workshop8.png";
import Workshop9 from "../../../public/assets/workshop9.png";
import Workshop10 from "../../../public/assets/workshop10.png";
import Link from "next/link";

export default function Workshop() {

  const workshops = [
    {
      name: 'Workshop1',
      ImageURL:Workshop1,
      
    },
    {
      name: 'Workshop4',
      ImageURL:Workshop4,
    },
    {
      name: 'Workshop8',
      ImageURL:Workshop8,
    },
    {
      name: 'Workshop2',
      ImageURL:Workshop2,
    },
    {
      name: 'Workshop5',
      ImageURL:Workshop5,
    },
    {
      name: 'Workshop9',
      ImageURL:Workshop9,
    },
    {
      name: 'Workshop3',
      ImageURL:Workshop3,
    },
    {
      name: 'Workshop7',
      ImageURL:Workshop7,
    },
    {
      name: 'Workshop10',
      ImageURL:Workshop10,
    },
  ]
  return (
    <div className="bg-green3 text-center ">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl text-center pt-8 font-bold tracking-tight text-yellow4 sm:text-4xl">WORKSHOP PROGRAM</h2>
      <dl className="mx-auto mt-16 grid max-w-2xl text-center grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {workshops.map((workshop) => (
            <div key={workshop.name} className="flex flex-col items-center">
              <Image
                src={workshop.ImageURL}
                alt={`Image of ${workshop.name}`}
                className="mb-4"
              />
            </div>
          ))}
        </dl>
    </div>
  </div>
  );
}
