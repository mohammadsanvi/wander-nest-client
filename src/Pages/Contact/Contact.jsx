import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
   <>
    <Helmet><title>Contact - WanderNest</title></Helmet>
    <section className="max-w-7xl min-h-[80vh] bg-base-200 mx-auto px-4 py-24">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typewriter
          words={['Contact Us', 'Get in Touch', 'We are here to help!']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <motion.div
          className="bg-base-100 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Our Contact Info</h3>
          <p className="text-base-content mb-6">
            We would love to hear from you! Send us a message or call us directly.
          </p>
          <div className="space-y-4 text-base-content">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl text-primary" />
              <a href="mailto:info@wandernest.com" className="link link-hover">
                info@wandernest.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl text-primary" />
              <a href="tel:+1234567890" className="link link-hover">
                +1 234 567 890
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-xl text-primary" />
              <span>Shumpara, Norshingdi, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="md:col-span-2 bg-base-100 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="input input-bordered w-full"
              />
            </div>

            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Type your message"
                rows={6}
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 text-right">
              <motion.button
                type="submit"
                className="btn btn-primary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
   </>
  );
};

export default Contact;
