'use client'

import Link from 'next/link'
import {
  Menu,
  Leaf,
  Info,
  Phone,
  DollarSign,
  HelpCircle,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 px-4 mt-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        className="backdrop-blur-xl bg-[#d9f28e]/10 border border-[#d9f28e]/30 shadow-lg px-8 py-4 rounded-3xl flex items-center justify-between max-w-7xl mx-auto"
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          className="flex items-center space-x-4"
        >
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <span className="text-xl font-bold text-gray-900 tracking-tight">MNM</span>
        </motion.div>

        {/* Center Nav */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="hidden md:flex items-center space-x-8 text-[15px] text-gray-700 font-medium"
        >
          <Link href="#" className="flex items-center gap-2 hover:text-black transition">
            <Info size={16} />
            About Us
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-black transition">
            <Phone size={16} />
            Contact
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-black transition">
            <DollarSign size={16} />
            Pricing
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-black transition">
            <HelpCircle size={16} />
            FAQ
          </Link>
        </motion.nav>

        {/* Right Side Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d9f28e] text-[#0f172a] shadow-md">
            <Leaf size={18} />
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}
