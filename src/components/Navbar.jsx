import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const NAV_LINKS = [
  { label: "Home", href: "#Header" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Navbar */}
      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "glass-navbar py-3.5" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20">
          {/* Logo */}
          <a href="#Header" className="relative z-50">
            {assets?.logo ? (
              <img src={assets.logo} alt="Logo" className="h-8 md:h-9 w-auto" />
            ) : (
              <span className="text-xl font-bold text-white tracking-wider">
                ESTATE
              </span>
            )}
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button type="button" className="btn-white">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden relative z-50 btn-icon"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 stroke-white"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 stroke-white"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          {/* Reusable Backdrop */}
          <div
            className="glass-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Reusable Dark Glass Drawer */}
          <div className="fixed top-0 right-0 h-full w-[78%] max-w-xs glass-drawer z-[99] flex flex-col justify-between p-6 pt-20">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4 px-2">
                Navigation
              </p>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="nav-link-mobile"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
