import SongPage from '../../components/songs/SongPage'
import ParallelTranslation from '../../components/ParallelTranslation'
import type { PageProps } from './types'

const title = 'インターナショナル (ロシア語)'

export const documentProps = {
  title,
  publishedAt: '2022-10-25T05:26:37+09:00'
}

const originalLyrics = `
1.
Вставай, проклятьем заклеймённый,
Весь мир голодных и рабов!
Кипит наш разум возмущённый
И в смертный бой вести готов.

Весь мир насилья мы разрушим
До основанья, а затем
Мы наш, мы новый мир построим ―
Кто был ничем, тот станет всем.

Припев:
Это есть наш последний
И решительный бой;
С Интернационалом
Воспрянет род людской!

2.
Никто не даст нам избавленья:
Ни бог, ни царь и не герой.
Добьёмся мы освобожденья
Своею собственной рукой.

Чтоб свергнуть гнёт рукой умелой,
Отвоевать своё добро,
Вздувайте горн и куйте смело,
Пока железо горячо!

Припев.

3.
Лишь мы, работники всемирной
Великой армии труда,
Владеть землёй имеем право,
Но паразиты ― никогда!

И если гром великий грянет
Над сворой псов и палачей,
Для нас всё так же солнце станет
Сиять огнём своих лучей.

Припев.
`

const translation = `
1.
立ち上がれ、呪いの烙印を押された
飢えたる者と奴隷たちの全世界よ!
憤激した我々の理性は沸き立ち
死闘に導く準備ができている

我々は抑圧の世界全てを
徹底的に破壊し、そして
我々の新しい世界を建設する――
何者でもなかった者たちが全てになるのだ

繰り返し:
これが我々の
最後の決戦だ
インターナショナルとともに
人類が立ち上がる

2.
誰も我々に救いを与えない
神も、ツァーリも、英雄さえも
我々は解放を勝ち取るのだ、
自らの手で

熟練の腕で圧政を打倒し
我々の善を勝ち取るために
炉に火をつけ大胆に打て、
鉄が熱いうちに

繰り返し

3.
我々、全世界の偉大な
プロレタリアートの大衆のみが
土地を所有する権利を持つのだ、
決して寄生虫どもではない!

もし大きい雷鳴が
犬どもや死刑執行人一味の上に轟けば
我々のために太陽がまた輝くだろう
自らの光によって

繰り返し
`

export function Page(props: PageProps) {
  return (
    <SongPage {...props}>
      <ParallelTranslation original={originalLyrics} translation={translation} />
    </SongPage>
  )
}
