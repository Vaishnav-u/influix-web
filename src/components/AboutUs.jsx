import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import BlurText from "./blurText";
import SplitText from './scrollfloat';
import aboutImg from '../About Image.png';

const AboutUs = () => {
  const containerRef = useRef(null);

  // 1. Scroll Progress for the specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement for background and elements
  const yBg = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yContent = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateOrbs = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <motion.section
      id="about"
      ref={containerRef}
      className="bg-black text-white py-10 md:py-24 px-6 md:px-24 min-h-screen flex items-center overflow-hidden relative z-10"
    >
      {/* 3. Parallax Background Orbs (Behind content) */}
      <motion.div style={{ y: yBg, rotate: rotateOrbs }} className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-[10%] top-[20%] w-[35vw] h-[35vw] rounded-full bg-[#ffcc00]/10 blur-[120px]" />
        <div className="absolute right-[5%] bottom-[10%] w-[40vw] h-[40vw] rounded-full bg-orange-600/10 blur-[150px]" />
      </motion.div>

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full gap-16 relative z-20">

        {/* Left Side: Content with subtle parallax */}
        <motion.div
          style={{ y: yContent }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8 lg:max-w-2xl"
        >
          <header>
            <BlurText
              text="About Influix"
              delay={300}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4"
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              className="h-1.5 bg-[#ffcc00] rounded-full"
            />
          </header>

          <div className="space-y-6">
            <SplitText
              text="At Influix, we help businesses grow through strategy, creativity, and technology.From branding and websites to digital marketing and AI automation, we create solutions that attract the right customers, generate quality leads, and drive real business growth."
              className="text-2xl md:text-3xl lg:text-2xl align-left font-light leading-[1.3] text-gray-200"
              delay={2}
              duration={0.6}
              ease="back.out"
              splitType="words"
            />

            <SplitText
              text="Our focus is simple. Build strong brands, deliver measurable results, and help businesses grow with confidence."
              className="text-2xl md:text-3xl lg:text-2xl align-left font-light leading-[1.3] text-gray-200"
              delay={2}
              duration={0.6}
              ease="back.out"
              splitType="words"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
          className="flex-1 relative w-full flex items-center justify-center my-8 lg:my-0"
        >
          {/* Ambient Background Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-3/4 h-3/4 bg-[#ffcc00]/15 rounded-full blur-[80px]" />
          </div>

          {/* Styled Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full max-w-lg rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-white/5 backdrop-blur-sm group"
          >
            <img
              src={aboutImg}
              alt="About Influix Team"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Decorative Floating Element */}
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#ffcc00]/10 rounded-full blur-2xl z-0 pointer-events-none"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;