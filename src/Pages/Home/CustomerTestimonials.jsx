import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "WanderNest made my vacation stress-free and magical. The guides were incredibly knowledgeable!",
    role: "Travel Enthusiast",
  },
  {
    id: 2,
    name: "James Carter",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    feedback:
      "I had the best solo trip ever. Booking was easy and support was top-notch. Totally recommend!",
    role: "Solo Traveler",
  },
  {
    id: 3,
    name: "Linda Kim",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "Affordable yet luxurious! WanderNest is the only platform I trust for travel planning.",
    role: "Luxury Blogger",
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="py-16 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
        <p className="mb-10 text-gray-600 dark:text-gray-400">
          Real experiences from real adventurers around the world.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, img, feedback, role }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-base-100 rounded-xl shadow-xl p-6 text-left relative"
            >
              <FaQuoteLeft className="text-primary text-3xl absolute top-4 left-4 opacity-20" />
              <p className="text-sm mb-6 mt-6 italic text-gray-600 dark:text-gray-400">
                “{feedback}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={img}
                  alt={name}
                  className="w-12 h-12 rounded-full border-2 border-primary tooltip"
                  data-tooltip-id={`tooltip-${id}`}
                />
                <div>
                  <h4 className="font-semibold text-base">{name}</h4>
                  <p className="text-xs text-gray-400">{role}</p>
                </div>
              </div>
              <Tooltip id={`tooltip-${id}`} content={`Verified: ${role}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
