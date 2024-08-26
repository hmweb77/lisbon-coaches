import Image from "next/image";
import React from "react";
import Image1 from "../../../public/assets/lad-ins.png";
import Image2 from "../../../public/assets/lad-work.png";
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
      <div className="bg-purple flex justify-around items-center p-10">
        <Image alt="project" src={Image1} />
        <Image alt="project" src={Image2} />
      </div>
    </section>
  );
}
