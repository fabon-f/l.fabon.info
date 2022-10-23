import React from 'react'

export const documentProps = {
  title: '曲の一覧'
}

export function Page() {
  return (
    <main>
      <h1>曲の一覧</h1>
      <ul>
        <li><a href="/songs/internationale_ru/">インターナショナル (ロシア語)</a></li>
      </ul>
      <a href="/">トップへ戻る</a>
    </main>
  )
}
