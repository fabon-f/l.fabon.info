let timer: number | null = null
let timer2: number | null = null
let progress = 0 // max: 100

const duration = 3000 // msec

export function start() {
  progress = 0
  const barElement = document.getElementById('progress-bar')
  if (!barElement) { return }
  barElement.style.position = 'fixed'
  barElement.style.top = '0'
  barElement.style.left = '0'
  barElement.style.zIndex = '999999'
  barElement.style.pointerEvents = 'none'
  barElement.style.width = '0%'
  barElement.style.height = '3px'
  barElement.style.opacity = '1'
  barElement.style.background = '#3366ff'
  barElement.style.transition = 'width 0.1s, opacity 0.4s'

  if (timer2) {
    clearTimeout(timer2)
  }

  timer = window.setInterval(() => {
    progress += 100 / duration * 100
    if (progress > 95) { progress = 95 }
    barElement.style.width = `${progress}%`
  }, 100)
}

export function finish() {
  if (timer) {
    clearInterval(timer)
  }
  const barElement = document.getElementById('progress-bar')
  if (!barElement) { return }
  barElement.style.width = '100%'
  timer2 = window.setTimeout(() => {
    barElement.style.opacity = '0'
  }, 300)
}
