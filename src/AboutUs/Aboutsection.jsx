import React from "react";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-6/12 text-center">
            <div id="ct-heading" className="mb-6">
              <div className="text-[#102068] uppercase text-[11px]">A b o u t U s</div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1a1e66]">
                We are here to manage your finance with <cite className="text-blue-600">experience</cite>
              </h3>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap items-center mt-6">
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
                  className="max-w-[170%] h-auto rounded-lg pr-[100px] pb-[90px]"
                />
              </div>

              <div
                className="absolute top-11 left-[-150px] right-0 bottom-11 bg-[url('https://demo.casethemes.net/finano/wp-content/themes/finano/assets/images/dot-banner.png')] bg-repeat w-[150px] z-0"
              ></div>

              {/* Second Image as Background */}
              <div
                className="absolute top-[45px] bottom-0 left-20 right-0 bg-cover bg-center opacity-15 z-20 w-[400px] h-[365px]"
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
            <div className="space-y-10 pb-[22px]"> {/* Added spacing between items */}
              {[
                { title: "Finance", value: 95 },
                { title: "Business", value: 90 },
                { title: "Investment", value: 93 },
              ].map((item, index) => (
                <div key={index} className="mb-6"> {/* Increased margin-bottom */}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="relative w-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: 1 + index * 0.3 }}
                      className="bg-[#1a1f66] h-2  flex justify-end items-center relative"
                    >
                      {/* Overlayed Percentage Label (Moved Right & Circular) */}
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.3 }}
                        className="absolute right-[-18px] top-[0px] transform -translate-y-1/2 translate-x-2 w-10 h-10 flex items-center justify-center text-white text-xs bg-black rounded-full"
                      >
                        {item.value}%
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Paragraph Content */}
            <p className="mt-4 mb-[26px] text-[#1a1f66]">
              The argument in favor of using filler text goes something like
              this: If you use real content in the{" "}
              <a href="#" className="underline text-blue-600">
                design process
              </a>
              , anytime you reach a review point you’ll end up reviewing and
              negotiating the content itself and not the design.
            </p>
            <p className="mt-2 text-[#1a1f66]">
              Aenean tincidunt id mauris id auctor. Donec at ligula lacus.
              Nulla dignissim mi quis neque interdum, quis porta sem finibus.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
