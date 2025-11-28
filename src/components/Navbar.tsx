import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Resume", href: "/resume" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-[0_10px_30px_rgba(148,163,184,0.25)]"
          : "bg-white/70 backdrop-blur-sm border-b border-slate-200/60"
      }`}
    >
      {/* full-width, no centered container */}
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-3 sm:px-4 lg:px-6">
          {/* LOGO — no left margin */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-extrabold tracking-tight 
            bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 
            bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            HARI PRIYA
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-full text-[15px] font-medium transition-all
                ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white shadow-md shadow-pink-200/50"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full border border-slate-200 bg-white/80 
            text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden pb-3 px-3">
            <div className="mt-1 rounded-2xl bg-white/95 border border-slate-200 shadow-[0_12px_35px_rgba(148,163,184,0.25)] overflow-hidden">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-3 text-[15px] font-medium transition-all
                  ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
