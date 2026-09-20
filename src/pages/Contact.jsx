import React, { useState } from "react";
import { motion } from "motion/react";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 4500);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_FORM_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        showToast(
          "Message sent successfully! We will get back to you soon.",
          "success",
        );
        event.target.reset();
      } else {
        showToast(
          data.message || "Something went wrong. Please try again.",
          "error",
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      showToast(
        "Network error. Please check your connection and try again.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-neutral-900 text-white py-28 px-6 md:px-16 lg:px-24 overflow-hidden font-sans border-t border-white/10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Floating Glass Toast Notification (Positioned at Bottom-Left) */}
      {toast.show && (
        <div className="fixed bottom-8 left-6 z-50 max-w-sm transition-all duration-300">
          <div
            className={`flex items-start gap-3 p-4 rounded-2xl backdrop-blur-2xl border shadow-2xl ${
              toast.type === "success"
                ? "bg-neutral-950/90 border-emerald-500/40 text-emerald-300 shadow-emerald-500/10"
                : "bg-neutral-950/90 border-rose-500/40 text-rose-300 shadow-rose-500/10"
            }`}
          >
            {/* Status Icon */}
            <div className="mt-0.5 shrink-0">
              {toast.type === "success" ? (
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-rose-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </div>

            {/* Message Body */}
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-white">
                {toast.type === "success" ? "Success" : "Error"}
              </p>
              <p className="text-sm text-neutral-300 mt-0.5 font-light leading-snug">
                {toast.message}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() =>
                setToast({ show: false, message: "", type: "success" })
              }
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer ml-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}

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
            Get In Touch
          </div>

          {/* Heading with Gradient */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            Connect <span className="text-gradient">With Us.</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-4 leading-relaxed">
            Ready to make a move? Let's discuss your next landmark property and
            build your future together.
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-neutral-950/70 backdrop-blur-xl border border-white/10 p-8 sm:p-12 shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-blue-500/5">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label className="form-label" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="form-input"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="form-label" htmlFor="email">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="form-input"
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project or inquiry..."
                required
                className="form-input resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto px-10 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
