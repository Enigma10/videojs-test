// ANCHOR React
import { useEffect, useRef, useState } from 'react'

// ANCHOR VideoJS
import VIDEOJS, { VideoJsPlayer } from 'video.js'
import videoJsContribQualityLevels from 'videojs-contrib-quality-levels'
import videoJsHlsQualitySelector from 'videojs-hls-quality-selector'

// ANCHOR Utils
import { HOTKEYS_HANDLER } from '../utils/hotkeys-handler'

// ANCHOR Constants
import { DEFAULT_OPTIONS } from '../constants/options'
import { LionPlayerProps } from '../types/videojs-hls-quality-selector'

export function usePlayer({
  playbackUrl,
  onPause,
  onPlay,
  ...options
}: LionPlayerProps) {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [player, setPlayer] = useState<VideoJsPlayer | null>(null)

  const { sources } = options

  player?.on('play', (event) => {
    onPlay && onPlay(event, player, player.currentTime())
  })

  player?.on('pause', (event) => {
    onPause && onPause(event, player, player.currentTime())
  })

  // @ts-ignore
  if (VIDEOJS?.Vhs) {
    //@ts-ignore
    VIDEOJS.Vhs.xhr.beforeRequest = function (options) {
      options.withCredentials = true
    }
  }

  useEffect(() => {
    //@ts-ignore
    VIDEOJS.registerPlugin('qualityLevel', videoJsContribQualityLevels)
    VIDEOJS.registerPlugin('hlsQualitySelector', videoJsHlsQualitySelector)
  }, [])

  useEffect(() => {
    const vjsPlayer = ref.current
      ? VIDEOJS(
          ref.current,
          {
            ...DEFAULT_OPTIONS,
            ...options,
            userActions: {
              hotkeys: (event) => {
                HOTKEYS_HANDLER(event, vjsPlayer)
              },
            },
          },
          () => {
            if (vjsPlayer) {
              setPlayer(vjsPlayer)

              if (options.sources) {
                vjsPlayer.src(options.sources)
              } else if (options.src) {
                vjsPlayer.src(options.src)
              }

              vjsPlayer.currentTime(0)
              vjsPlayer.load()
            }
          }
        )
      : null

    return () => {
      if (vjsPlayer) {
        vjsPlayer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    if (player !== null && sources && playbackUrl) {
      player.src(sources)
    }
  }, [playbackUrl])

  return {
    ref,
    player,
  }
}
