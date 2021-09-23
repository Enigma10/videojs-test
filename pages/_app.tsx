import '../styles/globals.css'
import '../module/player/themes/video-js.css'
import '../module/player/themes/lion.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
