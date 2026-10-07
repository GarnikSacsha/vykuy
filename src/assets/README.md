# Assets

Store approved local brand assets and project media here. Import assets from TypeScript so Vite fingerprints and validates them. No sample product images or videos are included.

The three active project folders contain copied real MP4 demos, derived WebM previews, and extracted WebP posters. Original recordings in `D:\Aivora\Projects\` must remain completely unchanged. MP4 is the required minimum; WebM is preferred but optional; a poster is recommended.

Product videos use a custom Play/Pause button, descriptive posters, captions for speech, and the accompanying text summary. No native control bar is shown. ProjectVideo mounts on visibility with `preload="none"`, autoplays muted, loops inline, and pauses offscreen. Reduced-motion preferences disable autoplay. See `projects/README.md` for asset paths and fallback behavior.
