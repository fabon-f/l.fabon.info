import preact from '@preact/preset-vite'
import ssr from 'vite-plugin-ssr/plugin'
import type { UserConfig } from 'vite'
import linaria from '@linaria/vite';

const config: UserConfig = {
  plugins: [
    linaria(),
    preact(),
    ssr({
      prerender: true
    })
  ]
}

export default config
