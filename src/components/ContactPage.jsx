import React from 'react';
import { motion } from 'framer-motion';
import f1Img from '../f1.jpeg';
import f2Img from '../f2.jpeg';

const coFounders = [
  {
    name: "Ankith Remesh",
    role: "Growth & Marketing Lead",
    image: f1Img,
    expertise: ["Content Marketing", "Lead Generation"],
    accentColor: "from-[#ffcc00] to-[#f3cb69]",
    glowColor: "bg-[#ffcc00]/15"
  },
  {
    name: "Vaishnav",
    role: "Technology & Creative Lead",
    image: f2Img,
    expertise: ["Development", "Branding"],
    accentColor: "from-[#7cfee4] to-[#3b82f6]",
    glowColor: "bg-[#7cfee4]/15"
  }
];

const ContactPage = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-black text-white pt-28 pb-24 px-4 md:px-12 relative overflow-hidden z-10 flex flex-col items-center justify-start"
    >
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#ffcc00]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#7cfee4]/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto">
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between mb-12">
          {onBack && (
            <button
              onClick={onBack}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md text-sm font-medium hover:bg-white/10 hover:border-[#ffcc00]/50 transition-all duration-300"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform duration-300">
                ←
              </span>
              Back to Home
            </button>
          )}

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs uppercase tracking-widest font-semibold">
            Direct Leadership Contact
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Connect With Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] via-[#f3cb69] to-[#7cfee4] italic">
              Co-Founders.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            No gatekeepers or automated queues. Speak directly with the Founders behind Influix to scale your brand.
          </p>
        </div>

        {/* 2 Co-Founder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {coFounders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl p-6 md:p-10 shadow-2xl hover:border-[#ffcc00]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Corner Accent Glow */}
              <div
                className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${founder.glowColor}`}
              />

              <div>
                {/* Founder Image */}
                <div className="relative mb-8 rounded-2xl overflow-hidden bg-black/40 aspect-[4/3] flex items-center justify-center">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Expertise Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {founder.expertise.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Name, Role & Description */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {founder.name}
                </h3>
                <p className="text-sm text-[#ffcc00] font-medium mb-4">
                  {founder.role}
                </p>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {founder.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Single Prominent Action Button Outside the Two Cards */}
        <div className="flex justify-center mb-16">
          <motion.a
            href="https://calendly.com/production-influixindia/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-[#ffcc00] via-[#f3cb69] to-[#ffcc00] text-black font-bold text-base shadow-[0_0_40px_rgba(255,204,0,0.3)] hover:shadow-[0_0_60px_rgba(255,204,0,0.5)] transition-all duration-300"
          >
            <span>Book a strategy call</span>
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </motion.a>
        </div>

        {/* Quick Direct Email Bar */}
        <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-xl font-bold text-white">
              Have a general inquiry or partnership proposal?
            </h4>
            <p className="text-sm text-gray-400 mt-1">
              We typically respond within 2 hours on business days.
            </p>
          </div>
          <a
            href="mailto:production.influixindia@gmail.com"
            className="px-8 py-3.5 rounded-full border border-[#ffcc00] text-[#ffcc00] font-semibold text-sm hover:bg-[#ffcc00] hover:text-black transition-all duration-300 whitespace-nowrap"
          >
            Email Our Team →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
