import SongPage from '../../components/songs/SongPage'
import ParallelTranslation from '../../components/ParallelTranslation'
import { YouTubeEmbed } from '../../components/YouTubeEmbed'
import type { PageProps } from './types'

const title = '前進せよ、ロシア!'

export const documentProps = {
  title,
  publishedAt: '2022-10-31T21:37:00+09:00'
}

const originalLyrics = `
Славься, славься, ты Русь моя
Славься, ты русская наша земля
Да будет во веки веков сильна
Любимая наша страна

1.
Так было в России с далёких времён:
Чем выше давление, тем крепче бетон.
И если опасность державе грозит,
Становится Родина, как монолит.

В горниле победы сегодня как встарь
Опять закаляется Родины сталь

Припев:
Россия, Россия — в этом слове огонь и сила
В этом слове победы пламя
Поднимаем России знамя

Припев.

2.
Пусть время нас бурным потоком несёт
За нами Россия, за нами народ
Традиции святы и тысячи лет
Продолжится летопись наших побед

А если врагов налетит вороньё
Их снова Отечество встретит моё

Припев.
Припев.

В этом слове источник силы
Повторяем: «Вперёд, Россия!»

Припев.
Припев.
`

const translation = `
栄光あれ、栄光あれ、汝、我がルーシ、
栄光あれ、栄光あれ、ロシアの我らの大地
愛しい我らの国が
永遠に強大でありますように

1.
ロシアでははるか昔からそうだった——
圧力が高くなるほど、コンクリートはより硬くなる
そして国家が危機に瀕すれば
祖国は一枚岩になる

勝利の厳しい試練の中、かつてのように今日
また祖国の鋼鉄は鍛えられている

繰り返し:
ロシア、ロシア——その言葉には火と力がある
その言葉には勝利の炎がある
我らはロシアの旗を掲げよう

繰り返し

2.
たとえ時が我らを激流のごとく押し流しても
我らにはロシアが、人民がついている
伝統は神聖で、数千年ずっと
我らの勝利の歴史は続くだろう

もし敵のカラスどもが襲ってきたら
また私の祖国は迎え撃つだろう

繰り返し
繰り返し

その言葉には力の源がある
繰り返そう、「前進せよ、ロシア!」

繰り返し
繰り返し
`

export function Page(props: PageProps) {
  return (
    <SongPage {...props}>
      <ParallelTranslation original={originalLyrics} translation={translation} />
      <section>
        <h2>解説</h2>
        <p>政治的発言などを理由にリトアニアなどから出禁にされていることで有名な、ロシア愛国音楽界の大物オレグ・ガズマノフの曲です。</p>
        <p>なお、前奏の合唱部分はグリンカ作曲の<a href="/songs/slavsya/">栄光あれ</a>の引用です。</p>
      </section>
      <YouTubeEmbed id="r29k_T_o9To" />
    </SongPage>
  )
}
