import { css } from '@linaria/core'
import { useState, useRef, useEffect } from 'preact/hooks'

const width = 560, height = 315

const wrapper = css`
  width: ${width}px;
  max-width: 100%;
  position: relative;
  background-color: #000;
`

const ratioBox = css`
  padding-bottom: ${height / width * 100}%;
  height: 0;
  overflow: hidden;
  position: relative;
`

const thumbnail = css`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  cursor: pointer;
`

const button = css`
  height: 48px;
  width: 68px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  fill: #F00;
  pointer-events: none;

  padding: 0;
  border: none;
  background-color: transparent;
`

const player = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export type YouTubeEmbedProps = {
  id: string
}

export function YouTubeEmbed({
  id
}: YouTubeEmbedProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const iframeEl = useRef<HTMLIFrameElement>(null)
  const playVideo = () => setIframeLoaded(true)
  useEffect(() => {
    if (iframeLoaded && iframeEl.current) {
      iframeEl.current.focus()
    }
  }, [iframeLoaded])

  const playButton = <button type="button" aria-label="再生" className={button} onClick={playVideo}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48">
      <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
      <path d="M 45,24 27,14 27,34" fill="#fff"></path>
    </svg>
  </button>
  const iframe = <iframe width={width} height={height} src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={player} ref={iframeEl}></iframe>
  const thumbnailElement = <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" className={thumbnail} onClick={playVideo} />

  return (
    <div className={wrapper}>
      <div className={ratioBox}>
        { iframeLoaded && iframe }
      </div>
      <a href={`https://www.youtube.com/watch?v=${id}`} onClick={ e => e.preventDefault() }>{ (!iframeLoaded) && thumbnailElement }</a>
      { (!iframeLoaded) && playButton }
    </div>
  )
}
