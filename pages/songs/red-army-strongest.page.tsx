import SongPage from '../../components/songs/SongPage'
import ParallelTranslation from '../../components/ParallelTranslation'
import type { PageProps } from './types'

const title = '赤軍に勝る者なし'

export const documentProps = {
  title
}

const originalLyrics = `
1.
Белая армия, чёрный барон
Снова готовят нам царский трон,
Но от тайги до британских морей
Красная Армия всех сильней.

Припев:
Так пусть же Красная
Сжимает властно
Свой штык мозолистой рукой,
И все должны мы
Неудержимо
Идти в последний смертный бой!

Припев.

2.
Красная Армия, марш, марш вперёд!
Реввоенсовет нас в бой зовёт.
Ведь от тайги до британских морей
Красная Армия всех сильней!

Припев.

3.
Мы раздуваем пожар мировой,
Церкви и тюрьмы сравняем с землёй!
Ведь от тайги до британских морей
Красная Армия всех сильней!
`
const translation = `
1.
白軍と黒い男爵が
ツァーリ王権の復興を狙っている
だがタイガから英国の海に至るまで
赤軍に勝る者はない

繰り返し:
だから赤軍に
有無を言わさず
まめだらけの手で銃剣を握らせろ
そして我々全員が
とどまることなく
最後の死闘に向かわなければならない

繰り返し

2.
赤軍よ、前進だ!
革命軍事会議が我々を戦いへ呼んでいる
タイガから英国の海に至るまで
赤軍に勝る者はないのだから

繰り返し

3.
我々は世界革命の火の手を煽り
教会と監獄を地に還すのだ
タイガから英国の海に至るまで
赤軍に勝る者はないのだから
`

export function Page(props: PageProps) {
  return (
    <SongPage {...props}>
      <ParallelTranslation original={originalLyrics} translation={translation} />
    </SongPage>
  )
}
