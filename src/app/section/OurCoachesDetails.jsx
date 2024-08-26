import Image from "next/image";

import Image1 from "../../../public/assets/joana.png";
import Image2 from "../../../public/assets/nicola.png";
import Image3 from "../../../public/assets/fabricio.png";

export default function OurCoachesDetails() {
  const coaches = [
    {
      name: "NICOLA",
      imageSrc: Image2,
      speciality: [
        "Time management",
        "Planning",
        "Career change",
        "Motivation",
        "Difficult conversations",
        "Communication",
      ],
    },
    {
      name: " JOANNA",
      imageSrc: Image1,
      speciality: [
        "Leadership",
        "Team Management",
        "Project Management ",
        "Career development",
        "Motivation",
        "Cultural differences",
        "Managing virtual teams",
      ],
    },
    {
      name: "FABRICIO",
      imageSrc: Image3,
      speciality: [
        "Career change",
        "Recognition",
        "Difficult conversations",
        "Communication",
        "Presentation",
        "Public speaking",
        "Constructive feedback",
      ],
    },
  ];

  return (
    <section className="relative">
      {/* Purple background */}
      <div className="lg:bg-purple lg:h-2/5 lg:w-full lg:absolute lg:top-0 lg:left-0" />
      {/* White background */}
      <div className="lg:bg-gray lg:h-3/5 lg:w-full lg:absolute lg:bottom-0 lg:left-0" />
      <div className="relative z-10 text-center py-12">
        <h1 className="text-center text-black lg:text-white text-4xl font-bold mt-4 mb-14">
          OUR COACHES
        </h1>
        <div className="flex flex-col items-center md:flex-row md:space-y-0 md:space-x-36 justify-center">
          {coaches.map((coach, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-8 mt-6 border-yellow-500 mx-auto">
                <Image
                  src={coach.imageSrc}
                  alt={coach.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold  text-purple">
                {coach.name}
              </h3>
              <ul className="mt-4 text-left list-disc list-inside">
                {coach.speciality.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
