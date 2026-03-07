import React, { useState } from "react";
import { User, Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

// 1. Separate FadeIn component for cleaner code
const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: directions[direction].y,
        x: directions[direction].x,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Country code + number (no '+' or '-')
    const whatsappNumber = "919625614519";

    // Format message with line breaks (%0A) and bold text (*)
    const text =
      `*New Inquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || "Not provided"}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#D40000] mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-blue-800 text-lg">
              Interested in booking or learning more? Contact our experts today.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
          {/* Contact Form */}
          <FadeIn direction="right" delay={0.2}>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-sans font-bold text-blue-800 mb-8">
                Send an Inquiry
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-emerald-600" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      className="pl-10 w-full rounded-xl border border-stone-300 py-3 px-4 text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-stone-50 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-emerald-600" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="pl-10 w-full rounded-xl border border-stone-300 py-3 px-4 text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-stone-50 transition-all"
                      placeholder="+91 9625614519"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-emerald-600" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="pl-10 w-full rounded-xl border border-stone-300 py-3 px-4 text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-stone-50 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-stone-300 py-3 px-4 text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-stone-50 transition-all"
                    placeholder="I am interested in buying a farm..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/30"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Map Area */}
          <FadeIn direction="left" delay={0.4}>
            <div className="h-full w-full min-h-[400px] bg-stone-200 relative">
              <iframe
                title="Airport Farms Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.4313!2d77.0!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjguNSIsNzcuMA!5e0!3m2!1sen!2sin!4v123456789"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
