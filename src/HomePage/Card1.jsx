import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    imgSrc: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog5-600x430.jpg",
    name: "Riva Collins",
    date: "May 18, 2018",
    title: "Loft Office With Vintage Decor For Creative",
    path: "/",
  },
  {
    imgSrc: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog6-600x430.jpg",
    name: "Riva Collins",
    date: "April 18, 2018",
    title: "We are hiring many developer to develop",
    path: "/",
  },
  {
    imgSrc: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog1-600x430.jpg",
    name: "Riva Collins",
    date: "October 18, 2018",
    title: "Main reasons to explain fast business builder",
    path: "/",
  },
  {
    imgSrc: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog2-600x430.jpg",
    name: "Riva Collins",
    date: "May 18, 2018",
    title: "We are hiring many developer to develop",
    path: "/",
  },
  {
    imgSrc: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog3-600x430.jpg",
    name: "Riva Collins",
    date: "May 18, 2018",
    title: "We are hiring many developer to develop",
    path: "/",
  },
  {
    imgSrc: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/blog4-600x430.jpg",
    name: "Riva Collins",
    date: "May 18, 2018",
    title: "We are hiring many developer to develop",
    path: "/",
  },
];

const CardComponent = ({ item }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden group relative mx-2 sm:mx-4">
      <div className="relative overflow-hidden">
        <img
          src={item.imgSrc}
          alt="card img"
          className="w-full h-60 object-cover sm:h-72 md:h-80 lg:h-64 xl:h-72 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#f48c4b] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <FaPlus className="text-black text-5xl sm:text-6xl bg-white bg-opacity-100 p-4 sm:p-6 rounded-full transform translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-500" />
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center pb-2">
          <p className="text-gray-600 pr-4 text-xs sm:text-sm">{item.date}</p>
          <p className="text-gray-600 text-xs sm:text-sm">{item.name}</p>
        </div>
        <h3 className="text-md sm:text-lg font-semibold text-gray-900 mb-4 transition-opacity duration-500 group-hover:text-[#f48c4b]">
          {item.title}
        </h3>
        <Link
          to={item.path}
          className="inline-block bg-black text-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm rounded hover:bg-gradient-to-r from-orange-600 to-orange-800 hover:opacity-90 transition-all duration-300"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

const CardView = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Large tablets and small desktops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Mobile phones
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <Slider {...settings}>
        {data.map((item, index) => (
          <CardComponent key={index} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default CardView;
