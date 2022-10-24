import type { PageProps as OriginalPageProps } from '../../renderer/types'
import type { SongData } from '../../data/songs'

export type PageProps = OriginalPageProps & {
  songData: SongData
}
