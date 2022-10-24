import SongPage from '../../components/songs/SongPage'
import ParallelTranslation from '../../components/ParallelTranslation'
import type { PageProps } from './types'

const title = '谷を渡り丘を越え'

export const documentProps = {
  title
}

const originalLyrics = `
1.
По долинам и по взгорьям
Шла дивизия вперёд,
Чтобы с боя взять Приморье ―
Белой армии оплот

2.
Наливалися знамёна
Кумачом последних ран,
Шли лихие эскадроны
Приамурских партизан.

3.
Этих лет не смолкнет слава,
Не померкнет никогда ―
Партизанские отряды
Занимали города.

4.
И останутся, как в сказках,
Как манящие огни
Штурмовые ночи Спасска,
Волочаевские дни.

5.
Разгромили атаманов,
Разогнали воевод
И на Тихом океане
Свой закончили поход.
`

const translation = `
1.
谷を渡り丘を越え
師団は前進していった
沿海州を、白軍の砦を
占領するため

2.
さきの戦いの傷に
旗は赤く染まった
駆け抜けていったのは
勇敢なアムール川の騎兵中隊

3.
この日々の栄光は消えず
永久に色褪せることもない
パルチザンの部隊が次々と
街を占領していったのだ

4.
そして伝説として、
人を惹き付ける灯のように残る
スパッスクの突撃の夜と
ヴォロチャエフカの日々

5.
我々は敵の首領を打ち砕き
司令官を追い払い
そして太平洋で
行軍を終えたのだ
`

export function Page(props: PageProps) {
  return (
    <SongPage {...props}>
      <ParallelTranslation original={originalLyrics} translation={translation} />
    </SongPage>
  )
}
