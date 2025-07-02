import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router";
import PackageCard from "./PackageCard";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaEarthAmericas } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const AllPackages = ({ isLoggedIn }) => {
  const initialData = useLoaderData();
  const [packages, setPackages] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setPackages(initialData);
      setSuggestions([]);
      return;
    }

    axios
      .get(`https://wander-nest-server.vercel.app/tour-packages?name=${searchTerm}`, { credentials: 'include' })
      .then((res) => {
        setSuggestions(res.data);
      })
      .catch(() => {
        setSuggestions([]);
      });
  }, [searchTerm, initialData]);

  const handleSearchClick = () => {
    if (searchTerm.trim() === "") {
      setPackages(initialData);
      return;
    }

    setLoading(true);
    axios
      .get(`https://wander-nest-server.vercel.app/tour-packages?name=${searchTerm}`, { credentials: 'include' })
      .then((res) => {
        setPackages(res.data);
      })
      .catch(() => {
        // No error shown
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSelectSuggestion = (name) => {
    setSearchTerm(name);
    setShowSuggestions(false);

    setLoading(true);
    axios
      .get(`https://wander-nest-server.vercel.app/tour-packages?name=${name}`, { credentials: 'include' })
      .then((res) => {
        setPackages(res.data);
      })
      .catch(() => {
        // No error shown
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Helmet><title>All Packages - WanderNest</title></Helmet>
      <div className="px-4 min-h-[70vh] my-24 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center flex justify-center items-center gap-4">
          <FaEarthAmericas size={40} /> <span>All Tour Packages</span>
        </h1>

        {/* Search Box */}
        <div className="relative w-full max-w-md mx-auto mb-10">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search by tour name..."
              className="input input-bordered w-full"
              value={searchTerm}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearchClick}
              className={`btn btn-primary ${loading ? "btn-disabled" : ""}`}
              aria-label="Search"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <FaSearch />
              )}
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && searchTerm && suggestions.length > 0 && (
            <ul className="absolute z-50 mt-1 w-full bg-base-100 border border-base-300 rounded-lg shadow-md">
              {suggestions.slice(0, 6).map((item) => (
                <li
                  key={item._id}
                  onClick={() => handleSelectSuggestion(item.tour_name)}
                  className="px-4 py-2 hover:bg-base-200 cursor-pointer"
                >
                  {item.tour_name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Optional: small loading spinner below search */}
        {loading && (
          <div className="text-center text-primary mb-4">
            <span className="loading loading-spinner"></span>
          </div>
        )}

        {/* Package Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages.length > 0 ? (
            packages.map((pkg) => (
              <PackageCard key={pkg._id} pkg={pkg} isLoggedIn={isLoggedIn} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
              No packages found.
            </p>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default AllPackages;
