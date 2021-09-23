import { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js'

declare module 'videojs-hls-quality-selector'

export interface LionPlayerProps extends VideoJsPlayerOptions {
  playbackUrl?: string
  onPlay?: (
    event: EventTarget,
    player: VideoJsPlayer,
    currentTimeSecond: number
  ) => void
  onPause?: (
    event: EventTarget,
    player: VideoJsPlayer,
    currentTimeSecond: number
  ) => void
}
