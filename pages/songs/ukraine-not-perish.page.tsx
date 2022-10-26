import SongPage from '../../components/songs/SongPage'
import ParallelTranslation from '../../components/ParallelTranslation'
import type { PageProps } from './types'

const title = 'ウクライナ国歌「ウクライナは死せず」'

export const documentProps = {
  title
}

const originalLyrics = `
Ще не вмерла України і слава, і воля,
Ще нам, браття молодії, усміхнеться доля.
Згинуть наші воріженьки, як роса на сонці.
Запануєм i ми, браття, у своїй сторонці.

Душу й тіло ми положим за нашу свободу,
І покажем, що ми, браття, козацького роду.
`

const translation = `
ウクライナの栄光も自由も未だ滅びていない
若き兄弟よ、我らにはまた運命が微笑むだろう
我らの敵は消え去るだろう、日なたの露のように
我らも治めよう、兄弟よ、自らの国を

我らは魂と身体を捧げよう、我らの自由のために
そして示そう、兄弟よ、我らがコサックの末裔であることを
`

export function Page(props: PageProps) {
  return (
    <SongPage {...props}>
      <h2>ウクライナ国歌 (公式バージョン)</h2>
      <ParallelTranslation original={originalLyrics} translation={translation} />
      <section>
        <h2>解説</h2>
        <p>1860年代に作詞作曲された曲です。ソ連崩壊・ウクライナ独立後の1992年に歌詞なしで国歌となり、歌詞は2003年に1番のみが国歌として制定されました。</p>
      </section>
      <section className="western-text">
        <h2>文法解説</h2>
        <p>сторо́нціはсторо́нка(сторона́の指小形)の処格。子音交替ですね。</p>
      </section>
    </SongPage>
  )
}
