import { useEffect, useRef } from 'react'
import mouseCursor from '../assets/mouse.png'

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 40}px)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div ref={ref} className="custom-cursor">
      <img src={mouseCursor} alt="" draggable={false} />
    </div>
  )
}
