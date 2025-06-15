import React from 'react';
import { FaUserTie, FaCalendarCheck, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Expert Guides',
    description: 'Handpicked and professional tour guides who know every inch of your destination.',
    icon: <FaUserTie className="text-3xl text-primary" />,
  },
  {
    title: 'Flexible Booking',
    description: 'Easy and secure booking system with flexible rescheduling options.',
    icon: <FaCalendarCheck className="text-3xl text-primary" />,
  },
  {
    title: '24/7 Support',
    description: 'Our travel support team is available round the clock to assist you anytime.',
    icon: <FaHeadset className="text-3xl text-primary" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose WanderNest?
        </motion.h2>
        <motion.p
          className="mb-12 text-gray-700 dark:text-gray-400 max-w-xl mx-auto text-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          We offer unforgettable travel experiences backed by trusted guides, top-notch support, and flexible packages.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-around gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="mb-4 bg-base-100 p-4 rounded-full shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-200 dark:text-gray-500 max-w-xs">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;