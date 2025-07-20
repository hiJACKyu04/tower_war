import path from 'path';

import { reuse } from 'alias-reuse';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const tsconfig = path.resolve(__dirname, 'tsconfig.json');

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
    viteStaticCopy({
      targets: [{
        src: 'assets',
        dest: '',
      }],
    }),
  ],
  root: './src',
  base: '/tower_war/',
  build: {
    target: 'esnext',
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: '',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash].[ext]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/[name].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        },
      },
    },
  },
  server: {
    port: 9999,
  },
  resolve: {
    alias: reuse()
      .from(tsconfig)
      .for('vite'),
  },
});
