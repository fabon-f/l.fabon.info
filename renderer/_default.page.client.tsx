import { hydrate, render as renderDom } from 'preact'
import { PageShell } from './PageShell'
import type { PageContextClient } from './types'

export async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  const pageVNode = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
  if (pageContext.isHydration) {
    hydrate(pageVNode, document.getElementById('page-view')!)
  } else {
    renderDom(pageVNode, document.getElementById('page-view')!)
  }
}

export const clientRouting = true
