import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import BlogGrid from "../Blog/BlogGrid";

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

        <div className="relative z-10 border-l-4 pl-4 md:pl-[26px] border-blue-600">
          <h1 className="text-white text-[40px] md:text-[60px] font-semibold">
            Blog <cite className="font-playfair">grid</cite>
          </h1>
          <div className="flex items-center text-white mt-2 text-[12px] md:text-[14px] space-x-2">
            <p>Home</p>
            <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
            <p>Blog Grid 3 Columns</p>
          </div>
        </div>
      </section>

      <BlogGrid />
    </>
  );
};

export default About;
