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
  ChevronLeft,
  ChevronRight,
  Send,
  User,
  Mail,
} from "lucide-react";
import Bannerslider from "../components/Bannerslider";
import PremiumBanner from "../components/Bannerslider";
import FAQ from "../components/FAQ";
import HeroBanner from "../components/HeroBanner";
import ContactSection from "../components/ContactSection";

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

export default function AirportFarmswithslider() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // // Form State
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   message: "",
  // });

  // const handleFormChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Thank you for your interest! We will contact you shortly.");
  //   // Add your form submission logic here
  //   setFormData({ name: "", phone: "", email: "", message: "" });
  // };

  // Handle sticky navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- SLIDER DATA ---
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop",
      title: "AIRPORT FARMS (Bajna)",
      subtitle: "Agriculture Land Near Zewar Airport.",
      desc: "Enjoy Green Pollution Free Environment for a Healthy and Lavish Lifestyle.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=2670&auto=format&fit=crop",
      title: "PREMIUM LIFESTYLE",
      subtitle: "Minimum 30' Wide Roads & Pacci Registry.",
      desc: "Secure your future with clear titles and a peaceful, crime-free area.",
    },
    {
      image: "https://i.postimg.cc/nrzV5ZY1/3.png",
      title: "AGRICULTURE",
      subtitle: "Expert Consultation For Horticulture.",
      desc: "Fertile freehold land with sweet water available for all your farming needs.",
    },
  ];

  // --- GALLERY DATA ---
  const galleryImages = [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=800&auto=format&fit=crop",
    "https://i.postimg.cc/63z5YTRR/2.png",
    "https://raw.githubusercontent.com/Ashish-Kaintura/Farmhouse/main/src/assets/poster.jpg",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop",
    "https://raw.githubusercontent.com/Ashish-Kaintura/Farmhouse/main/src/assets/banner3.png",
  ];

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
      text: "Expert Consultation For Horticulture",
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
    { name: "Gallery", href: "#gallery" },
    { name: "Financials", href: "#financials" },
    { name: "Guarantees", href: "#guarantees" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-stone-800">
      {/* LIGHT NAVIGATION BAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-1 shadow-md"
            : "bg-white/85 backdrop-blur-sm py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="font-sans font-bold text-2xl tracking-wider text-[#D40000]">
            <a href="/">AIRPORT FARMS</a>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-green-500">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#D40000] transition-colors"
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
            className="md:hidden text-[#D40000]"
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
            className="fixed inset-0 z-60 mt-20 bg-white/95 backdrop-blur-lg pt-24 px-4 flex flex-col items-center space-y-8 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl text-blue-800 hover:text-[#D40000] font-sans font-medium"
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

      {/* <Bannerslider /> */}
      {/* <PremiumBanner /> */}
      <HeroBanner />
      {/* HIGHLIGHTS SECTION */}
      <section
        id="highlights"
        className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
      >
        <FadeIn>
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#D40000] mb-3 sm:mb-4">
              Main Highlights
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="bg-stone-50 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300 flex items-start gap-3 sm:gap-4">
                {/* Icon Container */}
                <div className="p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl shadow-sm border border-stone-100 flex-shrink-0">
                  {item.icon}
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base lg:text-lg text-blue-900 font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section
        id="gallery"
        className="py-24 bg-blue-50 border-y border-stone-200 px-4 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#D40000] mb-4">
                Gallery
              </h2>
              <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
              <p className="mt-6 text-blue-800 text-lg">
                A glimpse of the lush green environment at Airport Farms.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((imgSrc, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl shadow-sm cursor-pointer border border-stone-200 aspect-[4/3]">
                  <img
                    src={imgSrc}
                    alt={`Airport Farms Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHT FINANCIALS & INSTALMENTS */}
      <section
        id="financials"
        className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#D40000] mb-3 sm:mb-4 uppercase">
              Financials
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Financial Overview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white p-5 sm:p-7 lg:p-10 rounded-2xl lg:rounded-3xl border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-blue-800 mb-5 sm:mb-6">
                Financials Overview
              </h3>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex justify-between items-center border-b border-stone-100 pb-4">
                  <span className="text-sm sm:text-base text-stone-600 font-medium">
                    Pre-Launch Rate
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#D40000]">
                    ₹5,000 / sqm
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#D40000] italic">
                  * Rate will be increased very soon
                </p>

                <div className="flex justify-between items-center border-b border-stone-100 pb-4">
                  <span className="text-sm sm:text-base text-stone-600 font-medium">
                    Farm Sizes
                  </span>
                  <span className="text-base sm:text-lg font-bold text-blue-800">
                    1,000 - 5,000 Sq. Mtr.
                  </span>
                </div>

                <div className="bg-emerald-50 p-3 sm:p-4 rounded-xl border border-emerald-100 flex items-start gap-3">
                  <Zap className="text-emerald-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-blue-900">
                    <strong className="text-emerald-700">10% Discount</strong>{" "}
                    on Full Payment within 30 Days.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Installment Plan */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-5 sm:p-7 lg:p-10 rounded-2xl lg:rounded-3xl border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-blue-800 mb-5 sm:mb-6">
                Installment Plan
              </h3>

              <ul className="space-y-5 sm:space-y-6">
                <li className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#D40000] text-base sm:text-lg">
                      ₹50,000 Now
                    </p>
                    <p className="text-blue-800 font-medium text-sm sm:text-base">
                      For Provisional Booking
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#D40000] text-base sm:text-lg">
                      10% Payment
                    </p>
                    <p className="text-blue-800 font-medium text-sm sm:text-base">
                      For Confirmed Booking
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#D40000] text-base sm:text-lg">
                      90% Balance
                    </p>
                    <p className="text-blue-800 font-medium text-sm sm:text-base">
                      Payable in 30 Monthly Interest-Free Installments
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section
        id="guarantees"
        className="py-24 bg-blue-50 border-y border-stone-200 px-4 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="bg-emerald-50/50 p-10 rounded-3xl border border-emerald-100 h-full shadow-sm">
              <ShieldCheck className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-sans font-bold text-[#D40000] mb-4">
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
              <h3 className="text-2xl font-sans font-bold text-[#D40000] mb-4">
                Buy Back Policy
              </h3>
              <p className="text-blue-900 leading-relaxed font-medium">
                If you have paid the full amount to us now, then after 3 years
                you can sell back the farm land to us. We shall buy it back at{" "}
                <strong className="text-[#D40000]">
                  double the amount paid by you
                </strong>{" "}
                or at the market rate, whichever is higher.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT & MAP SECTION */}
      <ContactSection />
      <FAQ />

      {/* PRIVACY POLICY SECTION */}
      <section
        id="privacy"
        className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8  mx-auto scroll-mt-24 bg-gray-100"
      >
        <FadeIn>
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#D40000] mb-3 sm:mb-4">
              Privacy Policy
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-blue-200 p-5 sm:p-7 lg:p-10 rounded-2xl lg:rounded-3xl border border-stone-200 shadow-sm">
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-blue-900 leading-relaxed font-medium">
              <p>
                Your privacy is important to us. It is our policy to respect
                your privacy regarding any information you may provide us. We
                only ask for personal information when we require it to serve
                you better and collect it by fair and lawful means with your
                knowledge and consent.
              </p>

              <p>
                We only retain collected information for as long as necessary to
                provide you with your requested service. The data stored by us
                will be within commercially acceptable means to prevent loss,
                theft or unauthorized access, disclosure, copying, use, or
                modification. We do not share personal information with any
                companies, organizations nor with individuals, except when we
                are required to do so as per law.
              </p>

              <p>
                You can refuse your personal information requested by us, which
                might hamper our efforts to provide you the desired services.
                Your continued use of our website will be regarded as acceptance
                of our practices around privacy.
                <br />
                <br />
                The contents of this website are for the persons resident in
                India only and we scrupulously follow applicable Laws, Rules,
                Regulations framed by Government of India.
              </p>

             
            </div>
          </div>
        </FadeIn>
      </section>
      {/* DISCLOSURE */}
      <section
        id="disclosure"
        className="py-16 bg-blue-100 px-4 scroll-mt-20 border-t border-stone-200"
      >
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center fle justify-center space-x-3 mb-6">
              {/* <AlertCircle className="text-[#D40000] w-6 h-6" /> */}
              <h2 className="text-xl font-bold text-[#D40000] uppercase tracking-wider">
                Disclosure
              </h2>
            </div>
            <div className="space-y-4 text-lg text-blue-900 font-medium">
              <p className="uppercase">
                1. Your special attention is invited to the fact that the land
                where Airport Farms are proposed has been identified and is
                agricultural at present, and contracts with the owner farmers
                for acquiring their land are underway.
              </p>
              <p className="uppercase">
                2. Though the total project outlay of our proposed Airport Farms
                is 1000 Acres, more and more land will be acquired depending
                upon the interest shown by the buyers.
              </p>
              <p className="uppercase">
                3. We confirm that there are no acquisition notifications from
                any Government Authority relating to the land where Airport
                Farms are proposed.
              </p>
              <p className="uppercase">
                4. We confirm that the title of the land is absolutely clear.
              </p>
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
              <h2 className="text-2xl font-sans font-bold text-[#D40000] mb-4">
                AIRPORT Farms
              </h2>
              {/* <p className="text-blue-800 mb-6 leading-relaxed font-medium">
                Enjoy a green, pollution-free environment for a healthy and
                lavish lifestyle near the upcoming Zewar Airport.
              </p>
              <p className="text-lg italic text-emerald-600 font-sans font-medium">
                "Honesty is the Best Policy"
              </p> */}
            </FadeIn>

            {/* Quick Links Column */}
            <FadeIn delay={0.2}>
              <h3 className="text-[#D40000] text-lg font-bold mb-6 tracking-wide uppercase">
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
              <h3 className="text-[#D40000] text-lg font-bold mb-6 tracking-wide uppercase">
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

                <div className="flex items-center  space-x-4 text-blue-800 font-medium">
                  <div className="p-3 bg-stone-50 rounded-full mt-1 border border-stone-100">
                    <MapPin className="w-5 h-5 text-[#D40000]" />
                  </div>
                  <p className="leading-relaxed">
                    {/* Bajna, Agriculture Land
                    <br />
                    Near Zewar Airport */}
                    Site Office at Bajna
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Copyright Row */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium text-stone-500">
            <p className="uppercase">
              &copy; 2025 Airport Farms. All rights reserved.
              <br />
              <span>
                Design and Develop{" "}
                <a
                  target="_blank"
                  href="https://ashish-kaintura-folio.netlify.app/"
                >
                  Ashish Kaitura
                </a>
              </span>
            </p>
            <p className="mt-2 md:mt-0">Premium Agricultural Real Estate</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
