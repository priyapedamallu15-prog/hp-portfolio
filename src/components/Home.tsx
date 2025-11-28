import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Home = () => {
  const [showMailBox, setShowMailBox] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (!showMailBox) return;
    const interval = setInterval(() => setBlink((prev) => !prev), 1800);
    return () => clearInterval(interval);
  }, [showMailBox]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-gradient-to-b from-rose-50 via-sky-50 to-emerald-50 text-slate-900"
    >
      {/* 🔹 Local CSS for waving hand */}
      <style>
        {`
          @keyframes home-wave {
            0% { transform: rotate(0deg); }
            15% { transform: rotate(14deg); }
            30% { transform: rotate(-8deg); }
            45% { transform: rotate(14deg); }
            60% { transform: rotate(-4deg); }
            75% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }
          .home-animate-wave {
            display: inline-block;
            transform-origin: 70% 70%;
            animation: home-wave 1.7s ease-in-out infinite;
          }
        `}
      </style>

      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 -left-10 h-[420px] w-[420px] rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute top-1/4 right-[-4rem] h-[420px] w-[420px] rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 h-[420px] w-[420px] rounded-full bg-emerald-300/30 blur-3xl" />
      </div>

      {/* main content */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="w-full text-center space-y-10 animate-fade-in">

          {/* SIDE-BY-SIDE: Image + Text */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-12 px-4 lg:px-6">

            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-sky-500 
                rounded-full blur-3xl opacity-60" />

              <div
                className="relative w-[340px] h-[340px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden
                border-[8px] border-white shadow-xl shadow-sky-200/40
                transition-transform duration-500 hover:scale-105 hover:-translate-y-1"
              >
                <img
                  src="https://res.cloudinary.com/ddut43twx/image/upload/v1764152763/y3qdvqsrkioyawnze31e.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TEXT SIDE */}
            <div className="flex flex-col items-center text-center gap-5 max-w-3xl">

              {/* Hello + waving hand */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-600 font-light flex items-center gap-2">
                Hello There
                <span className="home-animate-wave">👋</span>
              </h2>

              {/* NAME → LEFT ALIGNED ONLY, hover makes name larger */}
              <div className="w-full text-left group cursor-default">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight md:whitespace-nowrap">
                  I&apos;m{" "}
                  <span
                    className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 
                    bg-clip-text text-transparent md:whitespace-nowrap
                    transition-transform duration-300 ease-out
                    group-hover:scale-110"
                  >
                    PEDAMALLU HARI PRIYA
                  </span>
                </h1>
              </div>

              {/* Highlighted role (CENTERED) */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold
                bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 
                bg-clip-text text-transparent text-center">
                Program Associate Mentor
              </p>

              {/* Secondary roles (CENTERED) */}
              <p className="text-lg md:text-2xl text-slate-700 font-medium text-center">
                Software Developer • Live Mentor
              </p>

              {/* Description (CENTERED) */}
              <p className="text-lg md:text-2xl text-slate-700 leading-relaxed max-w-xl text-center">
                Empowering the next generation of innovators with real-world application
                development experience at NxtWave.
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-4 flex justify-center gap-8 relative">

            <a
              href="https://github.com/priyapedamallu15-prog"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200
              hover:bg-sky-50 hover:border-sky-300 hover:-translate-y-1 transition-all"
            >
              <Github size={36} className="text-sky-700" />
            </a>

            <a
              href="https://www.linkedin.com/in/hari-priya-pedamallu-b940aa32a/"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200
              hover:bg-sky-50 hover:border-sky-300 hover:-translate-y-1 transition-all"
            >
              <Linkedin size={36} className="text-sky-700" />
            </a>

            <button
              onClick={() => setShowMailBox((prev) => !prev)}
              className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200
              hover:bg-pink-50 hover:border-pink-300 hover:-translate-y-1 transition-all"
            >
              <Mail size={36} className="text-pink-600" />
            </button>

            {/* Email Popup */}
            {showMailBox && (
              <div
                className={`absolute -top-16 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl 
                text-white font-semibold text-sm shadow-lg
                bg-gradient-to-r from-purple-500 via-rose-500 to-sky-500
                transition-opacity duration-700
                ${blink ? "opacity-100" : "opacity-0"}`}
              >
                📩 priyapedamallu15@gmail.com
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
