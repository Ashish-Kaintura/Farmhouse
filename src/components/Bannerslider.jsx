import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Bannerslider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const progressRef = useRef(null);

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
      title: "HITECH AGRICULTURE",
      subtitle: "Expert Consultation For Horticulture.",
      desc: "Fertile freehold land with sweet water available for all your farming needs.",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // 🔥 MAIN GSAP ANIMATION
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Reset visibility (important!)
      gsap.set([titleRef.current, subtitleRef.current, descRef.current], {
        opacity: 1,
      });

      // Background animation
      tl.fromTo(
        bgRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" },
      );

      // Title animation
      tl.from(
        titleRef.current.querySelectorAll(".word"),
        {
          y: 60,
          opacity: 0,
          stagger: 0.06,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=1",
      );

      // Subtitle
      tl.from(
        subtitleRef.current,
        { y: 30, opacity: 0, duration: 0.6 },
        "-=0.6",
      );

      // Description
      tl.from(descRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.5");

      // Progress bar
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 6, ease: "linear" },
      );
    });

    return () => ctx.revert();
  }, [currentSlide]);

  // Auto play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const splitWords = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block">
        {word}&nbsp;
      </span>
    ));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/5 z-10" />
      <div
        className="absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(245,245,244,0.95) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-40 w-full max-w-7xl mx-auto px-4 text-center py-24">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-red-700"
        >
          {splitWords(slides[currentSlide].title)}
        </h1>

        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-2xl font-semibold text-emerald-600 uppercase"
          >
            {slides[currentSlide].subtitle}
          </p>

          <p
            ref={descRef}
            className="text-sm sm:text-base md:text-lg text-blue-700"
          >
            {slides[currentSlide].desc}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#financials"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full shadow-lg"
          >
            Explore Plans
          </a>
          <a
            href="#contact"
            className="bg-white border-2 border-emerald-600 text-emerald-700 px-8 py-4 rounded-full shadow-md"
          >
            Contact an Expert
          </a>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 z-50 bg-white/70 p-3 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 z-50 bg-white/70 p-3 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 flex gap-3 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-emerald-600 w-10" : "bg-white w-3"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-100">
        <div ref={progressRef} className="h-full bg-emerald-600 origin-left" />
      </div>
    </section>
  );
}
