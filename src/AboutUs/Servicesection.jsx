import React from "react";
import { motion } from "framer-motion";
import crown from "../assets/crown.png";
import growchart from "../assets/grow-chart.png";
import activitytracker from "../assets/activity-tracker (1).png";

const services = [
  {
    id: 1,
    title: "Business Growth",
    description:
      "The argument in favor of using filler text goes some labore et dolore magna aliqua consectetur.",
    icon: crown,
  },
  {
    id: 2,
    title: "Strategy Process",
    description:
      "The argument in favor of using filler text goes some labore et dolore magna aliqua consectetur.",
    icon: activitytracker ,
  },
  {
    id: 3,
    title: "Finance Manage",
    description:
      "The argument in favor of using filler text goes some labore et dolore magna aliqua consectetur.",
    icon: growchart,
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-[#f2f3fa] pt-[55px] pb-[110px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="px-4 pt-[90px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.2 }}
            >
              <div className="bg-white rounded-lg pb-[44px] px-[40px] flex flex-col items-center text-center shadow-lg relative">
              {/* Icon Container (Overlay) */}
              <div className="absolute -top-[45px] flex items-center justify-center w-[90px] h-[90px] bg-gradient-to-b from-[#3140fc] to-[#091394] text-white rounded-full shadow-md">
                <img src={service.icon} alt={service.title} className="w-[50px] h-[50px]" />
              </div>

              {/* Title & Description (Padding added to avoid overlap) */}
              <div className="pt-[60px]">
                <h1 className="text-[#1a1e66] text-[18px] font-semibold mb-[15px]">
                  {service.title}
                </h1>
                <p className="text-[#1a1e66] text-[16px]">{service.description}</p>
              </div>
            </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
