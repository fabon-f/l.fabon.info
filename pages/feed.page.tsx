export const documentProps = {
  title: 'フィード'
}

export function Page() {
  return (
    <main role="main">
      <h1>フィード</h1>
      <ul>
        <li><a rel="external" href="/feed/atom.xml">Atom</a></li>
        <li><a rel="external" href="/feed/rss.xml">RSS</a></li>
        <li><a rel="external" href="/feed/feed.json">JSON Feed</a></li>
      </ul>
    </main>
  )
}
