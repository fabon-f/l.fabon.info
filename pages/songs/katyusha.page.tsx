import SongPage from '../../components/songs/SongPage'
import ParallelTranslation from '../../components/ParallelTranslation'
import type { PageProps } from './types'

const title = 'カチューシャ'

export const documentProps = {
  title,
  publishedAt: '2022-10-25T05:26:37+09:00'
}

const originalLyrics = `
1.
Расцветали яблони и груши,
Поплыли туманы над рекой.
Выходила на берег Катюша,
На высокий берег на крутой.

2.
Выходила, песню заводила
Про степного, сизого орла,
Про того, которого любила,
Про того, чьи письма берегла.

3.
Ой ты, песня, песенка девичья,
Ты лети за ясным солнцем вслед.
И бойцу на дальнем пограничье
От Катюши передай привет.

4.
Пусть он вспомнит девушку простую,
Пусть услышит, как она поёт,
Пусть он землю бережёт родную,
А любовь Катюша сбережёт.
`

const translation = `
1.
リンゴとナシの花が咲き誇り
川面に霧が流れ始めた
岸に出てきたのはカチューシャ
高く険しい岸に

2.
出てきたカチューシャは歌い始めた、
草原の蒼い鷲のことを、
彼女が愛した人のことを、
大切な手紙をくれた人のことを

3.
ああ、歌よ、娘の歌よ
輝く太陽の後を飛んでゆけ
そして遠き国境の地の兵士に
カチューシャからの挨拶を届けてくれ

4.
彼が純朴な娘のことを思い出しますように
彼女が歌うのが彼に聞こえますように
彼が故郷の地を守っていますように
カチューシャは愛を貫くのだから
`

export function Page(props: PageProps) {
  return (
    <SongPage {...props}>
      <ParallelTranslation original={originalLyrics} translation={translation} />
    </SongPage>
  )
}
