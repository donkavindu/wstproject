import Image from "next/image";
import Sponsor01 from "../assets/photos/sp01.png";
import Sponsor02 from "../assets/photos/sp02.png";
import Sponsor03 from "../assets/photos/sp03.png";
import Sponsor04 from "../assets/photos/sp04.png";
import Sponsor05 from "../assets/photos/sp05.png";

const AboutSection = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-center flex-col relative overflow-hidden ">
      {/* Sponsors Section */}
      <div className="bg-[#ffe7c5] w-full py-4 md:py-6 lg:h-[15vh] flex flex-col md:flex-row justify-around items-center text-[#bf8c61] gap-4 md:gap-0">
        <div className="flex items-center gap-2">
          <div>
            <Image 
              src={Sponsor01} 
              alt="sponsor01" 
              width={40} 
              height={40}
              className="w-8 h-8 md:w-12 md:h-12 lg:w-15 lg:h-15" 
            />
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg">PawVets</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image 
              src={Sponsor02} 
              alt="sponsor02" 
              width={40} 
              height={40}
              className="w-8 h-8 md:w-12 md:h-12 lg:w-15 lg:h-15" 
            />
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg">Wholesome Bowl</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image 
              src={Sponsor03} 
              alt="sponsor03" 
              width={40} 
              height={40}
              className="w-8 h-8 md:w-12 md:h-12 lg:w-15 lg:h-15" 
            />
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg">WagTime</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image 
              src={Sponsor04} 
              alt="sponsor04" 
              width={40} 
              height={40}
              className="w-8 h-8 md:w-12 md:h-12 lg:w-15 lg:h-15" 
            />
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg">PetSure</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image 
              src={Sponsor05} 
              alt="sponsor05" 
              width={40} 
              height={40}
              className="w-8 h-8 md:w-12 md:h-12 lg:w-15 lg:h-15" 
            />
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg">Happy Tails</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-4 md:px-8 lg:w-[85%] h-full flex flex-1">
        <div className="flex items-center flex-col justify-center gap-6 md:gap-8 lg:gap-15 py-8 md:py-12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-tight">
            Your <span className="text-[#f0a031]">Pet's World,</span> Perfectly Organized.
          </h2>
          <p className="text-base md:text-lg lg:text-2xl w-full md:w-[80%] lg:w-[60%] leading-relaxed">
            PettyWorld was founded on a simple belief: Managing your pet's care
            should be effortless. We are a dedicated platform built for modern
            pet owners who want the best for their companions. Forget scattered
            notes, lost vet papers, and forgotten flea treatments. Our tools
            help you centralize everything health histories, daily routines, and
            emergency contacts into one intuitive dashboard. We empower you to
            provide the best possible care, ensuring your pet is happy, healthy,
            and thriving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;