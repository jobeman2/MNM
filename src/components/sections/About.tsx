'use client'
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

export default function AboutCard() {
  // Simple subtle pulsing blob animation
  const blobVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.4, 0.6, 0.4],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }
    }
  };

  return (
    <section className="bg-[#f4f6ff] text-gray-800 font-dm py-16 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">

        {/* Right Section: Illustration Slides In From Right with Fade + Blob on top behind */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="hidden md:flex justify-center items-center relative z-10"
        >
          {/* Circular glowing blob above her head, behind the image */}
          <motion.div
            variants={blobVariants}
            animate="animate"
            className="absolute w-48 h-48 bg-[#CEF14B] rounded-full blur-3xl opacity-40"
            style={{ top: '-4.5rem', left: '50%', translateX: '-50%' }}
          />

          <motion.img
            src="/images/girl.png"
            alt="MBM Promotion Illustration"
            className="w-full max-w-xl relative z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        {/* Left Section: MBM Promotion Description */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="z-0"
        >
          <h2 className="text-sm font-semibold uppercase text-gray-500 mb-2 tracking-wide">
            MBM Promotion
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <Typewriter
              words={["Audio That Moves Brands"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={800}
            />
          </h1>

          <motion.p
            className="text-gray-700 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            MBM Promotion helps brands connect with real audiences using Audio Ring Back Tone (Ad-RBT) campaigns in partnership with Ethio Telecom.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Callers hear your message — not a dial tone — creating a direct, immersive, and memorable experience.
          </motion.p>

          <motion.div
            className="space-y-2 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <p>• 100% audio attention — can’t be skipped</p>
            <p>• Measurable reach and performance</p>
            <p>• Great for banks, FMCGs, apps, and campaigns</p>
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <button className="bg-[#CEF14B] text-black px-6 py-3 rounded-xl font-semibold shadow-md transition">
              Discover More →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
