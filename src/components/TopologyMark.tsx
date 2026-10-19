/** A converging pair of routes: the small-scale VYKUY signature. */
export function TopologyMark({ className = '' }: { className?: string }) {
  return <svg className={`topology-mark ${className}`} width="28" height="24" viewBox="0 0 28 24" fill="none" aria-hidden="true">
    <path d="M2 3H6L14 19L22 3H26M14 19V23" stroke="currentColor" strokeWidth="1" />
    <path d="M1 1H4V4H1ZM24 1H27V4H24Z" fill="currentColor" />
  </svg>
}
