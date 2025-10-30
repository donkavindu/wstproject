import Image from "next/image";
import Gallary01 from "../assets/photos/g01.jpeg";
import Gallary02 from "../assets/photos/g02.jpeg";
import Gallary03 from "../assets/photos/g03.jpeg";
import Gallary04 from "../assets/photos/g04.jpeg";
import Gallary05 from "../assets/photos/g05.jpeg";
import Gallary06 from "../assets/photos/g06.jpeg";
import Gallary07 from "../assets/photos/g07.jpeg";
import Gallary08 from "../assets/photos/g08.jpeg";
import Gallary09 from "../assets/photos/g09.jpeg";
import Gallary10 from "../assets/photos/g10.jpeg";

const PortfolioSection = () => {
  const images = [
    { src: Gallary01, alt: "Gallary01" },
    { src: Gallary02, alt: "Gallary02" },
    { src: Gallary03, alt: "Gallary03" },
    { src: Gallary04, alt: "Gallary04" },
    { src: Gallary05, alt: "Gallary05" },
    { src: Gallary06, alt: "Gallary06" },
    { src: Gallary07, alt: "Gallary07" },
    { src: Gallary08, alt: "Gallary08" },
    { src: Gallary09, alt: "Gallary09" },
    { src: Gallary10, alt: "Gallary10" }
  ];

  return (
    <div className="min-h-screen flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;