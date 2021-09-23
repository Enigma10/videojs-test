import React from 'react'
import { LionPlayer } from '../module/player'



export const Player = ({
 
}: {

}) => {
  
  return (
    <React.Fragment>
      <div style={{
        height:'600px'
      }}>

      <LionPlayer
        playbackUrl={"https://streamcdnin.getloconow.com/8IS83M64UL_d8600856-8673-491a-a5af-edb6affecd49/manifest.m3u8"}
        sources={[
          {
            src: 'https://streamcdnin.getloconow.com/8IS83M64UL_d8600856-8673-491a-a5af-edb6affecd49/manifest.m3u8',
            type: 'application/x-mpegURL',
          },
        ]}
        onPause={()=>{}}
        onPlay={()=>{}}
        autoplay={true}       
        controlBar={{
                playbackRateMenuButton: false,
                currentTimeDisplay: false,
                captionsButton: false,
                liveDisplay: false,
                seekToLive: false,
                remainingTimeDisplay: false,
                durationDisplay: false,
                timeDivider: false,
                pictureInPictureToggle: false,
                playToggle: false,
              }
           
        }
      />
      </div>
    </React.Fragment>
  )
}

export default Player
