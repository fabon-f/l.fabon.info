export type SongData = {
  title: string
  originalTitle: string
  lang: string | string[]
  tags: string[]
  creators: Record<string, string>
}

const articles = {
  'internationale_ru': {
    title: 'インターナショナル (ロシア語)',
    originalTitle: 'Интернационал',
    lang: 'ru',
    tags: ['国歌', '党歌', '革命歌'],
    creators: {
      '作曲': 'ピエール・ドジェーテル',
      '原詞': 'ウジェーヌ・ポティエ',
      '訳詞': 'アルカジー・コッツ'
    }
  },
  'red-army-strongest': {
    title: '赤軍に勝る者なし',
    originalTitle: 'Красная Армия всех сильней',
    lang: 'ru',
    tags: ['ロシア内戦', '赤軍'],
    creators: {
      '作詞': 'パーヴェル・ゴリンシュテイン',
      '作曲': 'サムイル・ポクラス'
    }
  },
  'through-valleys-and-over-hills': {
    title: '谷を渡り丘を越え',
    originalTitle: 'По долинам и по взгорьям',
    lang: 'ru',
    tags: ['ロシア内戦', '赤軍'],
    creators: {
      '作詞': 'ピョートル・パルフョーノフ',
      '作曲者': '不詳',
      '歌詞改変': 'セルゲイ・アリモフ'
    }
  },
  'air-march': {
    title: '航空行進曲',
    originalTitle: 'Авиамарш',
    lang: 'ru',
    tags: ['空軍'],
    creators: {
      '作詞': 'パーヴェル・ゲルマン',
      '作曲': 'ユーリイ・ハイト'
    }
  },
  'katyusha': {
    title: 'カチューシャ',
    originalTitle: 'Катюша',
    lang: 'ru',
    tags: [],
    creators: {
      '作詞': 'ミハイル・イサコフスキー',
      '作曲': 'マトヴェイ・ブランテル'
    }
  },
  'sacred-war': {
    title: '聖なる戦い',
    originalTitle: 'Священная война',
    lang: 'ru',
    tags: ['独ソ戦'],
    creators: {
      '作詞': 'ヴァシリー・レベデフ＝クマチ',
      '作曲': 'アレクサンドル・アレクサンドロフ'
    },
  },
  'under-balkan-stars': {
    title: 'バルカンの星の下に',
    originalTitle: 'Под звёздами балканскими',
    lang: 'ru',
    tags: ['独ソ戦'],
    creators: {
      '作詞': 'ミハイル・イサコフスキー',
      '作曲': 'マトヴェイ・ブランテル'
    }
  },
  'ussr-anthem_1944': {
    title: 'ソ連国歌 (1944年)',
    originalTitle: 'Гимн СССР',
    lang: 'ru',
    tags: ['国歌'],
    creators: {
      '作詞': 'セルゲイ・ミハルコフ、エリ＝レギスタン',
      '作曲': 'アレクサンドル・アレクサンドロフ'
    }
  },
  'crew-one-family': {
    title: '乗組員は一つの家族',
    originalTitle: 'Экипаж - одна семья',
    lang: 'ru',
    tags: ['海軍'],
    creators: {
      '作詞': 'ユーリイ・ポゴレリスキー',
      '作曲': 'ヴィクトル・プレシャク'
    }
  },
  'victory-day': {
    title: '勝利の日',
    originalTitle: 'День Победы',
    lang: 'ru',
    tags: [],
    creators: {
      '作詞': 'ウラジーミル・ハリトーノフ',
      '作曲': 'ダヴィド・トゥフマーノフ'
    },
  },
  'ussr-anthem_1977': {
    title: 'ソ連国歌 (1977年)',
    originalTitle: 'Гимн СССР',
    lang: 'ru',
    tags: ['国歌'],
    creators: {
      '作詞': 'セルゲイ・ミハルコフ',
      '作曲': 'アレクサンドル・アレクサンドロフ'
    }
  },
  'slavsya': {
    title: '栄光あれ',
    originalTitle: 'Славься',
    lang: 'ru',
    tags: ['ロシア帝国'],
    creators: {
      '作曲': 'ミハイル・グリンカ',
      '作詞': 'ヴァシリー・ジューコフスキー、エゴール・ローゼン'
    }
  },
  'russia-anthem_2000': {
    title: 'ロシア国歌 (2000年)',
    originalTitle: 'Гимн Российской Федерации',
    lang: 'ru',
    tags: ['国歌'],
    creators: {
      '作詞': 'セルゲイ・ミハルコフ',
      '作曲': 'アレクサンドル・アレクサンドロフ'
    }
  },
  'kukushka': {
    title: 'カッコウ',
    originalTitle: 'Кукушка',
    lang: 'ru',
    tags: ['ロック'],
    creators: {
      'バンド': 'キノー',
      '作詞': 'ヴィクトル・ツォイ',
      '作曲': 'ヴィクトル・ツォイ',
      'ボーカル': 'ヴィクトル・ツォイ'
    }
  }
} as Record<string, SongData>

export default articles
