import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "fa-chart-line",
    title: "Finance Management",
    description: "Excepteur sint occaecat cupidatat non proi dent, sunt in culpa qui...",
    link: "https://demo.casethemes.net/finano/service/finance-management/",
  },
  {
    icon: "fa-clipboard-list",
    title: "Banking Investigation",
    description: "Excepteur sint occaecat cupidatat non proi dent, sunt in culpa qui...",
    link: "https://demo.casethemes.net/finano/service/banking-investigation/",
  },
  {
    icon: "fa-shield-alt",
    title: "Business Insurance",
    description: "Excepteur sint occaecat cupidatat non proi dent, sunt in culpa qui...",
    link: "https://demo.casethemes.net/finano/service/business-insurance/",
  },
  {
    icon: "fa-car",
    title: "Car Insurance",
    description: "Excepteur sint occaecat cupidatat non proi dent, sunt in culpa qui...",
    link: "https://demo.casethemes.net/finano/service/car-insurance/",
  },
  {
    icon: "fa-check-circle",
    title: "Market Research",
    description: "Excepteur sint occaecat cupidatat non proi dent, sunt in culpa qui...",
    link: "https://demo.casethemes.net/finano/service/market-research/",
  },
  {
    icon: "fa-home",
    title: "Home Insurance",
    description: "Excepteur sint occaecat cupidatat non proi dent, sunt in culpa qui...",
    link: "https://demo.casethemes.net/finano/service/home-insurance/",
  },
  {
    icon: "fa-heart",
    title: "Life Insurance",
    description: "Excepteur sint occaecat cupidatat non proi dent, sunt in culpa qui...",
    link: "https://demo.casethemes.net/finano/service/life-insurance/",
  },
  {
    icon: "fa-medkit",
    title: "Health Insurance",
    description: "Excepteur sint occaecat cupidatat non proi dent, sunt in culpa qui...",
    link: "https://demo.casethemes.net/finano/service/health-insurance/",
  },
];

const ServiceGrid = () => {
  return (
    <div className="bg-[#f3f4f6]">
      <div className="container mx-auto mt-16 pt-[85px] px-[15px] pb-[75px]">
        <div className="text-center mb-8">
          <div className="ct-heading-sub text-[#f48c4b] font-semibold text-sm uppercase mb-4">
            Our Dedicated Services
          </div>
          <h3 className="ct-heading-tag text-[46px] font-semibold">
            Learn some new info from our services
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="grid-item bg-white p-6 flex flex-col items-center hover:bg-[#f48c4b] hover:text-white hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }} // Starts invisible and lower
              whileInView={{ opacity: 1, y: 0 }} // Fades in and moves up
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }} // Staggered effect
              viewport={{ once: true }} // Animates only once
            >
              <div className="item-icon text-gradient text-4xl mb-4">
                <i className={`fa ${service.icon}`}></i>
              </div>
              <h3 className="item-title text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="item-except text-sm text-gray-500 mb-4">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
