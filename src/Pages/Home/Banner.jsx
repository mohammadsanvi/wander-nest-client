import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
      <section className="hero min-h-[60vh] bg-base-200 text-base-content px-6 md:px-20 rounded-lg flex flex-col justify-center text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discover Amazing Travel Packages
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          Explore the best tours and experiences designed just for you across beautiful destinations.
        </p>
        <button
          onClick={() => navigate("/packages")}
          className="btn btn-primary btn-lg"
        >
          Explore All Packages
        </button>
      </div>
    </section>
  );
};

export default Banner;
