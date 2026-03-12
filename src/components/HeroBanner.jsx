export default function HeroBanner() {
  const poster =
    "https://raw.githubusercontent.com/Ashish-Kaintura/Farmhouse/main/src/assets/banner3.png";
  const videoSrc =
    "https://raw.githubusercontent.com/Ashish-Kaintura/Farmhouse/main/src/assets/banner3video.mp4";

  return (
    <header className="relative w-full h-screen max-h-[880px] md:max-h-[720px] overflow-hidden md:pt-28 pt-0 bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline // Required for autoplay on iPhone
        preload="auto"
        poster={poster} // This replaces your separate <div> fallback
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 60%)",
          backdropFilter: "blur(1px)", // Reduced blur slightly for better mobile performance
        }}
        aria-hidden="true"
      />

      {/* Content - Ensured z-index is higher than video/overlay */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <span className="inline-block bg-white/10 px-4 py-1  text-xl rounded-full mb-4 backdrop-blur-md">
            AIRPORT FARMS Bajna (Vrindavan)
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-green-400">
            Agriculture Land Near Zewar Airport
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90">
            Enjoy Green Pollution Free Environment for a Healthy and Lavish
            Lifestyle.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="#financials"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md font-semibold transition-colors"
            >
              Main Highlights
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/30 rounded-md text-white/95 hover:bg-white/10 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* CSS remains the same */}
      <style jsx>{`
        @keyframes floatLeaf {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-18px) rotate(6deg);
            opacity: 0.9;
          }
        }
        .animate-leaf {
          animation: floatLeaf 6s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}
