  const PARTICLES = randomParticles(100)
  
  function randomParticles(count : number) {
  return Array.from({length: count}, (_, id) => ({
    id,
    x:  Math.random() * 100,
    y:  Math.random() * 100,
    s:  Math.random() * 2 + 1,        // taille 1–3px
    d:  Math.random() * 5 + 6,        // durée 6–11s
    dl: Math.random() * 5,            // délai 0–5s
  }))
}
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
