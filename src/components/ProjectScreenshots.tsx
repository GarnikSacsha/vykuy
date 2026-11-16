import type { ProjectScreenshot } from '../lib/types'

export function ProjectScreenshots({ title, screenshots }: { title: string; screenshots: readonly ProjectScreenshot[] }) {
  const shots = screenshots.filter(shot => shot.src)

  return (
    <div className="project-screenshots">
      {shots.map(shot => (
        <figure key={shot.src} className="project-screenshot">
          <div className="project-screenshot-frame" style={{ aspectRatio: `${shot.width} / ${shot.height}` }}>
            <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" decoding="async" />
          </div>
          <figcaption className="project-media-caption">
            <span>{title}</span>
            <span>{shot.label}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
