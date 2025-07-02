'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    function onMouseDown() {
      setClicked(true)
    }
    function onMouseUp() {
      setClicked(false)
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  useEffect(() => {
    function handleMouseOver(e: Event) {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('role') === 'button' ||
        target.hasAttribute('data-cursor-hover')
      ) {
        setHovered(true)
      }
    }
    function handleMouseOut() {
      setHovered(false)
    }
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: clicked ? 0.8 : hovered ? 1.5 : 1,
          x: position.x - 10,
          y: position.y - 10,
          transition: { type: 'spring', stiffness: 500, damping: 28 },
        }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          backgroundColor: hovered ? '#7b63d6' : 'black',
          mixBlendMode: 'difference',
          userSelect: 'none',
        }}
      />
    </AnimatePresence>
  )
}
