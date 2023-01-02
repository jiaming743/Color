import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { DEV_DIR } from '../config'

// eslint-disable-next-line
export default defineConfig({
  root: DEV_DIR,
  server: {
    open: true,
  },
  plugins: [react()],
})
