import React from 'react'
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
        <h2>ライセンス</h2>
        <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ja">
          <img alt="クリエイティブ・コモンズ・ライセンス" style={{ borderWidth: 0 }} src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" />
        </a>
        <p>
          このサイトのコンテンツは、各ページに特記のない限り<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ja">クリエイティブ・コモンズ 表示 - 非営利 - 継承 4.0 国際 ライセンス</a>の下に提供されています。
        </p>
        <p>ただし、私が違法に翻訳・掲載した部分に関しては、引用の範囲を逸脱すると<strong>私が許しても原著者が許さないかもしれません</strong>。そうなったら一緒に裁判を受けましょうね。</p>
        <p>ちなみに、そもそも<strong>引用は許可なく自由にやっていい</strong>です。いちいち連絡はいりません。</p>
        <p><a href="https://www.fabon.info/#links">各種連絡先</a></p>
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
