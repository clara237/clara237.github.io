import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/** A soft rose glow that trails the cursor (disabled on touch / coarse pointers). */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 })
  const [fine, setFine] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setFine(true)
    const move = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  if (!fine) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[1] h-[26rem] w-[26rem] rounded-full"
      style={{
        background:
          'radial-gradient(circle, rgba(199,154,82,0.16), rgba(157,59,91,0.10) 40%, transparent 70%)',
        left: pos.x,
        top: pos.y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{ left: pos.x, top: pos.y }}
      transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.6 }}
    />
  )
}

/** Gradient progress bar pinned to the top of the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 })
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-rose via-pink to-lilac"
    />
  )
}
