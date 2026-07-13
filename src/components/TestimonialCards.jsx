import React from 'react';
import { motion } from 'framer-motion';
import platedLogo from '../../Plated Logo.png';
import travelLogo from '../../TRAVEL PARTNER.jpg.jpeg';
import aspireLogo from '../../ASPIRE.jpg.jpeg';
import flywiseLogo from '../../FLYWISE FINAL FINAL LOGO (1).png';

const testimonialsData = [
  {
    company: "Plated Restaurant",
    name: "Raihan",
    role: "Managing Director, Pathanamthitta",
    logo: platedLogo,
    quote: "The Influix team completely changed how we approached content. Their creativity and consistency helped us reach over 1 million people in just four months, and we saw a noticeable increase in customer engagement. It has been a great experience working with them.",
    highlightColor: "from-[#ffcc00]/20 to-transparent"
  },
  {
    company: "Orbit Travel Partner",
    name: "Deepak",
    role: "Managing Director",
    logo: travelLogo,
    quote: "Influix delivered exactly what we needed. Their lead generation campaigns brought in quality enquiries, and their creative designs gave our brand a much more professional and trustworthy presence. I highly recommend their team.",
    highlightColor: "from-[#7cfee4]/20 to-transparent"
  },
  {
    company: "Aspire Study Abroad",
    name: "Akhil",
    role: "Managing Director",
    logo: aspireLogo,
    quote: "We were looking for quality leads, not just numbers, and Influix delivered. The leads were highly relevant, which made it much easier for our team to convert them into students. Their process is reliable and results driven.",
    highlightColor: "from-[#ffcc00]/20 to-transparent"
  },
  {
    company: "Flywise International Pvt Ltd",
    name: "Arjun",
    role: "Founder & CEO",
    logo: flywiseLogo,
    quote: "The content produced by Influix helped us reach a much wider audience than we expected. Their strategy, video production, and consistency significantly improved our online presence and brand visibility.",
    highlightColor: "from-[#7cfee4]/20 to-transparent"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const TestimonialCards = () => {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden z-10">

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#ffcc00]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#7cfee4]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4"
        >
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
        >
          Real Results,{"  "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] via-[#f3cb69] to-[#7cfee4] italic mr-10">
            Trusted&nbsp;  Partners.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 font-light"
        >
          Discover how our strategic content and lead generation campaigns have transformed modern businesses.
        </motion.p>
      </div>

      {/* Glassmorphic Testimonial Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
      >
        {testimonialsData.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="group relative rounded-3xl p-8 md:p-10 border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:border-[#ffcc00]/40 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Right Ambient Gradient Accent */}
            <div
              className={`absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br ${item.highlightColor} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            {/* Quote Icon & Stars */}
            <div>
              <div className="flex items-center justify-between mb-8">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#ffcc00] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Subtle Quote Mark */}
                <span className="text-5xl font-serif text-white/10 group-hover:text-[#ffcc00]/30 transition-colors duration-300 select-none">
                  “
                </span>
              </div>

              {/* Quote Text */}
              <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed mb-10">
                "{item.quote}"
              </p>
            </div>

            {/* Author & Company Footer */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Logo / Avatar Thumbnail */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 p-1.5 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-[#ffcc00]/50 transition-colors duration-300">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>

                <div>
                  <h4 className="text-white font-semibold text-lg tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-[#ffcc00] text-sm font-medium">
                    {item.role}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialCards;
