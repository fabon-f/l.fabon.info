import { css } from '@linaria/core';

const wrapper = css`
  display: flex;
  flex-wrap: wrap;
`

const column = css`
  min-inline-size: 24em;
  inline-size: 50%;
`

export type ParallelTranslationProps = {
  original: string
  translation: string
}

export default function ParallelTranslation({ original, translation }: ParallelTranslationProps) {
  const originalElements =  original.trim().split('\n\n').map((p, i) => <p key={i} style={ { whiteSpace: 'pre-wrap' } }>{p}</p>)
  const translationElements = translation.trim().split('\n\n').map((p, i) => <p key={i} style={ { whiteSpace: 'pre-wrap' } }>{p}</p>)
  return (
    <div className={wrapper}>
      <div className={`western-text ${column}`}>{originalElements}</div>
      <div className={column}>{translationElements}</div>
    </div>
  )
}
