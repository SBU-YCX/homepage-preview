import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',

  // 正式域名及网站根路径。
  site: 'https://yuchengxing.me',
  base: '/',

  trailingSlash: 'always',

  build: {
    inlineStylesheets: 'always',
  },

  devToolbar: {
    enabled: false,
  },

  server: {
    host: true,
    port: 4173,
    allowedHosts: ['terminal.local'],
  },
});
