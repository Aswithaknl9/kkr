import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <section className="relative bg-cover bg-center text-white text-center py-24 px-6"
      style={{
        backgroundImage: "url('https://demo.casethemes.net/finano/wp-content/uploads/2018/12/bg-parallax2.jpg')",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Heading Section */}
        <p className="uppercase text-[11px] mb-2">V i d e o</p>
        <h3 className="text-2xl md:text-3xl font-semibold px-4 pb-[51px]">
          See how we work with <br /> touch of <cite>experience</cite>
        </h3>

        {/* Video Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#102068] shadow-lg hover:scale-110 transition"
          >
            <FaPlay className="text-2xl" />
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-black text-2xl"
            >
              <FaTimes />
            </button>

            {/* Embedded YouTube Video */}
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/SF4aHwxHtZ0"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default VideoSection;
