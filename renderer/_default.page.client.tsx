import { hydrate, render as renderDom } from 'preact'
import { PageShell } from './PageShell'
import { LayoutDefault } from '../layouts/LayoutDefault'
import type { PageContextClient } from './types'

export async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  const Layout = pageContext.exports.Layout || LayoutDefault
  const pageVNode = (
    <PageShell pageContext={pageContext}>
      <Layout>
        <Page {...pageProps} />
      </Layout>
    </PageShell>
  )
  if (pageContext.isHydration) {
    hydrate(pageVNode, document.getElementById('page-view')!)
  } else {
    const pageTitle = (pageContext.exports.documentProps ?? {}).title ?? 'ファヴォルスキー・アルヒーフ'
    document.title = pageTitle
    renderDom(pageVNode, document.getElementById('page-view')!)
  }
}

export const clientRouting = true
