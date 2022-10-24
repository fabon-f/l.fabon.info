import renderToString from 'preact-render-to-string'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import type { PageContextServer } from './types'

const baseUrl = 'https://l.fabon.info'

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'ファヴォルスキー・アルヒーフ'
  const desc = (documentProps && documentProps.description) || 'ふぁぼんが執筆・翻訳した文章のアーカイブ'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta property="og:description" content="${desc}" />
        <title>${title}</title>
        <meta property="og:title" content="${title}" />
        <meta property="og:url" content="${new URL(pageContext.urlPathname, baseUrl).toString()}/" />
        <meta name="twitter:site" content="@syobon_hinata" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
