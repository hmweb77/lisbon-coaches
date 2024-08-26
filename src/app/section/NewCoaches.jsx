import Image from "next/image";

import Image1 from "../../../public/assets/joana.png";
import Image2 from "../../../public/assets/nicola.png";
import Image3 from "../../../public/assets/fabricio.png";

export default function OurCoaches() {
  const coaches = [
    {
      name: "NICOLA",
      imageSrc: Image2,
    },
    {
      name: " JOANNA",
      imageSrc: Image1,
    },
    {
      name: "FABRICIO",
      imageSrc: Image3,
    },
  ];

  return (
    <section className="relative">
      {/* Purple background */}
      <div className="bg-purple h-1/2 w-full absolute top-0 left-0" />
      {/* White background */}
      <div className="bg-gray h-1/2 w-full absolute bottom-0 left-0" />
      <div className="relative z-10 text-center py-12">
        <h1 className="text-center text-white text-4xl font-bold mt-4 mb-14">
          OUR COACHES
        </h1>
        <div className="flex flex-col items-center md:flex-row md:space-y-0 md:space-x-24 justify-center">
          {coaches.map((coach, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-8 border-yellow-500 mx-auto">
                <Image
                  src={coach.imageSrc}
                  alt={coach.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold  text-purple">
                {coach.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
