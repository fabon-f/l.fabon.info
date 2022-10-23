import type { ComponentChildren } from 'preact'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './global.css'

export function PageShell({ children, pageContext }: { children: ComponentChildren; pageContext: PageContext }) {
  return (
    <PageContextProvider pageContext={pageContext}>
      {children}
    </PageContextProvider>
  )
}
