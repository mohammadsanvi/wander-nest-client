import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const FeaturedPackages = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();
  const [loading, setloading] = useState(true)


  useEffect(() => {
    axios
      .get("http://localhost:3000/tour-packages")
      .then((res) => {
        const firstSix = res.data.slice(0, 6);
        setPackages(firstSix);
        setloading(false)
      })
      .catch((err) => console.error(err));
  }, []);

   if (loading) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-base-100 text-base-content">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Featured Packages</h2>
        <p className="text-sm opacity-70">Explore our top-rated tour experiences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <motion.div
            key={pkg._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <figure>
              <img
                src={pkg.image}
                alt={pkg.tour_name}
                className="w-full h-52 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">{pkg.tour_name}</h3>

              <div className="flex items-center gap-2 mt-2">
                <img
                  src={pkg.guide_photo || "https://i.ibb.co/YTy7gBn/profile.png"}
                  alt={pkg.guide_name}
                  className="w-8 h-8 rounded-full border"
                />
                <span className="text-sm font-medium">{pkg.guide_name}</span>
              </div>

              <div className="mt-2 space-y-1 text-sm">
                <p><span className="font-semibold">Duration:</span> {pkg.duration}</p>
                <p><span className="font-semibold">Departure Date:</span> {pkg.departure_date}</p>
                <p><span className="font-semibold">Price:</span> ${pkg.price}</p>
              </div>

              <div className="card-actions mt-4">
                <Link className="btn btn-sm btn-primary w-full" to={`/packages/package-details/${pkg._id}`}>View Details</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/packages")}
          className="btn btn-outline btn-primary"
        >
          Show All <FaArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedPackages;
