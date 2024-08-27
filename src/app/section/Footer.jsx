import Image from "next/image";
import instagram from "../../../public/assets/instagram-svgrepo-com (1).svg";
import linkedin from "../../../public/assets/linkedin-svgrepo-com (1).svg";
import meetup from "../../../public/assets/meetup-svgrepo-com.svg";
import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Coaches", href: "/coaches" },
    { name: "workshops", href: "/workshops" },
    { name: "community", href: "/community" },
  ],
  
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        {/* <p>We are a community of dedicated coaches who strive to impact the world, one human at a time. Whether you suffer from procrastination, anxiety, or simply want to take life to the next level, here you will find the support that you need.</p> */}
        {/* <nav
          aria-label="Footer"
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav> */}
        <div className="mt-10 flex justify-center space-x-10">
          <Link href="/">
            <Image src={instagram} alt="instagram" width={50} />
          </Link>
          <Link href="/">
            <Image src={linkedin} alt="linkedin" width={50} />
          </Link>
          <Link href="/">
            <Image src={meetup} alt="meetup" width={50} />
          </Link>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
