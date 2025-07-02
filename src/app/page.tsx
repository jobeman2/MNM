'use client';

import {  DM_Sans, Open_Sans } from "next/font/google";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturesSection from "@/components/sections/Higlights";
import AboutCard from "@/components/sections/About";
import BrandLogos from "@/components/sections/brands";
import Footer from "@/components/layout/footer";
import PricingSection from "@/components/sections/Subscription";
import CustomCursor from "@/components/customecursor";

const dmsansfont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans"
});

const opensansfont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans"
});

// Fade-up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Home() {
  return (
    <div className={` ${dmsansfont.variable} ${opensansfont.variable}`}>
      <CustomCursor />
      <Navbar />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <FeaturesSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <AboutCard />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <BrandLogos />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <PricingSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
