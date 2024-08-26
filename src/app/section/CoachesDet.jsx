


    import Image from "next/image";
    import Image1 from "../../../public/assets/joana.png";
    import Image2 from "../../../public/assets/nicola.png";
    import Image3 from "../../../public/assets/fabricio.png";
    
    export default function CoachesDets() {
      const coaches = [
        {
          name: "NICOLA BOSO",
          imageSrc: Image2,
          quote: "Optimize your day - Maximize your life",
          description: [
            "GAIN 8 HOURS EVERY WEEK TO REINVEST IN WHAT MATTERS TO YOU",
            "I customize and develop weekly plans for ambitious individuals who desire to maximize wealth, health, and relationship opportunities.",
            "Stop the wheel of procrastination and take the driver’s seat with scientific-based strategies and tools.",
            "Learn more about this unique and practical system that consistently boosts well-being and performance.",
          ],
          buttonText: "Contact Nicola",
        },
        {
          name: "JOANNA WAKULUK",
          imageSrc: Image1,
          quote: "Follow your dreams, they know the way!",
          description: [
            "I’m a graduate Social Psychologist with experience in Team Management in international corporations and Non-Profit organizations. Currently, I’m working as the Project Manager for global projects.",
            "I love working with people and exploring their full potential. I believe that leadership is a beautiful skill-building journey, one that transcends the boundaries of professional and personal life.",
            "Are you ready to embark on this journey with me? Let’s fasten our seatbelts!",
          ],
          buttonText: "Contact Joanna",
        },
        {
          name: "FABRICIO MONTEIRO",
          imageSrc: Image3,
          quote: "Holistic Coaching: Integrating Mindfulness and Goal Setting",
          description: [
            "The key assumptions underpinning my approach to coaching are centered on the belief in the inherent potential and capacity for growth within every individual.",
            "Clients possess the resources and solutions within themselves to overcome challenges and achieve their goals.",
            "Give meaningful and sustainable transformation to your life and take ownership.",
            "The methodologies and philosophies that inform my techniques and approaches include humanistic psychology, habit stacking, adult learning theory, positive psychology, and cognitive-behavioral principles.",
          ],
          buttonText: "Contact Fabricio",
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
              <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-16 lg:ml-16">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-yellow-500">
                  <Image
                    src={coach.imageSrc}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="mt-8 bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300">
                  {coach.buttonText}
                </button>
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <blockquote className="italic text-purple-600 text-xl mb-6 lg:mb-8">
                  “{coach.quote}”
                </blockquote>
                <h2 className="text-3xl font-bold text-gray-800 mb-4 lg:mb-6">
                  {coach.name}
                </h2>
                {coach.description.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4 lg:mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>
      );
    }
    