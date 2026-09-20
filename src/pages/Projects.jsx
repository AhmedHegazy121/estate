import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Responsive items per slide
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1,
    );
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-neutral-900 text-white py-28 px-6 md:px-16 lg:px-24 overflow-hidden font-sans border-t border-white/10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="container mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Glass Pill */}
          <div className="glass-pill mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            Our Portfolio
          </div>

          {/* Heading with Gradient */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            Crafting Spaces, Building{" "}
            <span className="text-gradient">Legacies.</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-4 leading-relaxed">
            Explore our curated portfolio of landmark properties designed to
            inspire, elevate, and redefine modern living.
          </p>
        </div>

        {/* Carousel Top Controls */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            Featured Projects
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={prevProject}
              className="btn-icon w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all hover:scale-105 active:scale-95"
              aria-label="Previous Project"
            >
              <img
                src={assets.left_arrow}
                alt="Previous"
                className="w-4 h-4 brightness-0 invert opacity-80"
              />
            </button>
            <button
              onClick={nextProject}
              className="btn-icon w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all hover:scale-105 active:scale-95"
              aria-label="Next Project"
            >
              <img
                src={assets.right_arrow}
                alt="Next"
                className="w-4 h-4 brightness-0 invert opacity-80"
              />
            </button>
          </div>
        </div>

        {/* Project Slider Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] group"
              >
                {/* Premium Tall Card Container */}
                <div className="relative h-[480px] sm:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-neutral-950/80 shadow-2xl transition-all duration-500 group-hover:border-white/25 group-hover:shadow-blue-500/5">
                  {/* Full Height Background Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Multi-Stop Cinematic Dark Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

                  {/* Top Badge: Status */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-black/40 backdrop-blur-md border border-white/15 text-blue-200">
                      Completed
                    </span>
                  </div>

                  {/* Bottom Floating Glass Details Panel */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-5 rounded-2xl bg-neutral-950/70 backdrop-blur-xl border border-white/15 shadow-2xl transition-all duration-300 group-hover:bg-neutral-950/85 group-hover:border-white/30">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-blue-300 transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-neutral-400 flex items-center gap-1.5 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"></span>
                          {project.location}
                        </p>
                      </div>

                      {/* Price Tag */}
                      <span className="text-xs sm:text-sm font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-400/20 shrink-0">
                        {project.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
