"use client";
import Image from "next/image";
const testimonials = [
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More testimonials...
];
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
      name: 'Workshop2',
      ImageURL:Workshop2,
    },
    {
      name: 'Workshop3',
      ImageURL:Workshop3,
    },
    {
      name: 'Workshop4',
      ImageURL:Workshop4,
    },
    {
      name: 'Workshop5',
      ImageURL:Workshop5,
    },
    {
      name: 'Workshop7',
      ImageURL:Workshop7,
    },
    {
      name: 'Workshop8',
      ImageURL:Workshop8,
    },
    {
      name: 'Workshop9',
      ImageURL:Workshop9,
    },
    {
      name: 'Workshop10',
      ImageURL:Workshop10,
    },
  ]
  return (
    <div className="bg-green2 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl text-center font-bold tracking-tight text-yellow4 sm:text-4xl">Future workshops</h2>
        
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl text-center grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {workshops.map((workshop) => (
            <div key={workshop.name} className="flex flex-col items-center">
              <Image
                src={workshop.ImageURL}
                alt={`Image of ${workshop.name}`}
                className="mb-4"
              />
              <Link  href="#" >
              <button className="bg-yellow2 text-white rounded-md px-6 py-2">
                Read more
              </button>
              </Link>
            </div>
          ))}
        </dl>
    </div>
  </div>
  );
}
