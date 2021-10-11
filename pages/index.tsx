import React, { useState } from 'react'
import useScript from '../module/hooks/useScript'
import IVSPlayer from '../module/IVSPlayer'
import { usePlayer } from '../module/player'



export const Player = (): JSX.Element => {

  const [url, setUrl] = useState("https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8")
  const [playerUrl, setPlayerUrl] = useState("https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8")

  const { loading, error } = useScript({
    src: 'https://player.live-video.net/1.5.0/amazon-ivs-videojs-tech.min.js',
  })
  // Load IVS quality plugin
  const { loading: loadingPlugin, error: pluginError } = useScript({
    src: 'https://player.live-video.net/1.5.0/amazon-ivs-quality-plugin.min.js',
  })

  if (loading || loadingPlugin) {
    return 'loading ivs videojs tech and plugins...'
  }

  if (error || pluginError) {
    return 'Error!'
  }

  return (
    <React.Fragment>   
      <div style={{display:'flex', }}>

      <input placeholder="put video url to test it" style={{
        width: '800px',
        margin: '4px 0px'
      }} value={url} onChange={(e)=> {
        setUrl(e.target.value)
      }}/>
      <button onClick={()=> {
        if(url) {
          setPlayerUrl(url)
        }
      }}> Submit</button>
      </div>  
      <IVSPlayer
        src={playerUrl}
      />
    </React.Fragment>
  )
}

export default Player
