import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
   <section
  className="relative min-h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://i.ibb.co/jkH5Jdbg/pexels-thanh-long-bui-483143920-32572725.jpg')",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-60"></div>

  {/* Content */}
  <motion.div
    className="relative z-10 text-center text-white px-6 md:px-12 max-w-3xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
      <TypeAnimation
        sequence={[
          'Discover Your Next Adventure',
          2000,
          'Explore Beautiful Destinations',
          2000,
          'Create Unforgettable Memories',
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
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
</section>
  );
};

export default Banner;
