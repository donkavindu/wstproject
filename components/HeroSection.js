import Image from "next/image";
import HeroImg from "../assets/photos/hero.png";

const HeroSection = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center text-8xl text-center overflow-hidden relative">
        <div className="w-[85%] h-full flex pt-16 flex-col md:flex-row">
          <div className="flex-1 w-full h-full flex flex-col justify-center gap-7">
            <h1 className="font-bold text-left text-4xl md:text-6xl lg:text-8xl">
              Your Pet's <span className="text-[#f0a031]">Digital Home.</span>
            </h1>
            <p className="text-lg md:text-xl text-left">
              Easily manage health records, daily routines, and precious moments
              for every pet you love.
            </p>
          </div>
          <div className="flex-1 hidden md:block">
            <Image
              src={HeroImg}
              alt="hero"
              className="absolute -right-[25%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;