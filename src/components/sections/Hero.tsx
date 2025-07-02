'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Play, Sparkles, PhoneCall, Zap, Camera, X } from 'lucide-react'



function Toast({
  message,
  onClose,
  duration = 4000,
}: {
  message: string
  onClose: () => void
  duration?: number
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 bg-indigo-600 text-white rounded-lg shadow-lg px-5 py-3 flex items-center gap-3 max-w-xs z-[9999]"
      role="alert"
      aria-live="assertive"
    >
      <Play className="w-5 h-5" />
      <span className="flex-1 text-sm">{message}</span>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="hover:text-indigo-300 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </motion.div>
  )
}

export default function Hero() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 60, damping: 20 })
  const springY = useSpring(y, { stiffness: 60, damping: 20 })
  const rotateX = useTransform(springY, [-1, 1], [15, -15])
  const rotateY = useTransform(springX, [-1, 1], [-15, 15])

  const [showToast, setShowToast] = useState(false)

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
    const xVal = ((event.clientX - left) / width) * 2 - 1
    const yVal = ((event.clientY - top) / height) * 2 - 1
    x.set(xVal)
    y.set(yVal)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  function handlePlayClick() {
    setShowToast(true)
  }

  return (
    <>
      <section className="relative drop-shadow-2xl mt-26 py-16 bg-gray-100 px-6 lg:px-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5, times: [0, 0.5, 1], delay: 0.3 }}
          className="absolute inset-0 bg-white pointer-events-none z-[9999]"
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-4 mb-3">
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <div
                      onClick={handlePlayClick}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handlePlayClick()
                        }
                      }}
                      className="relative w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-[0_0_15px_rgba(63,0,255,0.7)] animate-pulse cursor-pointer select-none"
                      aria-label="Play Promo"
                    >
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Content
                    side="top"
                    className="bg-gray-900 text-white px-2 py-1 text-xs rounded shadow"
                  >
                    Watch how our service works
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
              <p className="text-sm font-medium text-[#5E6971] uppercase select-none">
                Play Promo
              </p>
            </div>

            <motion.h1
              className="text-4xl md:text-[50px] text-[#3A3A38] font-bold text-darkText leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Make Brands
              <br />
              Move{' '}
              <motion.span
                className="inline-block tex px-2 ml-2 bg-[#CEF14B]"
                style={{
                  clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0% 100%)',
                }}
                initial={{ opacity: 0, rotateX: -90, y: 20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
              >
                Let Every&nbsp;
              </motion.span>{' '}
              Ring Speak For You <span className="text-[#cef14b]">.</span>
            </motion.h1>

            <br />
            <br />

            <p className="text-gray-700 text-[17px] mb-4 font-dm">
              We help companies connect with real audiences through Audio Ring Back Tone (Ad-RBT)
              campaigns — in exclusive partnership with Ethio Telecom.
            </p>
            <p className="text-gray-700">Start your referral marketing journey today:</p>

            <div className="flex items-center mt-6 space-x-[-10px]">
              {['/images/pic.png', '/images/pic.png', '/images/pic.png'].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="user avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white shadow"
                />
              ))}
              <span className="ml-4 text-sm text-gray-600">+4.7K joined this week</span>
            </div>

            <p className="text-sm text-gray-700 mt-4">
              Already using our service?{' '}
              <a href="#" className="font-bold text-black hover:underline">
                Sign In
              </a>
            </p>
          </motion.div>

          {/* Right Image with Blob */}
          <div className="relative font-dm w-full max-w-xl">
            {/* Glowing Animated Blob Behind */}
            <motion.div
              className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#d0f4ff] via-[#f9c8e9] to-[#cef14b] blur-[90px] opacity-50 z-0"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="relative w-full h-[480px] z-10"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <Image
                src="/images/d.png"
                alt="Phone Illustration"
                layout="fill"
                objectFit="contain"
                className="select-none pointer-events-none"
                draggable={false}
                priority
              />
            </motion.div>

            <FloatingCard
              delay={0.5}
              position="top-[-20px] right-[-60px]"
              icon={<Zap className="w-5 h-5 text-indigo-600" />}
              title="Unskippable"
              subtitle="Keep Users listening without skipping"
            />
            <FloatingCard
              delay={0.7}
              position="bottom-[20px] left-[-70px]"
              icon={<Sparkles className="w-5 h-5 text-pink-500" />}
              title="AD RBT"
              subtitle="Stand out experiences"
            />
            <FloatingCard
              delay={0.9}
              position="top-[50%] left-[calc(100%+10px)] translate-y-[-50%]"
              icon={<PhoneCall className="w-5 h-5 text-green-500" />}
              title="Ad-RBT Power"
              subtitle="Boost brand reach via calls"
            />
            <FloatingCard
              delay={1.1}
              position="bottom-[40%] right-[calc(100%+20px)] translate-y-[50%]"
              icon={<Camera className="w-5 h-5 text-yellow-500" />}
              title="Instant Capture"
              subtitle="Catch audience attention fast"
            />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showToast && (
          <Toast message="Playing promo now!" onClose={() => setShowToast(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

function FloatingCard({
  position,
  delay,
  icon,
  title,
  subtitle,
}: {
  position: string
  delay: number
  icon: React.ReactNode
  title: string
  subtitle: string
}) {
  return (
    <motion.div
      className={`absolute ${position} w-[180px] p-4 backdrop-blur-md bg-white/70 shadow-lg rounded-xl text-sm text-gray-800 border border-white/30`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: [0, 1, 0.8, 1], y: 0 }}
      transition={{ delay, duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="flex items-center gap-2 font-semibold">
        {icon} {title}
      </div>
      <p className="text-xs text-gray-600 mt-1">{subtitle}</p>
    </motion.div>
  )
}
