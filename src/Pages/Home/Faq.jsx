import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "How do I book a tour package?",
    answer:
      "Booking a tour package is quick and easy. Simply visit our 'Packages' page, select your preferred destination, and click on 'Book Now'. Follow the guided steps to complete your reservation securely.",
  },
  {
    question: "Can I cancel or reschedule my trip?",
    answer:
      "Yes, you can cancel or reschedule your trip through your account dashboard. Please review our cancellation and rescheduling policy for applicable terms, conditions, and fees.",
  },
  {
    question: "Are the tours guided and safe?",
    answer:
      "Absolutely. All our tours are led by experienced, certified guides, and we prioritize your safety with well-planned itineraries, verified accommodations, and trusted transport partners.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, as well as secure online payment options such as PayPal and mobile banking. All transactions are encrypted to protect your information.",
  },
  {
    question: "Will I receive a confirmation after booking?",
    answer:
      "Yes, you will receive an instant booking confirmation via email along with your detailed itinerary and important travel information. Please check your spam folder if you don’t see it in your inbox.",
  },
  {
    question: "Can I customize my tour package?",
    answer:
      "Of course! We offer customizable packages to suit your preferences. Contact our support team or use the customization option on the package page to tailor your itinerary, activities, or accommodation.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   <section className="py-20 min-h-[90vh] bg-base-200 text-base-content">
  <div className="max-w-7xl mx-auto bg-base-200 px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="bg-base-100 p-4 rounded-lg shadow-md cursor-pointer"
          onClick={() => toggle(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <FaChevronDown
              className={`transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-sm text-gray-600 dark:text-gray-400 overflow-hidden"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default FAQ;
