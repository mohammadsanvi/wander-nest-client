import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/Error.json";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-base-100 text-base-content">
      <div className="w-[300px] md:w-[400px]">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Oops! You seem lost in the Himalayas.</h1>
      <p className="mb-6 text-gray-500 dark:text-gray-400">
        The page you're looking for doesn't exist or might have been moved.
      </p>

      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
