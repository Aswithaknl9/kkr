import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import kkr from "../assets/kkr.png";
import "../css/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  return (
    <>
      <motion.div
        className={`w-full bg-white shadow-md transition-all duration-500 ${
          isScrolled ? "fixed top-0 left-0 z-50" : "relative"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-center z-10 mx-auto">
            <img src={kkr} alt="logo" className="max-h-[110px] w-auto" />
          </div>

          {/* Contact Info - Hidden on Small Screens */}
          <div className="relative flex flex-col justify-between items-end z-10 w-full">
            <div className="hidden md:flex w-[75%] justify-center items-center gap-6 text-sm text-white bg-[#01969c] font-semibold py-[20px] min-h-[60px] top-bar">
              <a href="mailto:Kishore@kkrtax.com" className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>Kishore@kkrtax.com</span>
              </a>
              <a href="tel:14015724423" className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>9505000772</span>
              </a>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
                <span>Flat No -404, Sri Mani Sai Kalyan Arcade, X road, Balaji Nagar, Miyapur, Hyderabad</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-end w-full justify-end">
              <ul className="flex space-x-9 text-[16px] font-semibold p-2 pr-20">
                {["Home", "About us", "Services", "Blog", "Contact"].map((name, index) => (
                  <li key={index}>
                    <Link
                      to={name === "Home" ? "/" : `/${name.toLowerCase().replace(/ /g, "")}`}
                      className={`relative transition-all duration-300 ${
                        location.pathname === (name === "Home" ? "/" : `/${name.toLowerCase().replace(/ /g, "")}`)
                          ? "border-b-4 border-[#f48c4b]"
                          : ""
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button with padding */}
            <div className="p-2">
              <button onClick={toggleMobileMenu} className="lg:hidden text-black border rounded-md p-2 z-50">
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""} lg:hidden absolute top-[90%] left-0 w-full h-[100vh] bg-white p-4 shadow-md rounded-md z-0 transition-transform transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
              <ul className="flex flex-col gap-4 text-black">
                {["Home", "About us", "Services", "Blog", "Contact"].map((name, index) => (
                  <li key={index}>
                    <Link
                      to={name === "Home" ? "/" : `/${name.toLowerCase().replace(/ /g, "")}`}
                      className={`relative transition-all duration-300 ${
                        location.pathname === (name === "Home" ? "/" : `/${name.toLowerCase().replace(/ /g, "")}`)
                          ? "border-b-4 border-[#f48c4b]"
                          : ""
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
