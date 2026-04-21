const PARTICLES = [
  { id:  0, x:  8, y: 72, s: 2, d: 7.2, dl: 0.0 },
  { id:  1, x: 15, y: 30, s: 1, d: 9.5, dl: 1.3 },
  { id:  2, x: 23, y: 85, s: 3, d: 6.8, dl: 2.7 },
  { id:  3, x: 31, y: 15, s: 1, d: 8.1, dl: 0.6 },
  { id:  4, x: 38, y: 60, s: 2, d: 10.4, dl: 3.2 },
  { id:  5, x: 45, y: 42, s: 1, d: 7.6, dl: 1.8 },
  { id:  6, x: 52, y: 90, s: 2, d: 9.0, dl: 4.1 },
  { id:  7, x: 60, y: 22, s: 3, d: 6.3, dl: 0.9 },
  { id:  8, x: 67, y: 68, s: 1, d: 11.2, dl: 2.4 },
  { id:  9, x: 74, y: 10, s: 2, d: 8.7, dl: 3.8 },
  { id: 10, x: 80, y: 50, s: 1, d: 7.0, dl: 0.3 },
  { id: 11, x: 87, y: 78, s: 3, d: 9.3, dl: 1.6 },
  { id: 12, x: 93, y: 35, s: 2, d: 6.5, dl: 4.5 },
  { id: 13, x: 19, y: 55, s: 1, d: 10.8, dl: 2.1 },
  { id: 14, x: 56, y: 8,  s: 2, d: 7.9, dl: 3.4 },
  { id: 15, x: 42, y: 95, s: 1, d: 8.4, dl: 0.8 },
  { id: 16, x: 70, y: 40, s: 3, d: 6.9, dl: 1.9 },
  { id: 17, x:  5, y: 18, s: 2, d: 9.7, dl: 3.0 },
  { id: 18, x: 88, y: 62, s: 1, d: 7.4, dl: 2.6 },
  { id: 19, x: 33, y: 3,  s: 2, d: 11.0, dl: 4.8 },
]

export default function Particles() {
  return (
    <div className="particles" aria-hidden>
      {PARTICLES.map(p => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.s}px`,
            height: `${p.s}px`,
            animationDuration: `${p.d}s`,
            animationDelay: `${p.dl}s`,
          }}
        />
      ))}
    </div>
  )
}
