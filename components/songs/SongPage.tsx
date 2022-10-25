import { css } from '@linaria/core'
import type { ComponentChildren } from 'preact'
import type { PageProps } from '../../pages/songs/types'

const header = css`
  padding-block-end: 1.5em;
  border-block-end: 1px solid #ccc;
`

const mainContent = css`
  margin-block-start: 2em;
`

export default function Page({ songData, children }: PageProps & { children: ComponentChildren }) {
  return (
    <main role="main">
      <div className={header}>
        <h1>{songData?.title}</h1>
        <p className='western-text'>{songData?.originalTitle}</p>
        <table>{Object.entries(songData?.creators ?? {}).map(([role, name]) => <tr><th scope="row">{role}</th> <td>{name}</td></tr>)}</table>
        <p><strong>タグ</strong>: {(songData?.tags ?? []).join(" ")}</p>
      </div>
      <div className={mainContent}>
        { children }
      </div>
      <p><a href="/songs/">曲の一覧へ戻る</a></p>
      <p><a href="/">サイトトップへ</a></p>
    </main>
  )
}
