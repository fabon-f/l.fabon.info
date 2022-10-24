import { render as defaultRender } from '../../renderer/_default.page.server'
import type { PageContextServer } from '../../renderer/types'
import songs from '../../data/songs'

export { passToClient } from '../../renderer/_default.page.server'

export async function render(pageContext: PageContextServer) {
  const match = pageContext.urlPathname.match(/\/songs\/([^\/]+)\/?/)
  if (!match) {
    return await defaultRender(pageContext)
  }
  const songData = songs[match[1] || '']
  pageContext.pageProps = Object.assign({}, pageContext.pageProps, {
    songData
  })
  return await defaultRender(pageContext)
}
