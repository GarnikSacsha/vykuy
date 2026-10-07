import { useEffect, useRef, useState } from 'react'
import type { ProjectMedia } from '../lib/types'

interface ProjectVideoProps extends ProjectMedia {
  title: string
  autoPlay?: boolean
}

export function ProjectVideo({ title, webm, mp4, poster, captionsSrc, aspectRatio = '16 / 10', autoPlay = true }: ProjectVideoProps) {
  const portrait = aspectRatio === '9 / 16'
  const width = portrait ? 900 : 1600
  const height = portrait ? 1600 : aspectRatio === '16 / 9' ? 900 : 1000
  const frameRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const pausedByUser = useRef(false)
  const automaticPause = useRef(false)
  const failedSources = useRef(new Set<string>())
  const [visible, setVisible] = useState(false)
  const [activated, setActivated] = useState(false)
  const [failed, setFailed] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [playbackMessage, setPlaybackMessage] = useState('')
  const [posterFailed, setPosterFailed] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const hasVideo = Boolean(webm || mp4)
  const canAutoplay = autoPlay && !reducedMotion
  const posterSrc = posterFailed ? undefined : poster

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      const video = videoRef.current
      if (preference.matches && video && !video.paused) {
        automaticPause.current = true
        video.pause()
      }
      setReducedMotion(preference.matches)
    }
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    if (!('IntersectionObserver' in window)) {
      setActivated(true)
      return // Custom playback still works; do not autoplay without visibility information.
    }
    const observer = new IntersectionObserver(([entry]) => {
      const inView = entry.isIntersecting && entry.intersectionRatio >= 0.15
      setVisible(inView)
      if (inView) setActivated(true)
    }, { threshold: [0, 0.15] })
    observer.observe(frame)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || failed) return
    const syncPlayback = () => {
      if (!visible || document.hidden) {
        if (!video.paused) {
          automaticPause.current = true
          video.pause()
        }
      } else if (canAutoplay && !pausedByUser.current) {
        // Autoplay denial is normal. Keep the custom button available for manual play.
        void video.play().catch(() => {})
      }
    }
    syncPlayback()
    document.addEventListener('visibilitychange', syncPlayback)
    return () => document.removeEventListener('visibilitychange', syncPlayback)
  }, [activated, visible, canAutoplay, reducedMotion, failed])

  function handleSourceError(source: string) {
    failedSources.current.add(source)
    // Let the browser try the MP4 fallback before showing the poster/empty state.
    if ([webm, mp4].filter(Boolean).every(url => failedSources.current.has(url!))) setFailed(true)
  }

  function togglePlayback() {
    const video = videoRef.current
    if (!video) return
    setPlaybackMessage('')
    if (video.paused) {
      void video.play().catch(() => setPlaybackMessage('Playback could not start. Please try again.'))
    } else {
      pausedByUser.current = true
      video.pause()
    }
  }

  return (
    <figure className={`project-video${portrait ? ' project-video--portrait' : ''}`}>
      <div ref={frameRef} className="project-video-frame" style={{ aspectRatio }}>
        {posterSrc && <img className="project-poster" src={posterSrc} alt={`${title} preview`} width={width} height={height} loading="lazy" decoding="async" onError={() => setPosterFailed(true)} />}
        {(!hasVideo || failed) && (
          <div className={`project-media-fallback${posterSrc ? ' project-media-fallback--poster' : ''}`}>
            <span className="eyebrow">Product demo</span>
            <p>{failed ? 'Video unavailable' : 'Video not added yet'}</p>
            {!posterSrc && <span className="project-media-hint">{failed ? 'Explore the project details alongside this demo.' : 'A short product walkthrough will appear here.'}</span>}
          </div>
        )}
        {hasVideo && !failed && activated && (
          <video
            ref={videoRef}
            className="project-video-player"
            aria-label={`${title} product demo`}
            width={width}
            height={height}
            autoPlay={canAutoplay && visible && !pausedByUser.current}
            muted
            loop
            playsInline
            controls={false}
            preload="none"
            poster={posterSrc}
            onPlay={() => { pausedByUser.current = false; setPlaying(true); setPlaybackMessage('') }}
            onPause={() => {
              setPlaying(false)
              if (automaticPause.current) automaticPause.current = false
              else pausedByUser.current = true
            }}
            onError={event => {
              // React also propagates source errors here. A failed WebM must not
              // remove the player before the browser can try the MP4 source.
              if (event.target === event.currentTarget) setFailed(true)
            }}
          >
            {webm && <source src={webm} type="video/webm" onError={() => handleSourceError(webm)} />}
            {mp4 && <source src={mp4} type="video/mp4" onError={() => handleSourceError(mp4)} />}
            {captionsSrc && <track kind="captions" src={captionsSrc} srcLang="en" label="English" default />}
          </video>
        )}
        {hasVideo && !failed && activated && (
          <button type="button" className="project-video-toggle" onClick={togglePlayback} aria-label={`${playing ? 'Pause' : 'Play'} ${title} demo`}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d={playing ? 'M4 3H6V13H4ZM10 3H12V13H10Z' : 'M5 3L13 8L5 13Z'} />
            </svg>
            {playing ? 'Pause' : 'Play'}
          </button>
        )}
      </div>
      <span className="sr-only" role="status">{playbackMessage}</span>
      <figcaption className="project-media-caption">
        <span>{title}</span>
        <span>{hasVideo && !failed ? 'Product walkthrough' : posterSrc ? 'Preview image' : failed ? 'Demo unavailable' : 'Demo pending'}</span>
      </figcaption>
    </figure>
  )
}
