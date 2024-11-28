"use client";
import Image from "next/image";
import React from "react";



import ImageW from "../../../public/assets/logo-white.svg";


export default function Hero() {
  return (
    <>
      <div className=" bg-purple ">  
        <div className="mx-auto max-w-2xl  ">
          <div className="text-center">
            <Image src={ImageW} alt="logo" priority={true} />
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              WELCOME TO LISBON COACHES
            </h1>
            <div className="flex justify-center space-x-2 mb-6">
              {Array(12)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className="w-4 h-4 bg-yellow-500 rounded-full"
                  ></span>
                ))}
            </div>
            <p className="mt-6 text-sm  text-gray-300">
              We are a community of dedicated coaches who strive to impact the
              world, one human at a time. Whether you suffer from
              procrastination, anxiety, or simply want to take life to the next
              level, here you will find the support that you need.
            </p>
            <div className="flex justify-center space-x-2 mb-6">
              {Array(12)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className="w-4 h-4 bg-yellow-500 rounded-full"
                  ></span>
                ))}
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6"></div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </>
  );
}

// <div className="bg-gray-900">

//   <div className="relative isolate overflow-hidden pt-14">
//     <Image
//       alt="hero"
//       src={ImageH}
//       className="absolute inset-0 -z-10 h-full w-full "
//     />
//     <div
//       aria-hidden="true"
//       className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//     >
//       <div
//         style={{
//           clipPath:
//             'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//         }}
//         className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//       />
//     </div>
//     <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
//           Data to enrich your online business
//         </h1>
//         <p className="mt-6 text-lg leading-8 text-gray-300">
//           Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//           fugiat veniam occaecat fugiat aliqua.
//         </p>
//       <div className="mt-10 flex items-center justify-center gap-x-6">
//           <a
//             href="#"
//             className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
//           >
//             Get started
//           </a>

//         </div>
//       </div>
//     </div>
//     <div
//       aria-hidden="true"
//       className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//     >
//       <div
//         style={{
//           clipPath:
//             'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//         }}
//         className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//       />
//     </div>
//   </div>
// </div>
