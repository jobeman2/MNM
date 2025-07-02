'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function ScrollFade({
  children,
  direction = 'up',
  delay = 0,
}: {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}) {
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 50 }
      case 'down':
        return { y: -50 }
      case 'left':
        return { x: 50 }
      case 'right':
        return { x: -50 }
      default:
        return {}
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...getOffset() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
