# Featured project media

The active featured projects use copied local demos. Asset paths below are relative to this folder:

| Project | Preferred video | MP4 fallback | Poster |
| --- | --- | --- | --- |
| Pitstop | `pitstop/demo.webm` | `pitstop/demo.mp4` | `pitstop/poster.webp` |
| HORECA Training Platform | `horeca-training/demo.webm` | `horeca-training/demo.mp4` | `horeca-training/poster.webp` |
| Access Flow | `access-flow/demo.webm` | `access-flow/demo.mp4` | `access-flow/poster.webp` |

Optional English captions: `captions.vtt` in each project folder. Include captions for meaningful audio: previews stay muted, with no native control bar. A keyboard-accessible custom Play/Pause button stays available over loaded previews. Reduced motion disables autoplay and allows explicit playback with that button.

## Originals and source mapping

Original recordings live in `D:\Aivora\Projects\` and must not be modified, renamed, moved, overwritten, or deleted. Website MP4 files are byte-for-byte copies:

- `PitStop.mp4` → `pitstop/demo.mp4`
- `HoReCaFam-lounge.mp4` → `horeca-training/demo.mp4`
- `Acces Flow.mp4` → `access-flow/demo.mp4`

`Dental Booking.mp4` and `Family Life OS.mp4` remain untouched for future use. The website never references the originals folder at runtime.

## Required and optional media

- `demo.mp4` is the required minimum for each populated project.
- `demo.webm` is preferred but optional. VP9 versions are generated from the website copies at original resolution and frame rate (CRF 30), without audio because these are muted previews. The browser tries WebM first, then MP4.
- `poster.webp` is recommended. Clean frames were selected at 14 seconds for Pitstop, 10 seconds for HORECA Training Platform, and 10 seconds for Access Flow, then extracted at original resolution and WebP quality 90. No source video was recompressed or changed.

The static Vite asset glob in `src/data/projects.ts` includes only existing files, so missing media does not issue broken requests. Add either or both video formats; a poster alone is supported. Reload the dev page after adding assets and rebuild before deployment. To use other filenames, formats, or hosted media URLs, update that centralized data file and its glob accordingly.

The frame reserves each project's declared `media.aspectRatio` before assets load. Pitstop and HORECA are 16:9 (1920×1080); Access Flow is 9:16 (1080×1920), with the portrait preview capped at 24rem wide. `object-fit: contain` keeps the entire product recording visible. The default for other projects remains 16:10. Video URLs are bundled as assets, not fetched until the frame becomes visible; posters load lazily. No fabricated media is included.

Pitstop's real demo, supplied final description, six proof points, and confirmed stack are connected. Its impact estimate is unchanged. No public demo URL is supplied; its repository is private, so no GitHub link is displayed. URL fields stay undefined until real URLs are provided, so there are no dead links. Optional `demoUrl` and `githubUrl` are also supported for the other projects. The typed contract uses `id`, `slug`, `title`, `type`, `description`, `proofPoints`, `tags`, optional URLs, and `media`.
