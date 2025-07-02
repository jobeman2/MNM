'use client';
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: 'easeOut', duration: 0.5, type: 'spring', stiffness: 120 },
  },
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="px-6 py-12 md:px-16 bg-white font-dm-sans select-none"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-black"
      >
        {/* Logo & Social Links */}
        <motion.div variants={sectionVariants}>
          <div className="mb-6 text-3xl font-bold text-black">
            <span>MBM</span>
            <div className="font-semibold text-xl mt-1">Promotion.</div>
          </div>
          <div className="flex space-x-6 mt-4">
            {[
              { Icon: Facebook, href: 'https://facebook.com/mbmpromotion', label: 'Facebook' },
              { Icon: Instagram, href: 'https://instagram.com/mbmpromotion', label: 'Instagram' },
              { Icon: Twitter, href: 'https://twitter.com/mbmpromotion', label: 'Twitter' },
              { Icon: Instagram, href: 'https://behance.net/mbmpromotion', label: 'Behance' },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="cursor-pointer text-black hover:text-[#7dbb1f] transform transition duration-300 hover:scale-110"
              >
                <Icon size={26} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Office Addresses */}
        <motion.div variants={sectionVariants}>
          <h4 className="font-semibold text-lg mb-3 text-[#7dbb1f]">Addis Abeba</h4>
          <p className="text-sm mb-6">
            <strong>MBM Promotion Ethiopia</strong>
            <br />
            Bole Sub City, Kebele 01
            <br />
            Addis Abeba
            <br />
            Ethiopia
          </p>
          <h4 className="font-semibold text-lg mb-3 text-[#7dbb1f]">Headquarters</h4>
          <p className="text-sm">
            <strong>MBM Promotion Ethiopia</strong>
            <br />
            Bole Sub City, Kebele 01
            <br />
            Addis Abeba
            <br />
            Ethiopia
          </p>
        </motion.div>

        {/* Work Inquiries */}
        <motion.div variants={sectionVariants}>
          <h4 className="font-semibold text-lg mb-4 text-[#7dbb1f]">Work inquiries</h4>
          <p className="text-sm mb-3">
            Interested in activating your audience with Audio Ring Back Tone campaigns?
          </p>
          <p className="text-sm font-semibold cursor-text select-text mb-6 text-black hover:text-[#5a8f00] transition">
            hello@mbmpromotion.com
          </p>

          <h4 className="font-semibold text-lg mb-3 text-[#7dbb1f]">Career</h4>
          <p className="text-sm cursor-pointer font-semibold underline text-black hover:text-[#5a8f00] transition">
            See open positions
          </p>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div variants={sectionVariants}>
          <h4 className="font-semibold text-lg mb-5 text-[#7dbb1f]">Sign up for the newsletter</h4>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex overflow-hidden rounded-lg border border-[#CEF14B]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-2 px-4 text-sm bg-[#f7fff3] text-black focus:outline-none focus:ring-2 focus:ring-[#CEF14B]"
                required
              />
              <button
                type="submit"
                className="bg-[#CEF14B] text-black px-5 text-xs font-semibold hover:bg-[#b8dd38] transition"
              >
                Sign Up
              </button>
            </div>
            <label className="flex items-start text-sm space-x-2 cursor-pointer">
              <input type="checkbox" className="accent-[#CEF14B] mt-1" />
              <span>
                I’m okay with getting emails and having that activity tracked to improve my experience.
              </span>
            </label>
          </form>
        </motion.div>
      </motion.div>

      {/* Bottom Links */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm border-[#CEF14B] text-[#7dbb1f]"
      >
        <p>© 2019–2025 MBM Promotion. All rights reserved &nbsp;|&nbsp;</p>
        <div className="space-x-5 mt-3 md:mt-0 flex flex-wrap justify-center md:justify-start gap-3 md:gap-0">
          {['Security', 'Privacy & Cookie Policy', 'Terms of Service'].map((text, i) => (
            <span
              key={i}
              className="cursor-pointer font-semibold hover:text-[#5a8f00] transition"
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
}
