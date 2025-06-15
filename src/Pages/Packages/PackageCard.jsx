import React from "react";
import { FaUserTie, FaClock, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PackageCard = ({ pkg, isLoggedIn }) => {
  const navigate = useNavigate();

  const {
    _id,
    tour_name,
    image,
    guide_name,
    guide_photo,
    duration,
    price,
    departure_date,
  } = pkg;

  const handleViewDetails = () => {
    if (isLoggedIn) {
      navigate(`/packages/${_id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <motion.div
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200"
      whileHover={{ scale: 1.03 }}
    >
      <figure>
        <img
          src={image}
          alt={tour_name}
          className="h-60 w-full object-cover"
        />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title text-xl font-bold">{tour_name}</h2>

        <div className="flex items-center gap-3">
          <img
            src={guide_photo}
            alt={guide_name}
            className="w-10 h-10 rounded-full border border-base-content"
          />
          <p className="font-medium flex items-center gap-1">
            <FaUserTie /> {guide_name}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm text-base-content/80">
          <p className="flex items-center gap-1">
            <FaClock className="text-primary" /> {duration}
          </p>
          <p className="flex items-center gap-1">
            <FaMoneyBillWave className="text-success" /> ${price}
          </p>
          <p className="flex items-center gap-1 col-span-2">
            <FaCalendarAlt className="text-warning" /> Departure:{" "}
            {departure_date}
          </p>
        </div>

        <div className="card-actions justify-end">
          <button
            className="btn btn-primary btn-sm"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;