import type { ComponentChildren } from 'preact'
import { css } from '@linaria/core'

type Props = {
  children: ComponentChildren
}

const linkList = css`
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 1.5em;
  justify-content: center;
  font-size: 0.9em;
  flex-wrap: wrap;
`
const linkListItem = css`
  list-style: none;
  padding: 0.8em;
`

const container = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const main = css`
  flex: 1;
  margin-inline: 1em;
`
const inner = css`
  max-inline-size: 1000px;
  margin-inline: auto;
`

const footer = css`
  background-color: #dbe8f4;
  margin-block-start: 3em;
`

const icon = css`
  height: 1.1em;
  vertical-align: middle;
`

export function LayoutDefault({ children }: Props) {
  // https://iconmonstr.com/rss-feed-1-svg/
  const feedIcon = <svg className={icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="フィード">
    <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
  </svg>
  const links = [
    { href: '/', text: 'トップページ' },
    { href: '/license/', text: '著作権について' },
    { href: '/feed/', text: feedIcon }
  ].map(e => <li className={linkListItem}><a href={e.href}>{e.text}</a></li>)
  return (
    <div className={container}>
      <div className={main}>
        <div className={inner}>{ children }</div>
      </div>
      <footer className={footer}>
        <ul className={linkList}>{ links }</ul>
      </footer>
    </div>
  )
}
