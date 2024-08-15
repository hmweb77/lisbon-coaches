// components/Contributors.js
import Image from 'next/image';

const contributors = [
 
  { name: 'Contributor 1', src: im1 },
  { name: 'Contributor 2', src: im1 },
  { name: 'Contributor 1', src: im1 },
  { name: 'Contributor 2', src: im1 },
    { name: 'Contributor 1', src: im1 },
    { name: 'Contributor 2', src: im1 },

];

const Contributors = () => {
    return (
      <section className="bg-black py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-white text-3xl font-bold mb-10">Contributors</h2>
          <div className="grid grid-cols-8 gap-4">
            {contributors.map((contributor, index) => (
              <div key={index} className="relative w-20 h-20 mx-auto">
                <Image
                  src={contributor.src}
                  alt={contributor.name}
                  layout="fill"
                  className="rounded-full border-2 border-green-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  


export default Contributors;
