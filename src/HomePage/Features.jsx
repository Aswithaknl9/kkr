import React from "react";
import online from "../assets/support.png"; 
import hourglass from "../assets/sand.png"; 
import brain from "../assets/brain1.png"; 

const Features = () => {
  const features = [
    {
      icon: online,
      title: "24/7 full online support",
    },
    {
      icon: hourglass,
      title: "12 years of experience",
    },
    {
      icon: brain,
      title: "Creative finance idea",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 bg-white group transition-all duration-300"
        >
          {/* Icon */}
          <div className="w-[117px] h-[117px] flex items-center justify-center rounded-full hover:shadow-xl bg-[#f48c4b] group-hover:bg-black transition-all duration-300">
            <img src={feature.icon} alt="feature-icon" className="w-14 h-14" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mt-4 transition-all duration-300 group-hover:text-[#f48c4b]">
            {feature.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Features;
