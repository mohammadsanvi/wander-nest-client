import React from "react";

const PackageErrorFallback = () => {
  return (
    <div className="min-h-[50vh] flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl font-bold text-error mb-4">Couldn’t load tour packages</h2>
      <p className="text-gray-500">Check your internet connection or try again later.</p>
      <button className="btn btn-primary mt-4" onClick={() => window.location.reload()}>
        Retry
      </button>
    </div>
  );
};

export default PackageErrorFallback;
