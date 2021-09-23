// ANCHOR React
import React from 'react'

// ANCHOR Hooks
import { usePlayer } from './hooks/usePlayer'
import { LionPlayerProps } from './types/videojs-hls-quality-selector'

export interface IUncontrolledPlayerProps {
  playerRef: React.LegacyRef<HTMLVideoElement>
}

export { usePlayer } from './hooks/usePlayer'

export const UncontrolledLionPlayer = ({
  playerRef,
}: IUncontrolledPlayerProps): JSX.Element => {
  return (
    <div data-vjs-player>
      <video ref={playerRef} className="video-js vjs-theme-lion" playsInline>
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that{' '}
          <a
            href="https://videojs.com/html5-video-support/"
            target="_blank"
            rel="noopener noreferrer"
          >
            supports HTML5 video
          </a>
        </p>
      </video>
    </div>
  )
}

export const LionPlayer = (props?: LionPlayerProps): JSX.Element => {
  const { ref } = usePlayer({ ...props })

  return <UncontrolledLionPlayer playerRef={ref} />
}
