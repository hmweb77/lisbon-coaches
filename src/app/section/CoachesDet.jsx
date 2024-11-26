import Image from "next/image";
import Image1 from "../../../public/assets/joana.png";
import Image2 from "../../../public/assets/nicola.png";
import Image3 from "../../../public/assets/fabricio.png";
import Image4 from "../../../public/assets/Andreas.jpg";
import Image6 from "../../../public/assets/sonia.jpg";

export default function CoachesDets() {
  const coaches = [
    {
      name: "NICOLA BOSO",
      imageSrc: Image2,
      quote: "“Optimize your day - Maximize your life”",
      description:
        "GAIN 8 HOURS EVERY WEEK TO REINVEST IN WHAT MATTERS TO YOU. I customize and develop weekly plans for ambitious individuals who desire to maximize wealth, health, and relationship opportunities. Stop the wheel of procrastination and take the driver's seat with scientific-based strategies and tools. Learn more about this unique and practical system that consistently boosts well-being and performance.",
      buttonText: "Contact Nicola",
    },
    {
      name: "JOANNA WAKULUK",
      imageSrc: Image1,
      quote: "“Follow your dreams, they know the way!”",
      description:
        "I´m a graduate Social Psychologist with experience in Team Management in international corporations and Non-Profit organizations. Currently, I´m working as the Project Manager for global projects. I love working with people and exploring their full potential. I believe that leadership is a beautiful skill-building journey, one that transcends the boundaries of professional and personal life. Are you ready to embark on this journey with me? Let's fasten our seatbelts!",
      buttonText: "Contact Joanna",
    },
    {
      name: "FABRICIO MONTEIRO",
      imageSrc: Image3,
      quote: "“Holistic Coaching: Integrating Mindfulness and Goal Setting”",
      description:
        "The key assumptions underpinning my approach to coaching are centered on the belief in the inherent potential and capacity for growth within every individual. Clients possess the resources and solutions within themselves to overcome challenges and achieve their goals. Give meaningful and sustainable transformation to your life and take ownership. The methodologies and philosophies that inform my techniques and approaches include humanistic psychology, habit stacking, adult learning theory, positive psychology, and cognitive-behavioral principles.",
      buttonText: "Contact Fabricio",
    },
    {
      name: "ANDREAS GALSTERER",
      imageSrc: Image4,
      quote: "",
      description:
        "Andreas’s work as an independent systemic consultant, communication trainer, and coach is specializing in Systemic Leadership & Organizational Development (OSM – Open System Model). His work helps organizations and leaders gain clarity in their systems, recognize underlying principles, and improve social dynamics to enhance performance and future success. Andreas fosters a shift from power to empowerment, emphasizing decentralized systems and collective decision-making. With a background in global business and strategic management, he has led projects across various industries worldwide. Andreas is driven by a passion for creating innovative structures that support human evolution and organizational transformation. Born in Germany, his international experience spans Europe, North and South America, and Australasia.",
      buttonText: "Contact Andreas",
    },
    {
      name: "VEB BANSAL",
      imageSrc: Image4,
      quote: "",
      description:
        "I'm Veb, a fractional CMO for B2B SaaS companies. I have over 15 years of experience in launching and scaling technology companies in B2B enterprise and SaaS markets across the US, Europe, and India. My mission is to help founders grow their B2B startups faster and better using my expertise in product marketing, demand generation, marketing operations, and growth analytics. I work with clients to shape a clear B2B strategy, start the growth process, and set up the pillars for sustained B2B growth. I´ve helped companies create new categories, enter new markets, and accelerated growth with fearless execution and data-driven insights.",
      buttonText: "Contact Veb",
    },
    {
      name: "SONIA SILVA",
      imageSrc: Image6,
      quote: "“Follow your dreams, they know the way!”",
      description:
        "I´m a graduate Social Psychologist with experience in Team Management in international corporations and Non-Profit organizations. Currently, I´m working as the Project Manager for global projects.I love working with people and exploring their full potential. I believe that leadership is a beautiful skill-building journey, one that transcends the boundaries of professional and personal life. Are you ready to embark on this journey with me? Let's fasten our seatbelts!",
      buttonText: "Contact Sonia",
    },
    {
      name: "MIGENA GJERAZI",
      imageSrc: Image6,
      quote: "“Follow your dreams, they know the way!”",
      description:
        "I´m a graduate Social Psychologist with experience in Team Management in international corporations and Non-Profit organizations. Currently, I´m working as the Project Manager for global projects.I love working with people and exploring their full potential. I believe that leadership is a beautiful skill-building journey, one that transcends the boundaries of professional and personal life. Are you ready to embark on this journey with me? Let's fasten our seatbelts!",
      buttonText: "Contact Migena",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-24">
      {coaches.map((coach, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center mb-24 ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <div className="flex flex-col items-center lg:w-2/5 mb-8 lg:mb-0">
            <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg border-4 border-yellow-500 flex justify-center items-center">
              <Image
                src={coach.imageSrc}
                alt={coach.name}
                className="w-full h-full object-cover"
              />
            </div>
            <button className="mt-6 bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300">
              {coach.buttonText}
            </button>
          </div>

          {/* Text Section */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <blockquote className="italic text-purple-600 text-xl mb-6 lg:mb-8">
              {coach.quote}
            </blockquote>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 lg:mb-6">
              {coach.name}
            </h2>
            <p className="text-gray-700 leading-relaxed">{coach.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
