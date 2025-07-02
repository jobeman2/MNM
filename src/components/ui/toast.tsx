'use client'

import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

interface ToastProps {
  show: boolean
  onClose: () => void
  audioUrl: string
}

export default function Toast({ show, onClose, audioUrl }: ToastProps) {
  useEffect(() => {
    if (show) {
      const audio = new Audio(audioUrl)
      audio.play()

      const timeout = setTimeout(() => {
        onClose()
      }, 5000)

      return () => {
        audio.pause()
        clearTimeout(timeout)
      }
    }
  }, [show, audioUrl, onClose])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 100 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed bottom-5 right-5 z-50 w-80 bg-white shadow-xl border border-gray-200 rounded-xl p-4 flex items-start gap-3 text-black"
        >
          <div className="flex-1">
            <h4 className="font-semibold text-base">Promo Playing</h4>
            <p className="text-sm mt-1">Audio Ring Back Tone ad is now playing...</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition">
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
