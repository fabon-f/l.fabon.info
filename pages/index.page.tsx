import { css } from '@linaria/core';

const copy = css`
font-style: italic;
font-size: 0.8em;
padding-inline-start: 2em;
`

export function Page() {
  return (
    <main role="main">
      <h1>ファヴォルスキー・アルヒーフ</h1>
      <p className={copy}>L stands for...<br/>
        <span>Library, Language, Literature, Lyrics, Letters, Laboratory, etc.</span>
      </p>
      <p>私(ふぁぼん)が翻訳・執筆した文章を置いています。</p>
      <section>
        <h2><a href="/songs/">外国語の曲</a></h2>
        <p>主に(旧)ソ連の曲を翻訳・解説しています。</p>
      </section>
      <section>
        <h2><a href="/license/">このサイトの著作権について</a></h2>
      </section>
      <section>
        <h2>リンク集</h2>
        <ul>
          <li><a href="https://voenpesni.web.fc2.com">ソヴィエト・ロシア軍歌集積所</a></li>
        </ul>
      </section>
    </main>
  )
}
