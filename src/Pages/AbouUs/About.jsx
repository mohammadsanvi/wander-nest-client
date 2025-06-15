import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaPhoneAlt, FaSmileBeam } from "react-icons/fa";

const teamMembers = [
  {
    name: "Sara Ahmed",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James Wilson",
    role: "Lead Tour Guide",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Marketing Manager",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael Brown",
    role: "Customer Support",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content mt-10 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">About WanderNest</h1>
          <p className="text-lg text-base-content opacity-90">
            WanderNest is more than just a travel agency – it's your gateway to transformative travel experiences.
          </p>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-base-content opacity-90 leading-relaxed">
              To connect global travelers with curated, immersive adventures that blend cultural authenticity and unforgettable memories.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-base-content opacity-90 leading-relaxed">
              To redefine travel by becoming the most trusted platform for meaningful exploration and community-driven experiences.
            </p>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl font-semibold mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-base-100 shadow-xl rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">Customer Centricity</h3>
              <p className="text-base-content opacity-90">
                Every decision we make starts with you – ensuring your comfort and joy.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-base-100 shadow-xl rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-base-content opacity-90">
                Honest communication and transparency are at the heart of our service.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-base-100 shadow-xl rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-base-content opacity-90">
                We constantly improve with new ideas, technologies, and trends.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Meet the Team */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-semibold mb-10 text-center">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {teamMembers.map(({ name, role, img }) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={name}
                className="bg-base-100 rounded-xl shadow-md flex flex-col items-center p-6"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-primary"
                />
                <h3 className="text-xl font-semibold mb-1">{name}</h3>
                <p className="text-sm text-base-content opacity-80">{role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-semibold">Why Choose WanderNest?</h2>
          <p className="text-base-content opacity-90">
            Hassle-free booking, expert guides, unique destinations, and 24/7 support.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-base-100 rounded-xl shadow">
              <FaMapMarkedAlt className="text-primary text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Curated Experiences</h3>
              <p className="text-base-content opacity-90">
                Every tour is designed with passion and local insight.
              </p>
            </div>
            <div className="p-6 bg-base-100 rounded-xl shadow">
              <FaPhoneAlt className="text-primary text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
              <p className="text-base-content opacity-90">
                Always here to help before, during, and after your journey.
              </p>
            </div>
            <div className="p-6 bg-base-100 rounded-xl shadow">
              <FaSmileBeam className="text-primary text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Trusted by Travelers</h3>
              <p className="text-base-content opacity-90">
                Thousands of happy explorers speak for us.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="mb-6 text-base-content opacity-90">
            Discover breathtaking places, meet wonderful people, and collect stories.
          </p>
          <button
            onClick={() => window.location.href = "/packages"}
            className="btn btn-primary btn-lg"
          >
            Browse Tour Packages
          </button>
        </motion.section>

      </div>
    </div>
  );
};

export default About;
