import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
  {
    id: 4,
    name: "David Lee",
    img: "https://randomuser.me/api/portraits/men/24.jpg",
    feedback: "Seamless experience from start to finish. Loved every moment.",
    role: "Photographer",
  },
  {
    id: 5,
    name: "Emma Wilson",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    feedback: "Their curated tours are simply the best out advancer my family and friend there!",
    role: "Digital Nomad",
  },
  {
    id: 6,
    name: "Robert Brown",
    img: "https://randomuser.me/api/portraits/men/58.jpg",
    feedback: "Highly professional and super friendly staff. Thumbs up!",
    role: "Frequent Flyer",
  },
  {
    id: 7,
    name: "Olivia Davis",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
    feedback:
      "Made some of the best memories of my life thanks to WanderNest!",
    role: "Backpacker",
  },
  {
    id: 8,
    name: "William Smith",
    img: "https://randomuser.me/api/portraits/men/17.jpg",
    feedback:
      "They take care of every little detail so you can truly relax.",
    role: "Family Traveler",
  },
  {
    id: 9,
    name: "Isabella Martinez",
    img: "https://randomuser.me/api/portraits/women/53.jpg",
    feedback:
      "Absolutely recommend WanderNest to all my friends and family.",
    role: "Adventure Seeker",
  },
  {
    id: 10,
    name: "Liam Anderson",
    img: "https://randomuser.me/api/portraits/men/62.jpg",
    feedback:
      "Smooth booking process and great travel options to choose from!",
    role: "Weekend Explorer",
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="py-20 bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
        <p className="mb-10 text-gray-600 dark:text-gray-400">
          Real experiences from real adventurers around the world.
        </p>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
        >
          {testimonials.map(({ id, name, img, feedback, role }) => (
            <SwiperSlide key={id}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
