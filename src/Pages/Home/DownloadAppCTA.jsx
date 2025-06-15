import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

const DownloadAppCTA = () => {
  return (
    <section className="py-16 bg-base-200 text-base-content">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl font-bold mb-3">Get the WanderNest App</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Book your favorite tours, manage bookings, and chat directly with your guide — all in one place.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="btn btn-primary flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <FaApple className="text-lg" />
            Download for iOS
          </a>
          <a
            href="#"
            className="btn btn-secondary flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <FaGooglePlay className="text-lg" />
            Download for Android
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadAppCTA;
