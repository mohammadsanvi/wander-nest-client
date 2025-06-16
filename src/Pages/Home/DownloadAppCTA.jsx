import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

const DownloadAppCTA = () => {
  return (
    <section className="py-20 bg-base-200 text-base-content">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 lg:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12"
      >
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your all-in-one Travel App
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base">
            Book flights, tours, hotels, and explore Bangladesh & beyond. Manage your bookings and stay updated — all from one app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="btn btn-primary flex items-center gap-2"
            >
              <FaApple className="text-lg" />
              App Store
            </a>
            <a
              href="#"
              className="btn btn-secondary flex items-center gap-2"
            >
              <FaGooglePlay className="text-lg" />
              Google Play
            </a>
          </div>
        </div>

        {/* Right: App Screens in mobile frame */}
        <div className="flex gap-4 items-end justify-center relative">
          {/* Left Screenshot */}
          <img
            src="https://i.ibb.co/v2L16KF/image.png"
            alt="add package"
            className="w-[120px] md:w-[160px] rounded-2xl shadow-lg translate-y-6 hidden sm:block"
          />
          {/* Center Screenshot */}
          <img
            src="https://i.ibb.co/bjTtX1by/image.png"
            alt="all packages"
            className="w-[160px] md:w-[200px] rounded-2xl shadow-2xl z-10"
          />
          {/* Right Screenshot */}
          <img
            src="https://i.ibb.co/qYD9L68k/image.png"
            alt="manage bookings"
            className="w-[120px] md:w-[160px] rounded-2xl shadow-lg translate-y-6 hidden sm:block"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadAppCTA;
