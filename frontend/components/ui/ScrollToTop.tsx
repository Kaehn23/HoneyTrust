"use client"
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Show button and update scroll progress
  const toggleVisibility = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    const currentProgress = (window.pageYOffset / scrollHeight) * 100
    
    setScrollProgress(currentProgress)
    
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: scrollProgress / 100,
            scale: 0.5 + (scrollProgress / 200)
          }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#ffdb16]/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#ffdb16]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-black" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop