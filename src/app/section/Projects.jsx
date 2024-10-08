import Image from "next/image";
import React from "react";
import Image1 from "../../../public/assets/lad-ins.png";
import Image2 from "../../../public/assets/lad-work.png";
import Link from "next/link";
export default function Projects() {
  return (
    <section>
      <div className="bg-white py-10">
        <div className="flex justify-center space-x-2 my-10">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <span
                key={index}
                className="w-4 h-4 bg-yellow-500 rounded-full"
              ></span>
            ))}
        </div>
        <h1 className="text-center text-black text-5xl font-bold mt-4 mb-14">
          OUR PROJECTS
        </h1>
      </div>
      <div className="bg-purple flex flex-col md:flex-row justify-around items-center p-10 space-y-6 md:space-y-0 md:space-x-6">
       <Link href="/community">
       <Image alt="project" src={Image1} />
       </Link> 
       <Link href="/workshops">
       <Image alt="project" src={Image2} />
       </Link>
    
      </div>
    </section>
  );
}
