import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from '../../assets/slider-1.jpg';
import slider2 from '../../assets/slider-2.jpg';
import slider3 from '../../assets/slider-3.jpg';
import slider4 from '../../assets/slider-4.jpg';

const Banner = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Slider change every 5 seconds
    arrows: false,
    fade: true,
  };

  const slides = [
    { img: slider1, text: "Discover Your Next Adventure" },
    { img: slider2, text: "Explore Breathtaking Landscapes" },
    { img: slider3, text: "Embrace Unique Cultures and Traditions" },
    { img: slider4, text: "Create Stories That Last a Lifetime" },
  ];

  return (
    <section className="relative max-h-[70vh] mt-24 overflow-hidden">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative h-[60vh] md:h-[70vh]">
              <img
                src={slide.img}
                alt="slide"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#00000091]"></div>
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  <Typewriter
                    key={slide.text} 
                    words={[slide.text]}
                    cursor
                    typeSpeed={60}
                    deleteSpeed={0}    
                    delaySpeed={1500} 
                  />
                </h1>
                <p className="text-sm md:text-base text-white font-medium mb-6">
                  Explore exclusive tour packages, guided experiences, and unforgettable journeys across Bangladesh and beyond.
                </p>
                <Link to="/packages">
                  <button className="btn btn-primary btn-lg px-6 shadow-lg">
                    Explore All Packages
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
