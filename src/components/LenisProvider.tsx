'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import type { ReactNode } from 'react'

type ChildrenProps = {
  children: ReactNode
}

export default function LenisProvider({ children }: ChildrenProps) {
  useEffect(() => {
    // Mobile par Lenis disable
    if (typeof window === 'undefined' || window.innerWidth < 1024) return

    const lenis = new Lenis({
      duration: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.3,
      easing: (t: number) => t,
    })

    let rafId: number

    const raf = (time: number) => {
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
