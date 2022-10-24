import type { PageContextServer } from '../../renderer/types'
import songs from '../../data/songs'

export async function onBeforeRender(pageContext: PageContextServer) {
  const match = pageContext.urlPathname.match(/\/songs\/([^\/]+)\/?/)
  if (!match) {
    return { pageContext: { pageProps: {} } }
  }
  const songData = songs[match[1] || '']
  return {
    pageContext: {
      pageProps: {
        songData
      }
    }
  }
}
