import React from 'react';
import kkr from "../assets/kkr.png"


const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="site-footer bg-[#222222] text-[#999999] px-auto mt-auto">
        {/* Top Footer Section */}
        <div className="top-footer pt-[112px] pb-[86px] bg-black">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo & Info Section */}
            <div className="footer-logo-and-info space-y-6">
              <div className="footer-logo">
                <a href="https://demo.casethemes.net/finano">
                  <img
                    src={kkr}
                    alt="Footer Logo"
                    className="h-[100px]"
                  />
                </a>
              </div>
              <div className="contact-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <i className="fa fa-phone mr-3 text-white"></i>+91 9505000772
                  </li>
                  <li className="flex items-center">
                    <i className="fa fa-envelope mr-3 text-white"></i>Kishore@kkrtax.com
                  </li>
                  <li className="flex items-center">
                    <i className="fa fa-home mr-3 text-white"></i>Flat No -404, Sri Mani Sai Kalyan Arcade, X road, Balaji Nagar, Miyapur, Hyderabad, Telangana 500049.
                  </li>
                </ul>
              </div>
            </div>

            {/* Links Section */}
            <div className="links-section">
              <h2 className="text-[24px] text-white font-semibold mb-4">Links</h2>
              <ul className="space-y-3">
                <li className="group flex items-center space-x-2 hover:animate-fade-right hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-500 group-hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <a href="#" className="group-hover:text-red-500">Home</a>
                </li>
                <li className="group flex items-center space-x-2 hover:animate-fade-right hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-500 group-hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <a href="https://demo.casethemes.net/finano/services-1/" className="group-hover:text-red-500">Services</a>
                </li>
                <li className="group flex items-center space-x-2 hover:animate-fade-right hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-500 group-hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <a href="https://demo.casethemes.net/finano/about-us/" className="group-hover:text-red-500">About Us</a>
                </li>
                <li className="group flex items-center space-x-2 hover:animate-fade-right hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-500 group-hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <a href="https://demo.casethemes.net/finano/testimonial/" className="group-hover:text-red-500">Testimonial</a>
                </li>
                <li className="group flex items-center space-x-2 hover:animate-fade-right hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-500 group-hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <a href="https://demo.casethemes.net/finano/blog-standard-sidebar-right/" className="group-hover:text-red-500">News</a>
                </li>
                <li className="group flex items-center space-x-2 hover:animate-fade-right hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-500 group-hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <a href="#" className="group-hover:text-red-500">Contact</a>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="support-section">
              <h2 className="text-[24px] text-white font-semibold mb-4">SUPPORT</h2>
              <ul className="space-y-3">
                <li><a href="https://demo.casethemes.net/finano/contact/" className="hover:text-red-500 hover:underline">Contact Us</a></li>
                <li><a href="https://demo.casethemes.net/finano/home-5/" className="hover:text-red-500 hover:underline">Submit a Ticket</a></li>
                <li><a href="https://demo.casethemes.net/finano/home-5/" className="hover:text-red-500 hover:underline">Visit Knowledge Base</a></li>
                <li><a href="https://demo.casethemes.net/finano/home-5/" className="hover:text-red-500 hover:underline">Support System</a></li>
                <li><a href="https://demo.casethemes.net/finano/home-5/" className="hover:text-red-500 hover:underline">Refund Policy</a></li>
                <li><a href="https://demo.casethemes.net/finano/home-5/" className="hover:text-red-500 hover:underline">Professional Services</a></li>
              </ul>
            </div>

            {/* Gallery Section */}
            <div className="gallery-section">
              <h2 className="text-[24px] text-white font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-3 gap-2">
                <a href="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog1-800x560.jpg">
                  <img src="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog1-580x580.jpg" alt="Blog 1" className="object-cover w-full h-24 rounded-md"/>
                </a>
                <a href="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog2-800x560.jpg">
                  <img src="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog2-580x580.jpg" alt="Blog 2" className="object-cover w-full h-24 rounded-md"/>
                </a>
                <a href="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog3-800x560.jpg">
                  <img src="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog3-580x580.jpg" alt="Blog 3" className="object-cover w-full h-24 rounded-md"/>
                </a>
                <a href="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog3-800x560.jpg">
                  <img src="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog4-580x580.jpg" alt="Blog 4" className="object-cover w-full h-24 rounded-md"/>
                </a>
                <a href="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog3-800x560.jpg">
                  <img src="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog5-580x580.jpg" alt="Blog 5" className="object-cover w-full h-24 rounded-md"/>
                </a>
                <a href="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog3-800x560.jpg">
                  <img src="https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog6-580x580.jpg" alt="Blog 6" className="object-cover w-full h-24 rounded-md"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="bottom-footer bg-[#222222] py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="bottom-copyright text-sm text-gray-500">
              2025 © All rights reserved by <a href="https://themeforest.net/user/case-themes/portfolio" className="text-white">CaseThemes</a>
            </div>
            <div className="bottom-social flex space-x-4">
              <label className="text-sm">Follow us: </label>
              <a href="#" className="hover:text-red-500">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="#" className="hover:text-red-500">
                <i className="fab fa-twitter-square text-2xl"></i>
              </a>
              <a href="#" className="hover:text-red-500">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="hover:text-red-500">
                <i className="fab fa-google-plus-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
