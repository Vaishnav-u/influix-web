import React from 'react';
import { motion } from 'framer-motion';
import cs1Img from '../cs1.jpeg';
import cs2Img from '../cs2.jpeg';
import cs3Img from '../cs3.jpeg';

const caseStudiesData = [
  {
    niche: "Food Industry",
    service: "Content Production & Sales",
    quote: "This is how our client’s social media dashboards look once we onboard them.",
    description: "Through strategic content production and sales optimization, we helped scale brand discovery and customer conversions.",
    image: cs1Img,
    stats: [
      {
        value: "93.7%",
        label: "Reach to Non-Followers",
        desc: "Viral organic discovery to new audiences",
        gradient: "from-[#ffcc00] to-[#f3cb69]"
      },
      {
        value: "2,695",
        label: "Interactions",
        desc: "Active engagement across posts",
        gradient: "from-[#7cfee4] to-[#3b82f6]"
      },
      {
        value: "515+",
        label: "New Followers",
        desc: "Net audience growth gained",
        gradient: "from-[#ffcc00] to-[#7cfee4]"
      }
    ]
  },
  {
    niche: "Education Industry",
    service: "Social Media Growth",
    quote: "We know how exactly contents work on socials and we are specialised in emotion and hooks!",
    description: "By creating highly emotional, hook-driven content tailored for educational audiences, we drove massive engagement and profile discovery.",
    image: cs2Img,
    stats: [
      {
        value: "87,207+",
        label: "Views",
        desc: "Organic reach driven by viral hooks",
        gradient: "from-[#ffcc00] to-[#f3cb69]"
      },
      {
        value: "6,161",
        label: "Interactions",
        desc: "High audience saves, shares & comments",
        gradient: "from-[#7cfee4] to-[#3b82f6]"
      },
      {
        value: "317",
        label: "New Profile Visits",
        desc: "High-intent prospective leads",
        gradient: "from-[#ffcc00] to-[#7cfee4]"
      }
    ]
  },
  {
    niche: "Modern Businesses",
    service: "Web Development",
    quote: "Ai integrated developement 2x effective and fast, so basically we could deliver you the finest website within 7 Days!",
    description: "High-converting, AI-integrated modern websites engineered for speed, premium aesthetics, and direct business revenue.",
    image: cs3Img,
    stats: [
      {
        value: "12+",
        label: "Website Delivered",
        desc: "Finest modern websites deployed fast",
        gradient: "from-[#ffcc00] to-[#f3cb69]"
      },
      {
        value: "1.2k+",
        label: "Leads Generated",
        desc: "High-intent customer inquiries captured",
        gradient: "from-[#7cfee4] to-[#3b82f6]"
      },
      {
        value: "₹42 Lakh+",
        label: "Revenue Generated",
        desc: "Direct business impact & conversions",
        gradient: "from-[#ffcc00] to-[#7cfee4]"
      }
    ]
  }
];

const CaseStudies = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-black text-white pt-28 pb-24 px-4 md:px-12 relative overflow-hidden z-10 flex flex-col items-center justify-start"
    >
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffcc00]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#7cfee4]/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto">
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between mb-8">
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
            Featured Case Studies
          </div>
        </div>

        {/* Case Studies Cards Stack */}
        <div className="space-y-12">
          {caseStudiesData.map((cs, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl p-6 md:p-12 shadow-2xl overflow-hidden"
            >
              {/* Card Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-4 py-1.5 rounded-full text-sm text-gray-200">
                    <span className="text-gray-400 mr-1.5">Niche:</span>
                    <span className="font-semibold text-white">{cs.niche}</span>
                  </div>
                  <div className="px-4 py-1.5 rounded-full text-sm text-gray-200">
                    <span className="text-gray-400 mr-1.5">Service:</span>
                    <span className="font-semibold text-[#ffcc00]">{cs.service}</span>
                  </div>
                </div>

                <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">
                  Client Results #{index + 1}
                </span>
              </div>

              {/* Card Body: 2-Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* Left Column: Context & Key Stats */}
                <div className="lg:col-span-6 space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white mb-4">
                      "{cs.quote}"
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {cs.description}
                    </p>
                  </div>

                  {/* 3 Stats Inside Clean Mini-Cards */}
                  <div className="space-y-4">
                    {cs.stats.map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-5 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-between"
                      >
                        <div>
                          <h3
                            className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}
                          >
                            {stat.value}
                          </h3>
                          <p className="text-sm font-medium text-gray-300 mt-1">
                            {stat.label}
                          </p>
                        </div>
                        <span className="text-xs text-gray-400 max-w-[140px] text-right hidden sm:block">
                          {stat.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Dashboard Image Inside Card */}
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/50 p-2 shadow-xl group">
                    <img
                      src={cs.image}
                      alt={`${cs.niche} Case Study Dashboard`}
                      className="w-full h-auto object-contain rounded-xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudies;
