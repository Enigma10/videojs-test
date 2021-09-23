// ANCHOR VideoJS
import { VideoJsPlayerOptions } from 'video.js'

export const DEFAULT_OPTIONS: VideoJsPlayerOptions = {
  controls: true,
  controlBar: {
    children: [
      'playToggle',
      'volumePanel',
      'currentTimeDisplay',
      'timeDivider',
      'durationDisplay',
      'progressControl',
      'liveDisplay',
      'customControlSpacer',
      'chaptersButton',
      'descriptionsButton',
      'subsCapsButton',
      'audioTrackButton',
      'playbackRateMenuButton',
      'fullscreenToggle',
    ],
    progressControl: {
      seekBar: true,
    },
  },
  autoplay: false,
  // fluid: true,
  inactivityTimeout: 2500,
  preload: 'auto',
  // height: 200,
  // width: 800,
  // aspectRatio: '16:9',
  html5: {
    vhs: {
      enableLowInitialPlaylist: true,
      overrideNative: true,
      nativeAudioTracks: false,
      nativeTextTracks: false,
    },
  },
  plugins: {
    qualityLevel: {},
    hlsQualitySelector: {
      displayCurrentQuality: true,
    },
  },
}
