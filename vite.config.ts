import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import type { UserConfig } from 'vite'
import linaria from '@linaria/rollup';

const config: UserConfig = {
  plugins: [
    linaria(),
    react(),
    ssr({
      prerender: true
    })
  ]
}

export default config
