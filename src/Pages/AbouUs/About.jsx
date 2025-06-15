import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Heading Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About WanderNest</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            At WanderNest, we believe travel is not just about destinations — it’s about memories, experiences, and the journey itself. Our goal is to create seamless, unforgettable tours tailored just for you.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To connect travelers with authentic experiences by providing thoughtfully curated tour packages that inspire adventure and cultural immersion.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To be the leading travel platform empowering wanderers worldwide to explore safely and effortlessly.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-base-100 shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold mb-3">Customer Centricity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We prioritize your needs and comfort to ensure every trip is tailored perfectly.
              </p>
            </div>
            <div className="bg-base-100 shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transparent communication and ethical practices guide everything we do.
              </p>
            </div>
            <div className="bg-base-100 shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Constantly improving our offerings to create unique and exciting travel experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-10 text-center">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
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
            ].map(({ name, role, img }) => (
              <div
                key={name}
                className="bg-base-100 rounded-lg shadow-md flex flex-col items-center p-6"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-primary"
                />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to explore with us?</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Start your journey today and discover a world of incredible destinations, handpicked just for you.
          </p>
          <button
            onClick={() => window.location.href = "/packages"}
            className="btn btn-primary btn-lg"
          >
            Explore All Packages
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;