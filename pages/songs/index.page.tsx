import songs from '../../data/songs'

export const documentProps = {
  title: '曲の一覧'
}

export function Page() {
  const songListElements = Object.entries(songs).map(([path, data]) => <li>
    <a href={`/songs/${path}/`}>{data.title}</a>
  </li>)
  return (
    <main>
      <h1>曲の一覧</h1>
      <ul>
        { songListElements }
      </ul>
      <a href="/">トップへ戻る</a>
    </main>
  )
}
