import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
const NAV_LINKS = [
  { label: "Home", href: "#Header" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    if (email) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <footer
      id="footer"
      className="relative w-full bg-neutral-900 text-white pt-20 pb-8 px-6 md:px-16 lg:px-24 overflow-hidden font-sans border-t border-white/10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        initial={{
          opacity: 0,
          y: -300,
        }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16">
          {/* Brand & Description */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <img
              src={assets.logo_dark}
              alt="Logo"
              className="h-9 w-auto object-contain"
            />
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-sm">
              Discover prime properties and architectural landmarks designed for
              your future. Elevate your living experience with us.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Company
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm font-medium">
              {NAV_LINKS.map((nav) => (
                <li key={nav.label}>
                  <a
                    href={nav.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
              Subscribe to our newsletter
            </h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed mb-4">
              The latest news, articles, and exclusive property insights sent
              straight to your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="form-input flex-1 !py-3"
              />
              <button
                type="submit"
                className="btn-primary !px-6 !py-3 shrink-0 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-light">
          <p>© {new Date().getFullYear()} Ahmed. All Rights Reserved.</p>
          <p className="text-neutral-400">Crafted with precision & style.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
