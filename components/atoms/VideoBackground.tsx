// components/atoms/VideoBackground.tsx
'use client';

import React from 'react';

interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  className?: string;
  videoClassName?: string;
  overlayClassName?: string;
  showOverlay?: boolean;
  playbackRate?: number;
}

export default function VideoBackground({
  src = '/hero-zodiac.mp4',
  poster,
  className = 'absolute inset-0 w-full h-full overflow-hidden pointer-events-none',
  videoClassName = 'w-full h-full object-cover',
  overlayClassName = 'bg-linear-to-b from-slate-950/80 via-slate-950/65 to-slate-950',
  showOverlay = true,
  playbackRate = 1
}: VideoBackgroundProps) {
  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.playbackRate = playbackRate;
  };

  return (
    <div className={className} aria-hidden="true">
      <video
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        onLoadedMetadata={handleLoadedMetadata}
        className={videoClassName}
      />
      {showOverlay && (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      )}
    </div>
  );
}