import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
const Header = () => {
  return (
    <section
      id="Header"
      className="relative min-h-screen w-full bg-cover bg-center flex flex-col justify-between bg-neutral-900 font-sans"
      style={{
        backgroundImage: assets?.header_img
          ? `url(${assets.header_img})`
          : "none",
      }}
    >
      {/* Background Dimmer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85 pointer-events-none" />

      {/* Top Navbar */}
      <Navbar />

      {/* Hero Content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 flex-1 flex flex-col justify-center items-center text-center pt-28 pb-12"
      >
        {/* Reusable Pill */}
        <div className="glass-pill mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          Premium Real Estate Living
        </div>

        {/* Reusable Heading & Gradient */}
        <h1 className="hero-title max-w-5xl">
          Explore homes that fit your{" "}
          <span className="text-gradient">dreams.</span>
        </h1>

        {/* Reusable Subtitle */}
        <p className="hero-subtitle mt-6">
          Discover handpicked luxury villas, modern apartments, and
          architectural masterpieces tailored to your lifestyle.
        </p>

        {/* Reusable Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
          <a href="#project" className="btn-primary w-full sm:w-auto">
            Explore Projects
          </a>
          <a href="#contact" className="btn-glass w-full sm:w-auto">
            Contact Agent
          </a>
        </div>
      </motion.div>

      {/* Bottom Stats */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/20 backdrop-blur-sm py-6">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">12k+</h3>
            <p className="text-xs sm:text-sm text-neutral-400">Properties</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">99%</h3>
            <p className="text-xs sm:text-sm text-neutral-400">Satisfaction</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">15+</h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Years Experience
            </p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">24/7</h3>
            <p className="text-xs sm:text-sm text-neutral-400">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
