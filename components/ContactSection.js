import Image from "next/image";
import Logo01 from "../assets/photos/lg01.png";
import Logo02 from "../assets/photos/lg02.png";

const ContactSection = () => {
  return (
    <div className="min-h-screen flex justify-center items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl h-full flex pt-8 md:pt-25 flex-col items-center relative overflow-hidden ">
        <div className="w-full flex flex-col items-center gap-3 text-center px-4 lg:mb-30">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium">
            Get in <span className="text-[#f0a031]">Touch.</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl">
            We're here to help you and your pets. Have a question or suggestion?
            <br className="hidden sm:block" />
            Reach out we'd love to hear from you.
          </p>
        </div>
        
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-15 mt-8 lg:mt-0 px-4">
          <div className="bg-[#fbf2eb] h-auto min-h-[300px] w-full max-w-[600px] lg:w-[600px] rounded-3xl lg:rounded-4xl flex justify-center items-center flex-col p-6 lg:p-5">
            <Image 
              src={Logo01}
              alt="General Support icon"
              height={80}
              className="w-16 h-16 lg:w-20 lg:h-20 mb-4"
            />
            <h2 className="text-xl lg:text-2xl font-medium text-center">General Support</h2>
            <p className="text-base lg:text-xl text-center mt-2">
              Our friendly team is here to answer all your questions.
            </p>
            <p className="text-sm text-[#bf8c61] mt-4">hello@pawmanager.com</p>
          </div>
          
          <div className="bg-[#ebe2fd] h-auto min-h-[300px] w-full max-w-[600px] lg:w-[600px] rounded-3xl lg:rounded-4xl flex justify-center items-center flex-col p-6 lg:p-5">
            <Image 
              src={Logo02}
              alt="Response Time icon"
              height={80}
              className="w-16 h-16 lg:w-20 lg:h-20 mb-4"
            />
            <h2 className="text-xl lg:text-2xl font-medium text-center">Response Time</h2>
            <p className="text-base lg:text-xl text-center mt-2">
              We aim to respond to all inquiries within 24 hours.
            </p>
            <p className="text-sm text-[#bf8c61] mt-4">0112547854</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;