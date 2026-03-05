// HeroBanner.jsx
import React from "react";
import video from "../assets/Drone_Shot_of_Farmhouse_and_Terraces.mp4";
import img from "../assets/poster.png";
export default function HeroBanner({ videoSrc = video, poster = img }) {
  return (
    <header className="relative w-full h-screen max-h-[880px] md:max-h-[720px] overflow-hidden md:pt-28 pt-0">
      {/* Background video (desktop) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Image fallback for browsers / for SEO - put as background for small screens */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay + subtle glass blur */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 60%)",
          backdropFilter: "blur(4px)",
        }}
        aria-hidden="true"
      />

      {/* Decorative floating leaves (pure CSS animation) */}
      <svg
        className="pointer-events-none absolute left-4 top-12 w-20 h-20 opacity-60 animate-leaf motion-reduce:animate-none"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <path
          d="M8 32c8-12 24-20 36-8-8 4-18 8-28 20C14 40 10 36 8 32z"
          fill="rgba(255,255,255,0.12)"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="max-w-3xl text-white">
          {/* Badge */}
          <span className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm mb-4 backdrop-blur-md">
            AIRPORT FARMS (Bajna)
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-green-400 ">
            Agriculture Land Near Zewar Airport
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-white/90">
            Enjoy Green Pollution Free Environment for a Healthy and Lavish
            Lifestyle .
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#financials"
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md font-semibold shadow-md"
            >
              View Listings
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 border border-white/30 rounded-md text-white/95"
            >
              Schedule Visit
            </a>
          </div>
        </div>
      </div>

      {/* small style block for keyframes (could live in global CSS) */}
      <style jsx>{`
        @keyframes floatLeaf {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-18px) rotate(6deg) translateX(6px);
            opacity: 0.9;
          }
          100% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0.6;
          }
        }
        .animate-leaf {
          animation: floatLeaf 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-leaf {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
