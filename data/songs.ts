export type SongData = {
  title: string
  originalTitle: string
  lang: string[]
  tags: string[]
  creators: Record<string, string>
}

const articles = {
  'internationale_ru': {
    title: 'インターナショナル (ロシア語)',
    originalTitle: 'Интернационал',
    lang: ['ru'],
    tags: ['国歌', '党歌', '革命歌'],
    creators: {
      '作曲': 'ピエール・ドジェーテル',
      '原詞': 'ウジェーヌ・ポティエ',
      '訳詞': 'アルカジー・コッツ'
    }
  }
} as Record<string, SongData>

export default articles
