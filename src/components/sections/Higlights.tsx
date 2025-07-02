'use client'

import { CheckCircle, Radio, Users, DollarSign } from 'lucide-react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

// Feature definitions
const features = [
  {
    title: 'Make Every Ring Speak for You.',
    icon: Radio,
    active: true,
    bullets: [
      'Ad-RBT partnership with Ethio Telecom',
      'Short, engaging brand messages',
      'Reach real audiences instantly',
      'Incentivize users with free packages',
    ],
  },
  {
    title: 'Reach the Right People, Right Away.',
    icon: Users,
    active: false,
    bullets: [
      'No skipping — 100% audio attention',
      'Localized and trackable reach',
      'Brand-safe, measurable results',
      'Backed by data and call records',
    ],
  },
  {
    title: 'Only Pay for What You Get.',
    icon: DollarSign,
    active: false,
    bullets: [
      'No setup fee or hidden charges',
      'Pay per subscriber and per listen',
      'Transparent reporting',
      'Full control of your campaign',
    ],
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative font-dm py-24 px-6 lg:px-20 overflow-hidden bg-white">
      {/* Background blobs */}
      <img
        src="/blobs/blob1.svg"
        alt="blob"
        className="pointer-events-none absolute top-[-100px] left-[-100px] w-[300px] opacity-20 animate-blob"
      />
      <img
        src="/blobs/blob2.svg"
        alt="blob"
        className="pointer-events-none absolute bottom-[-100px] right-[-100px] w-[400px] opacity-20 animate-blob animation-delay-2000"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 relative z-10">
        {features.map(({ title, icon: Icon, active, bullets }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.25, ease: 'easeOut' }}
            viewport={{ once: true }}
            className={clsx(
              'rounded-3xl p-8 transition-all duration-300 border border-transparent group hover:-translate-y-1',
              active ? 'bg-white text-gray-900' : 'bg-white/90 text-gray-800'
            )}
          >
            {/* Icon */}
            <motion.div
              className="mb-6 w-14 h-14 rounded-full bg-[#e8fcd1] flex items-center justify-center"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            >
              <Icon className="w-7 h-7 text-[#c5f35d]" />
            </motion.div>

            {/* Title */}
            <h3 className="text-[27px] font-bold mb-5 text-[#1f3d2d] leading-snug">{title}</h3>

            {/* Bullet points */}
            <ul className="space-y-4">
              {bullets.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <CheckCircle size={18} className="text-[#c5f35d] mt-0.5" />
                  <span className="font-mont">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(15px, -10px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 10px) scale(0.95);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}
