import React from "react";

const destinations = [
  {
    name: "Cox's Bazar",
    hotels: 97,
    image: "https://i.ibb.co/zVLG5CDf/pexels-rony-storyteller-499458095-30923523.jpg",
  },
  {
    name: "Sylhet",
    hotels: 44,
    image: "https://i.ibb.co/CDb6PmV/pexels-rezwan-nobi-741721-1633318.jpg",
  },
  {
    name: "Chittagong",
    hotels: 36,
    image: "https://i.ibb.co/vvdRmbhB/pexels-mumtahina-tanni-1080117-3435378.jpg",
  },
];

const ExploreSection = () => {
  return (
    <section className="px-4 py-20 bg-base-200 text-base-content mx-auto max-w-7xl">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Explore Bangladesh</h2>
        <p className="mt-2 max-w-3xl">
          Prepare to experience Bangladesh's rich culture and explore the
          majestic beauties of Cox’s Bazar, Sylhet, Bandarban, Sajek Valley,
          Rangamati etc. Plan your trip now!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="relative rounded-box overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 group"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-72 object-cover group-hover:brightness-75 transition-all"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
              <h3 className="text-lg font-semibold">{dest.name}</h3>
              <p className="text-sm">{dest.hotels} Hotels Available</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
