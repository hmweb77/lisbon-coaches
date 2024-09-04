import Image from "next/image";
import ImageW from "../../../public/assets/logo-white.svg";

export default function WelcomeSection() {
  return (
    <div className="bg-custom bg-cover bg-center px-6 pb-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center mb-6">
          <Image src={ImageW} alt="logo" className="w-80 h-64" priority={true} />
        </div>
        <h2 className="text-3xl font-bold text-white sm:text-5xl">
          WELCOME TO LISBON COACHES
        </h2>
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
        <p className="mt-6 text-3xl leading-8 text-white">
          We are a community of dedicated coaches who strive to impact the
          world, one human at a time. Whether you suffer from procrastination,
          anxiety, or simply want to take life to the next level, here you will
          find the support that you need.
        </p>
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
      </div>
    </div>
  );
}
