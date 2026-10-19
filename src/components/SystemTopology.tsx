import { useEffect, useRef, useState } from 'react'

// Fixed routes share a convergence point. Motion traces the architecture;
// geometry never changes and nothing updates on a per-frame React timer.
const routes = [
  'M42 86H140L274 210',
  'M575 42H484L386 210',
  'M330 328V351L390 380H567',
]

export function SystemTopology() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(preference.matches)
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene || !('IntersectionObserver' in window)) return
    let visible = false
    const sync = () => { scene.dataset.running = String(visible && !document.hidden && !paused && !reducedMotion) }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.2
      sync()
    }, { threshold: [0, 0.2] })
    observer.observe(scene)
    document.addEventListener('visibilitychange', sync)
    sync()
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', sync)
      scene.dataset.running = 'false'
    }
  }, [paused, reducedMotion])

  return <div className="system-topology" ref={sceneRef} data-running="false">
    <div className="topology-drawing">
      <svg className="topology-svg" viewBox="0 0 640 400" fill="none" aria-hidden="true">
        <g className="topology-structure">
          <path d="M42 61H151L289 190M42 111H129L252 225M575 17H470L366 190M575 67H500L410 225" />
          <path d="M80 206H159L230 272H252M504 142H551V227L465 288H408M309 328V366L366 396" />
          <path d="M42 61V111M575 17V67M77 198V214M567 373V387" />
        </g>
        <g className="topology-routes">{routes.map(route => <path key={route} d={route} pathLength="100" />)}</g>
        <g className="topology-pulses">{routes.map((route, index) => <path className={`topology-pulse topology-pulse--${index}`} key={route} d={route} pathLength="100" />)}</g>
        <g className="topology-junctions">
          <path d="M135 81H145V91H135ZM479 37H489V47H479ZM154 201H164V211H154ZM546 137H556V147H546ZM385 375H395V385H385Z" />
          <path className="topology-node" d="M138 84H142V88H138ZM482 40H486V44H482Z" />
        </g>
        <g className="topology-annotations">
          <text x="42" y="43">INPUT</text><text x="484" y="99">SERVICES</text><text x="435" y="362">DELIVERY</text>
          <text x="84" y="257">V / CONVERGENCE</text>
        </g>
      </svg>
      <a href="#work" className="orbit-link">
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M12 36L36 12M12 12H36V36" stroke="currentColor" strokeWidth="1.5" /></svg>
        <span>Explore Work</span>
      </a>
    </div>
    <div className="topology-caption">
      <span>VYKUY / System topology</span>
      <button type="button" className="topology-motion" aria-label="Pause topology animation" aria-pressed={paused || reducedMotion} disabled={reducedMotion} onClick={() => setPaused(value => !value)}>
        <span className="motion-indicator" aria-hidden="true" />{reducedMotion ? 'Static view' : paused ? 'Resume flow' : 'Pause flow'}
      </button>
    </div>
  </div>
}
