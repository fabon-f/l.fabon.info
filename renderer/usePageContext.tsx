// `usePageContext` allows us to access `pageContext` in any Preact component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import { createContext } from 'preact'
import type { ComponentChildren } from 'preact'
import { useContext } from 'preact/hooks'
import type { PageContext } from './types'

const Context = createContext<PageContext>(undefined as any)

export function PageContextProvider({ pageContext, children }: { pageContext: PageContext; children: ComponentChildren }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

export function usePageContext() {
  const pageContext = useContext(Context)
  return pageContext
}
