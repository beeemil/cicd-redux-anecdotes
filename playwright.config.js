import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './e2e-tests',
  webServer: {
    command: 'npm run dev && npm run server',
    url: 'http://127.0.0.1:4173',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:4173/',
  },
})
