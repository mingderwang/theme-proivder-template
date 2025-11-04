import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*.vitest.?(c|m)[jt]s?(x)'],
    setupFiles: ['vitest-cleanup-after-each.ts'],
    environment: "happy-dom"
  },
})
