import React from "react";
import { motion } from "framer-motion";
import Features from "./Features";

const AboutUsSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        {/* Content Section */}
        <div className="flex flex-wrap items-center">
          {/* Left Side - Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-6/12 px-4"
          >
            <div className="relative inline-block">
              {/* Background Image */}
              <div className="relative z-10">
                <img
                  src="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/banner1.jpg"
                  alt="Banner 1"
                  className="w-full max-w-full md:max-w-[170%] h-auto rounded-lg pr-4 md:pr-[100px] pb-4 md:pb-[90px]"
                />
              </div>

              <div
                className="absolute top-11 left-0 md:left-[-150px] right-0 bottom-11 bg-[url('https://demo.casethemes.net/finano/wp-content/themes/finano/assets/images/dot-banner.png')] bg-repeat w-[80px] md:w-[150px] z-0"
              ></div>

              {/* Second Image as Background */}
              <div
                className="absolute top-[45px] md:bottom-0 left-10 md:left-20 right-0 bg-cover bg-center opacity-15 z-20 w-[250px] md:w-[400px] h-[220px] md:h-[365px]"
                style={{
                  backgroundImage:
                    "url(https://demo.casethemes.net/finano/wp-content/uploads/2018/12/banner2.jpg)",
                }}
              ></div>
            </div>
          </motion.div>

          {/* Right Side - Progress Bars & Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full md:w-6/12 p-4"
          >
            <div className="space-y-8 p-4 md:p-[15px]"> 
              <Features />

              {/* Progress Bars */}
              {[
                { title: "Finance", value: 95 },
                { title: "Business", value: 90 },
                { title: "Investment", value: 93 },
              ].map((item, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-base md:text-lg font-semibold text-[#6b7280]">{item.title}</h3>
                  <div className="relative w-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: 1 + index * 0.3 }}
                      className="bg-black h-2 flex justify-end items-center relative"
                    >
                      {/* Overlayed Percentage Label */}
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.3 }}
                        className="absolute right-[-18px] md:right-[-18px]  top-[0%] md:top-[0px] transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white text-xs bg-black rounded-full"
                      >
                        {item.value}%
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
