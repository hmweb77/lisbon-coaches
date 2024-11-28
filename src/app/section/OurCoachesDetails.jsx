import Image from "next/image";

import Image1 from "../../../public/assets/joana.png";
import Image2 from "../../../public/assets/nicola.png";
import Image3 from "../../../public/assets/fabricio.png";
import Image4 from "../../../public/assets/Andreas.jpg";
import Image5 from "../../../public/assets/sonia.jpg";
import Link from "next/link";
export default function OurCoachesDetails() {
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
    {
      name: "ANDREAS",
      imageSrc: Image4,
    },
    {
      name: "Sonia",
      imageSrc: Image5,
    },
  ];

  return (
    <section className="relative">
      {/* Purple background */}
      <div className="lg:bg-purple lg:h-3/5 lg:w-full lg:absolute lg:top-0 lg:left-0" />
      {/* White background */}
      <div className="lg:bg-gray lg:h-2/5 lg:w-full lg:absolute lg:bottom-0 lg:left-0" />
      <div className="relative z-10 text-center py-12">
        <h1 className="text-center text-black lg:text-white text-4xl font-bold mt-4 mb-14">
          OUR COACHES
        </h1>
        <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-12 justify-center">
  {coaches.map((coach, index) => (
    <div key={index} className="text-center">
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-yellow-500">
        <Link href="/coaches">
          <Image
            src={coach.imageSrc}
            alt={coach.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <h3 className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-purple">
        {coach.name}
      </h3>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
