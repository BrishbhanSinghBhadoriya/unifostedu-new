'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function LenisProvider({ children }) {
  useEffect(() => {
    
    if (window.innerWidth < 1024) return

    const lenis = new Lenis({
      duration: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.3,
      easing: (t) => t
    })

    let rafId

    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
