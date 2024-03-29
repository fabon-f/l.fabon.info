import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router' // When using Client Routing
// import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client' // When using Server Routing
import type { VNode, FunctionComponent } from 'preact'

type Page = (pageProps: PageProps) => VNode
export type PageProps = {}

export type PageContextCustom = {
  Page: Page
  pageProps?: PageProps
  urlPathname: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
      publishedAt?: string
    }
    Layout?: FunctionComponent
  }
}

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
export type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

export type PageContext = PageContextClient | PageContextServer
