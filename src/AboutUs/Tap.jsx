import React from 'react';
import Tap2 from './Tap2';
const Section33 = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="wpb_column vc_column_container vc_col-sm-6 rm-padding-lg">
      <div className="flex flex-col md:flex-row items-center bg-white ">
      {/* Left Side - Heading */}
      <div className="md:w-1/2">
        <h5 className="text-[#1a1e66] uppercase text-sm mb-3">Why choose us</h5>
        <h2 className="text-3xl font-semibold text-[30px] text-[#1a1e66] ">There are many companies but why choose us</h2>
      </div>

      {/* Right Side - Description */}
      <div className="md:w-1/2 mt-6 md:mt-0 font-sans">
        <p className="text-[#1a1e66] text-base">
        The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.
        </p>
      </div>
      
    </div>
    <Tap2 />
      </div>
    </div>
  );
};

export default Section33;
