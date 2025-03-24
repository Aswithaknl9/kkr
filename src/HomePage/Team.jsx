import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Frazer Diamond",
    position: "Founder & CEO",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/team1.jpg",
  },
  {
    id: 2,
    name: "Chen Lee",
    position: "Co-Founder",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/team2.jpg",
  },
  {
    id: 3,
    name: "Emma O’Brien",
    position: "Sr. Product Engineer",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/team3.jpg",
  },
  {
    id: 4,
    name: "David Ankrum",
    position: "Co-Founder",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/team4.jpg",
  },
  {
    id: 5,
    name: "Maria De Aragon",
    position: "HRM",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/team5.jpg",
  },
  {
    id: 6,
    name: "Joe Hurt",
    position: "CTO",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/team6.jpg",
  },
  {
    id: 7,
    name: "Damien Wayne",
    position: "COO",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/team7.jpg",
  },
];

const TeamSection = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?business,team')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-black">
          <h2 className="text-lg text-[#f48c4b] uppercase tracking-widest">Our Dedicated Team</h2>
          <h3 className="lg:text-4xl text-lg  font-bold mt-2">
            We have a large number of expert team members
          </h3>
        </div>

        {/* Team Members */}
        <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }} 
              viewport={{ once: true }} 
              className="bg-white rounded-lg overflow-hidden shadow-lg group hover:bg-[#f48c4b] hover:text-white"
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.3 }} 
                viewport={{ once: true }}
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p>{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
