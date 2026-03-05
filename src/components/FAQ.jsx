import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

// Reusing your existing FadeIn animation wrapper
const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "Where exactly is Airport Farms located?",
      answer:
        "Airport Farms is located in Bajna, about 30 kms from Zewar Airport, 50 kms from Vrindavan, and conveniently situated about 1 km inside of the Main Highway.",
    },
    {
      question: "What are the sizes of the farm lands available?",
      answer:
        "We offer flexible farm sizes ranging from 1,000 Sq. Mtr. up to 5,000 Sq. Mtr., allowing you to choose the perfect plot for your lifestyle or investment needs.",
    },
    {
      question: "How does the Installment Plan work?",
      answer:
        "You can make a provisional booking with just ₹50,000 now. A 10% payment confirms your booking, and the remaining 90% balance can be paid in 30 monthly interest-free installments. Alternatively, you get a 10% discount on full payment within 30 days.",
    },
    {
      question: "What is your Buy Back Policy?",
      answer:
        "If you pay the full amount to us now, after 3 years you have the option to sell the farm land back to us. We guarantee to buy it back at double the amount paid by you, or at the current market rate—whichever is higher.",
    },
    {
      question: "Is my investment secure if I change my mind?",
      answer:
        "Absolutely. We offer a Money Back Guarantee. If you are not satisfied for any reason before the pacci registry, you can cancel your booking with a one-month notice and your full amount will be refunded.",
    },
    {
      question: "What amenities and facilities are provided?",
      answer:
        "The land features minimum 30’ wide roads, sweet water availability, and a peaceful, pollution-free environment. Basic facilities include a Premium Club, Swimming Pool, and 24/7 electricity. We also provide free 24/7 security until possession is handed over.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-white border-y border-stone-200 px-4 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-emerald-50 rounded-full border border-emerald-100">
                <MessageCircleQuestion className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-red-700 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-blue-800 text-lg font-medium">
              Everything you need to know about investing in Airport Farms.
            </p>
          </div>
        </FadeIn>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-emerald-200 bg-emerald-50/30 shadow-md"
                      : "border-stone-200 bg-stone-50 hover:border-emerald-300 hover:bg-white shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span
                      className={`text-lg font-bold pr-8 transition-colors ${
                        isOpen ? "text-emerald-700" : "text-blue-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-2 rounded-full flex-shrink-0 ${
                        isOpen
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-stone-200 text-stone-500"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-blue-800 font-medium leading-relaxed border-t border-emerald-100/50 mt-2 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
