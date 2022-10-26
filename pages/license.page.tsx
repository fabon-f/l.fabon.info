import { css } from '@linaria/core'

const del = css`
  text-decoration: line-through;
`

const small = css`
  font-size: 0.7em;
`

export const documentProps = {
  title: '著作権について'
}

export function Page() {
  return (
    <main role="main">
      <h1>著作権について</h1>
      <section>
        <p>
          <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/deed.ja">
            <img alt="クリエイティブ・コモンズ 表示 - 非営利 4.0 国際 ライセンス" style={{ borderWidth: 0 }} src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc.svg" width="80" height="15" />
          </a>
        </p>
        <p>このサイトのコンテンツは、各ページに特記のない限り<a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/deed.ja">クリエイティブ・コモンズ 表示 - 非営利 4.0 国際 ライセンス</a>の下に提供されています。</p>
        <p>ただし、私が違法に(著作権のある文章を許可なく)翻訳・掲載した部分に関しては、引用の範囲を逸脱すると<strong>私が許しても原著者が許さないかもしれません</strong>。そうなったら一緒に裁判を受けましょうね。</p>
      </section>
      <section>
        <h2>結局どういうこと?</h2>
        <ul>
          <li>引用などはそもそも、条件を満たせば自由にやっていいです。著作権法でそう規定されています。</li>
          <li>このサイトのコンテンツは基本的に<a href="https://creativecommons.org/licenses/by-nc/4.0/deed.ja">CC BY-NCライセンス</a>で提供されています。</li>
          <li>ライセンスの規定に従っていれば、複製・再配布・改変・翻案なんでもご自由に。著者から許可を取る必要は一切ありません。</li>
          <ul>
            <li>適切なクレジットをつける</li>
            <li>内容を変更した場合、その旨を示す</li>
            <li>商用利用はしない</li>
          </ul>
          <li>ただし、各ページに別のライセンスが適用されている場合は、そちらに従ってください。</li>
          <li>著作権法的にアウトな翻訳もあります。利用は自己責任で。</li>
          <li>ライセンスに合わない条件での利用は、<span className={del}>お行儀良くやりたいなら</span>著者の許可を取ってください。連絡先は<a href="https://www.fabon.info/#links">こちら</a>。</li>
          <li>
            <span className={small}>まあ、自分も著作権的にはいろいろアウトだし、「商用」であっても同人とか趣味レベルとかならいちいち文句言うつもりはないです。でもクレジットはちゃんとつけてほしい。</span>
          </li>
        </ul>
      </section>
    </main>
  )
}
