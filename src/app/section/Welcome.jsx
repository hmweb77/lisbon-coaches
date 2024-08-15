import Image from "next/image";
import Head from "../../../public/assets/hero-design1.png"
// components/WelcomeSection.jsx
export default function WelcomeSection() {
    return (
      <section className="bg-purple text-center ">
        <div>
            <Image alt="lisbon-coaches-image"  className="w-full "  src={Head} />
        </div>
        <h1 className="text-white font-bold text-4xl mb-4">WELCOME TO LISBON COACHES</h1>
  
        <div className="flex justify-center space-x-2 mb-6">
          {Array(12).fill(0).map((_, index) => (
            <span key={index} className="w-4 h-4 bg-yellow-500 rounded-full"></span>
          ))}
        </div>
  
        <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
          We are a community of dedicated coaches who strive to impact the world, one human at a time.
          Whether you suffer from procrastination, anxiety, or simply want to take life to the next level,
          here you will find the support that you need.
        </p>
  
        <div className="flex justify-center space-x-2 mb-6">
          {Array(12).fill(0).map((_, index) => (
            <span key={index} className="w-4 h-4 bg-yellow-500 rounded-full"></span>
          ))}
        </div>
  
        <button className="bg-yellow-500 text-blue-900 font-semibold py-2 px-6 rounded-full">
          Subscribe Newsletter
        </button>
      </section>
    );
  }
  