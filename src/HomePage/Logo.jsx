import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientCarousel = () => {
  const clientLogos = [
    "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/client1.png",
    "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/client2.png",
    "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/client3.png",
    "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/client4.png",
    "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/client5.png",
    "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/client6.png",
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10 px-4 overflow-hidden">
      <Slider {...settings}>
        {clientLogos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img 
              src={logo} 
              alt={`Client ${index + 1}`} 
              className="w-28 md:w-32 h-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
