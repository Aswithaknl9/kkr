import React from "react";
import Banner from '../HomePage/Banner'
const AboutUs = () => {
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-start bg-white pt-[85px] pb-[90px] max-w-[1200px] mx-auto px-4">
        {/* Left Side - Heading */}
        <div className="md:w-1/2 border-l-4 border-[#f48c4b] pl-5 text-start md:text-left">
          <h5 className="text-[#f48c4b] text-sm font-semibold mb-2 uppercase">Intro</h5>
          <h2 className="text-2xl sm:text-3xl lg:text-[46px] font-semibold text-[#010101] leading-tight">
            About us
          </h2>
        </div>

        {/* Right Side - Description */}
        <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-left font-sans">
          <p className="text-[#666666] text-base leading-relaxed text-start">
            The argument in favor of using filler text goes something like this:
            If you use real content in the design process, anytime you reach a
            review point you’ll end up reviewing and negotiating the content
            itself and not the design.
          </p>
        </div>
      </div>
    {/* Banner Section */}
    <div className="max-w-[1200px] mx-auto px-4">
        <Banner />
    </div>
      
    </>
  );
};

export default AboutUs;
