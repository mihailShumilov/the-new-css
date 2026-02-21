import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/unit/**/*.test.{ts,js}'],
    globals: true,
    globalSetup: ['tests/setup-addons.js'],
  },
});
