'use client'

import { DM_Sans, Open_Sans } from 'next/font/google'
import { motion, type Variants } from 'framer-motion'

import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import FeaturesSection from '@/components/sections/Higlights'
import AboutCard from '@/components/sections/About'
import BrandLogos from '@/components/sections/brands'
import Footer from '@/components/layout/footer'
import PricingSection from '@/components/sections/Subscription'
import CustomCursor from '@/components/customecursor'

// Fonts
const dmsansfont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const opensansfont = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

// Fade-up animation variant with correct typing
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Equivalent to "easeOut", now TypeScript safe
    },
  },
}

// Reusable fade-in wrapper
const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    {children}
  </motion.div>
)

export default function Home() {
  return (
    <div className={`${dmsansfont.variable} ${opensansfont.variable}`}>
      <CustomCursor />
      <Navbar />

      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn>
        <FeaturesSection />
      </FadeIn>

      <FadeIn>
        <AboutCard />
      </FadeIn>

      <FadeIn>
        <BrandLogos />
      </FadeIn>

      <FadeIn>
        <PricingSection />
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  )
}
