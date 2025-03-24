import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import BlogGrid from "../Services/BlogGrid";

const About = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center text-white py-20 px-4 md:px-6 flex items-center"
        style={{
          backgroundImage:
            "url('https://demo.casethemes.net/finano/wp-content/themes/finano/assets/images/bg-page-title.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Content - Aligned Left */}
        <div className="relative border-l-4 pl-5 border-blue-600 text-left max-w-[600px] ml-4 md:ml-10">
          <h1 className="text-white text-[40px] md:text-[60px] font-semibold">
            Services <cite className="font-playfair">Style 1</cite>
          </h1>
          <div className="flex items-center text-white mt-2 text-[12px] md:text-[14px] space-x-2">
            <p>Home</p>
            <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
            <p>Services 1</p>
          </div>
        </div>
      </section>

      <BlogGrid />
    </>
  );
};

export default About;
