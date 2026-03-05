import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  TreePine,
  Droplets,
  ShieldCheck,
  Sprout,
  Zap,
  Home,
  CheckCircle2,
  Phone,
  AlertCircle,
  Menu,
  X,
} from "lucide-react";
import {
  // ... your other icons
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

// Split text word-by-word animation
const splitWords = (phrase) => {
  return phrase.split(" ").map((word, index) => (
    <motion.span
      key={index}
      className="inline-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {word}&nbsp;
    </motion.span>
  ));
};

export default function AirportFarms() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle sticky navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const highlights = [
    {
      text: "Located about 30 kms. from Zewar",
      icon: <MapPin className="text-emerald-600" />,
    },
    {
      text: "Vrindavan about 50 Kms",
      icon: <MapPin className="text-emerald-600" />,
    },
    {
      text: "About 1 Km inside of Main Highway",
      icon: <MapPin className="text-emerald-600" />,
    },
    {
      text: "Minimum 30’ Wide Roads",
      icon: <Home className="text-emerald-600" />,
    },
    {
      text: "Freehold Fertile Agriculture Land",
      icon: <Sprout className="text-emerald-600" />,
    },
    {
      text: "Clear Title, Pacci Registry",
      icon: <ShieldCheck className="text-emerald-600" />,
    },
    {
      text: "Sweet Water Available",
      icon: <Droplets className="text-emerald-600" />,
    },
    {
      text: "Pollution Free Environment",
      icon: <TreePine className="text-emerald-600" />,
    },
    {
      text: "Peaceful Crime Free Area",
      icon: <ShieldCheck className="text-emerald-600" />,
    },
    {
      text: "Expert Consultation For Horticulture & HiTech Ag.",
      icon: <Sprout className="text-emerald-600" />,
    },
    {
      text: "FREE 24/7 Security until possession",
      icon: <ShieldCheck className="text-emerald-600" />,
    },
    {
      text: "Premium Club, Pool, & 24/7 Electricity",
      icon: <Zap className="text-emerald-600" />,
    },
  ];

  const navLinks = [
    { name: "Highlights", href: "#highlights" },
    { name: "Financials", href: "#financials" },
    { name: "Guarantees", href: "#guarantees" },
    { name: "Disclosure", href: "#disclosure" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-stone-800">
      {/* LIGHT NAVIGATION BAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-4 shadow-md"
            : "bg-white/80 backdrop-blur-sm py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="font-serif font-bold text-2xl tracking-wider text-red-700">
            AIRPORT<span className="text-emerald-600">FARMS</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-blue-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-red-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="tel:9625614519"
            className="hidden md:flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full transition-colors font-medium shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>9625614519</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-red-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg pt-24 px-4 flex flex-col items-center space-y-8 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl text-blue-800 hover:text-red-600 font-serif font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:9625614519"
              className="flex items-center space-x-3 text-2xl font-bold text-emerald-600 mt-8"
            >
              <Phone className="w-6 h-6" />
              <span>9625614519</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BRIGHT BANNER / HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop')",
          }}
        />

        {/* Light Gradient Overlays */}
        <div className="absolute inset-0 bg-white/10 z-10" />
        <div
          className="absolute inset-0 z-20"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(245, 245, 244, 0.95) 100%)",
          }}
        />

        <div className="relative z-40 text-center px-4 max-w-7xl mx-auto flex items-center h-full">
          {/* Main Content Area */}
          <div className="w-full text-center flex flex-col items-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading - RED */}
              <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-red-700 leading-tight drop-shadow-sm">
                {splitWords("AIRPORT FARMS (Bajna)")}
              </h1>

              {/* Subtitle / Description Text - BLUE */}
              <div className="space-y-4 mb-10 max-w-4xl mx-auto">
                <p className="text-xl md:text-4xl font-medium text-blue-800 uppercase">
                  Agriculture Land Near Zewar Airport.
                </p>
                <p className="text-lg md:text-2xl text-blue-700 max-w-3xl mx-auto">
                  Enjoy Green Pollution Free Environment for a Healthy and
                  Lavish Lifestyle.
                </p>
              </div>

              {/* Styled Buttons - EMERALD */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <a
                  href="#financials"
                  className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-xl shadow-emerald-600/30"
                >
                  Explore Plans
                </a>
                <a
                  href="tel:9625614519"
                  className="inline-block bg-white border-2 border-emerald-600 hover:bg-emerald-50 text-emerald-700 px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-md"
                >
                  Contact an Expert
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section
        id="highlights"
        className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20"
      >
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-red-700 mb-4">
              Main Highlights
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="bg-stone-50 p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-stone-100">
                  {item.icon}
                </div>
                <p className="text-blue-900 font-medium leading-relaxed mt-1">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* LIGHT FINANCIALS & INSTALMENTS */}
      <section
        id="financials"
        className="py-24 bg-stone-50 border-y border-stone-200 px-4 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-red-700 mb-4">
                Financial
              </h2>
              <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Financials */}
            <FadeIn direction="right">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-lg h-full">
                <h3 className="text-2xl font-serif font-bold text-blue-800 mb-6">
                  Financial Overview
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-stone-100 pb-4">
                    <span className="text-stone-600 font-medium">
                      Pre-Launch Rate
                    </span>
                    <span className="text-2xl font-bold text-red-700">
                      ₹3,000 / sqm
                    </span>
                  </div>
                  <p className="text-sm text-red-600 italic">
                    * Rate will be increased very soon
                  </p>
                  <div className="flex justify-between items-center border-b border-stone-100 pb-4">
                    <span className="text-stone-600 font-medium">
                      Farm Sizes
                    </span>
                    <span className="text-lg font-bold text-blue-800">
                      1,000 - 5,000 Sq. Mtr.
                    </span>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 flex items-center space-x-3">
                    <Zap className="text-emerald-600 w-6 h-6 flex-shrink-0" />
                    <p className="text-blue-900">
                      <strong className="text-emerald-700">10% Discount</strong>{" "}
                      on Full Payment within 30 Days.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Installments */}
            <FadeIn direction="left">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-lg h-full">
                <h3 className="text-2xl font-serif font-bold text-blue-800 mb-6">
                  Installment Plan
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <CheckCircle2 className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-red-700 text-lg">
                        ₹50,000 Now
                      </p>
                      <p className="text-blue-800 font-medium">
                        For Provisional Booking
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <CheckCircle2 className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-red-700 text-lg">
                        10% Payment
                      </p>
                      <p className="text-blue-800 font-medium">
                        For Confirmed Booking
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <CheckCircle2 className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-red-700 text-lg">
                        90% Balance
                      </p>
                      <p className="text-blue-800 font-medium">
                        Payable in 30 Monthly Interest-Free Installments
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section
        id="guarantees"
        className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="bg-emerald-50/50 p-10 rounded-3xl border border-emerald-100 h-full shadow-sm">
              <ShieldCheck className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-serif font-bold text-red-700 mb-4">
                Money Back Guarantee
              </h3>
              <p className="text-blue-900 leading-relaxed font-medium">
                If before pacci registry you are not satisfied for any reason
                whatsoever, you can cancel your booking at a notice of one
                month. The full amount paid by you to us will be refunded
                completely.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100 h-full shadow-sm">
              <TreePine className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-serif font-bold text-red-700 mb-4">
                Buy Back Policy
              </h3>
              <p className="text-blue-900 leading-relaxed font-medium">
                If you have paid the full amount to us now, then after 3 years
                you can sell back the farm land to us. We shall buy it back at{" "}
                <strong className="text-red-700">
                  double the amount paid by you
                </strong>{" "}
                or at the market rate, whichever is higher.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DISCLOSURE */}
      <section
        id="disclosure"
        className="py-16 bg-stone-100 px-4 scroll-mt-20 border-t border-stone-200"
      >
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center space-x-3 mb-6">
              <AlertCircle className="text-red-600 w-6 h-6" />
              <h2 className="text-xl font-bold text-red-700 uppercase tracking-wider">
                Disclosure
              </h2>
            </div>
            <div className="space-y-4 text-sm text-blue-900 font-medium">
              <p>
                Your special attention is invited to the fact that the land
                where Airport Farms are proposed has been identified and is
                agricultural at present, and contracts with the owner farmers
                for acquiring their land are underway.
              </p>
              <p>
                Though the total project outlay of our proposed Airport Farms is
                1000 Acres, more and more land will be acquired depending upon
                the interest shown by the buyers.
              </p>
              <p>
                We confirm that there are no acquisition notifications from any
                Government Authority relating to the land where Airport Farms
                are proposed.
              </p>
              <p>We confirm that the title of the land is absolutely clear.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LIGHT FOOTER */}
      <footer className="bg-white text-stone-600 py-16 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-stone-100 pb-12">
            {/* Brand Column */}
            <FadeIn delay={0.1}>
              <h2 className="text-2xl font-serif font-bold text-red-700 mb-4">
                AIRPORT<span className="text-emerald-600">FARMS</span>
              </h2>
              <p className="text-blue-800 mb-6 leading-relaxed font-medium">
                Enjoy a green, pollution-free environment for a healthy and
                lavish lifestyle near the upcoming Zewar Airport.
              </p>
              <p className="text-lg italic text-emerald-600 font-serif font-medium">
                "Honesty is the Best Policy"
              </p>
            </FadeIn>

            {/* Quick Links Column */}
            <FadeIn delay={0.2}>
              <h3 className="text-red-700 text-lg font-bold mb-6 tracking-wide uppercase">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-blue-800 hover:text-emerald-600 font-medium transition-colors inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Contact Column */}
            <FadeIn delay={0.3}>
              <h3 className="text-red-700 text-lg font-bold mb-6 tracking-wide uppercase">
                Contact Us
              </h3>
              <div className="space-y-6">
                <a
                  href="tel:9625614519"
                  className="flex items-center space-x-4 text-emerald-600 hover:text-emerald-500 transition-colors group"
                >
                  <div className="p-3 bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold tracking-wider text-blue-900">
                    9625614519
                  </span>
                </a>

                <div className="flex items-start space-x-4 text-blue-800 font-medium">
                  <div className="p-3 bg-stone-50 rounded-full mt-1 border border-stone-100">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="leading-relaxed">
                    Bajna, Agriculture Land
                    <br />
                    Near Zewar Airport
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Copyright Row */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium text-stone-500">
            <p>
              &copy; {new Date().getFullYear()} Airport Farms. All rights
              reserved.
            </p>
            <p className="mt-2 md:mt-0">Premium Agricultural Real Estate</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
