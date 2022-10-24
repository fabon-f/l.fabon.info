import SongPage from '../../components/songs/SongPage'
import ParallelTranslation from '../../components/ParallelTranslation'
import type { PageProps } from './types'

const title = 'バルカンの星の下に'

export const documentProps = {
  title
}

const originalLyrics = `
1.
Где ж вы, где ж вы, где ж вы, очи карие
Где ж ты, мой родимый край?
Впереди - страна Болгария,
Позади - река Дунай.

2.
Много вёрст в походах пройдено
По земле и по воде,
Но Советской нашей Родины
Не забыли мы нигде!

3.
И под звёздами балканскими
Вспоминаем неспроста
Ярославские, рязанские
Да смоленские места.

4.
Вспоминаем очи карие,
Тихий говор, звонкий смех.
Хороша страна Болгария,
А Россия лучше всех!
`
const translation = `
1.
どこだ、どこだ、どこだ、茶色の瞳よ
どこだ、我が故郷は
前にはブルガリアの国
後ろにはドナウ川

2.
行軍の中、幾里もの道のりを
地上で、そして水上で進んできたが
我らの祖国、ソヴィエトの地は
どこにいても忘れなかった

3.
そしてバルカンの星の下で
我々はどうしても思い出すのだ、
ヤロスラヴリ、リャザン、
そしてスモレンスクの地を

4.
思い出すのだ、茶色の瞳と
静かな話し声とよく響く笑い声を
ブルガリアは素晴らしい国だが
やはりロシアが一番だ
`

export function Page(props: PageProps) {
  return (
    <SongPage {...props}>
      <ParallelTranslation original={originalLyrics} translation={translation} />
    </SongPage>
  )
}
