import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose WanderNest?</h2>
        <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">We offer unforgettable travel experiences backed by trusted guides, top-notch support, and flexible packages.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-base-100 shadow">
            <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
            <p className="text-sm">Handpicked and professional tour guides who know every inch of your destination.</p>
          </div>
          <div className="p-6 rounded-xl bg-base-100 shadow">
            <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
            <p className="text-sm">Easy and secure booking system with flexible rescheduling options.</p>
          </div>
          <div className="p-6 rounded-xl bg-base-100 shadow">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-sm">Our travel support team is available round the clock to assist you anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
