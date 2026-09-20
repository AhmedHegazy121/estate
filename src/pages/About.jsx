import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-neutral-900 text-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden font-sans border-t border-white/10"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Glass Pill */}
          <div className="glass-pill mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            About Our Brand
          </div>

          {/* Heading with Gradient */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            Passionate About Properties, Dedicated to your{" "}
            <span className="text-gradient">Vision.</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-4">
            Crafting spaces that inspire and elevate everyday living through
            unmatched quality and architectural elegance.
          </p>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-800/50 shadow-2xl">
              <img
                src={assets.brand_img}
                alt="About Brand"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Stats & Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  10+
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Years of Excellence
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  12+
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Projects Completed
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  20+
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Mn. Sq. Ft. Delivered
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  25+
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Ongoing Projects
                </p>
              </div>
            </div>

            {/* Paragraph Text */}
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed my-8">
              We specialize in curating prime residential and commercial spaces
              that blend modern aesthetics with functional living. With a legacy
              built on trust and precision, we transform your real estate
              aspirations into enduring landmarks.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contacts"
                className="btn-primary w-full sm:w-auto text-center"
              >
                Learn More
              </a>
              <a
                href="#project"
                className="btn-glass w-full sm:w-auto text-center"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
