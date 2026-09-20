import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-neutral-900 text-white py-28 px-6 md:px-16 lg:px-24 overflow-hidden font-sans border-t border-white/10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          {/* Glass Pill */}
          <div className="glass-pill mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            Testimonials
          </div>

          {/* Heading with Gradient Accent */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            Customer <span className="text-gradient">Testimonials.</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-4 leading-relaxed">
            Real stories from those who found home, elevated living, and trusted
            us with their journey.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-neutral-950/70 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/25 hover:shadow-blue-500/5 hover:-translate-y-1.5"
            >
              {/* Top Accent & Stars */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Star Rating */}
                  <div className="flex gap-1.5">
                    {Array.from({ length: testimonial.rating || 5 }).map(
                      (_, starIndex) => (
                        <img
                          key={starIndex}
                          src={assets.star_icon}
                          alt="star"
                          className="w-4 h-4 object-contain"
                        />
                      ),
                    )}
                  </div>

                  {/* Verified Badge */}
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-blue-300 bg-blue-500/10 border border-blue-400/20 px-2.5 py-1 rounded-full">
                    Verified
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Client Profile Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-13 h-13 rounded-2xl object-cover border border-white/20 p-0.5 bg-white/5 shrink-0"
                />
                <div className="space-y-0.5">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"></span>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
