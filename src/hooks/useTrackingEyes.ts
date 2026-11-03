import { useEffect } from 'react'
import type { RefObject } from 'react'

// Fait suivre la souris aux pupilles (premier enfant de chaque œil).
// Écrit directement dans le DOM, une fois par frame, pour éviter un re-render React à chaque mouvement.
export function useTrackingEyes(eyes: RefObject<HTMLElement | null>[], distance: number) {
  useEffect(() => {
    let frame = 0
    let last: MouseEvent | null = null

    const update = () => {
      frame = 0
      if (!last) return
      for (const ref of eyes) {
        const eye = ref.current
        const pupil = eye?.firstElementChild as HTMLElement | null
        if (!eye || !pupil) continue
        const rect = eye.getBoundingClientRect()
        const angle = Math.atan2(last.clientY - (rect.top + rect.height / 2), last.clientX - (rect.left + rect.width / 2))
        pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`
      }
    }

    const onMove = (e: MouseEvent) => {
      last = e
      if (!frame) frame = requestAnimationFrame(update)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [distance])
}
