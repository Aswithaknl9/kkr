import React from 'react';
import rupee from '../assets/rupee.jpg';
import AboutUs from '../HomePage/Aboutus';
import ServiceGrid from '../HomePage/Service';
import Tap from '../HomePage/Tap';
import Icons from '../HomePage/Icons';
import TeamSection from '../HomePage/Team';
import Card from '../HomePage/Card';
import Logo from '../HomePage/Logo';
import ContactForm from '../HomePage/Contact';
import PhoneNumber from '../HomePage/Phonenumber';

const Home = () => {
  return (
    <>
      <div 
        className="flex items-center justify-end min-h-screen bg-cover bg-right px-10"
        style={{ backgroundImage: `url(${rupee})` }}
      >
        <div className="w-full md:w-1/2 lg:w-[30%] bg-white p-8 shadow-lg rounded-lg relative max-w-lg mr-10">
          <h2 className="text-2xl font-semibold text-[#1a1e66] mb-4 text-center">
            Get FREE Quote
          </h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded" required />
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" required />
            <PhoneNumber />
            <textarea placeholder="Your Requirements" className="w-full p-3 border border-gray-300 rounded" rows="4" required></textarea>
            <button type="submit" className="w-full bg-[#1a1e66] text-white py-3 rounded hover:bg-[#142355] transition">
              Get FREE Quote
            </button>
          </form>
        </div>
      </div>

      <AboutUs />
      <ServiceGrid />
      <Tap />
      <Icons />
      <TeamSection />
      <Card />
      <Logo />
      <ContactForm />
    </>
  );
};

export default Home;
