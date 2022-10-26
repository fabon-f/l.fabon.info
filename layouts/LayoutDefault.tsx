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

export function LayoutDefault({ children }: Props) {
  const links = [
    { href: '/', text: 'トップページ' },
    { href: '/license/', text: '著作権について' }
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
