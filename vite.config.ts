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
      targets: [
        {
          src: 'assets',
          dest: '',
        },
        {
          src: 'game/scenes/world/entities/building/resources',
          dest: 'assets',
        },
        {
          src: 'game/scenes/world/entities/player/resources',
          dest: 'assets',
        },
        {
          src: 'game/scenes/world/entities/crystal/resources',
          dest: 'assets',
        },
        {
          src: 'game/scenes/world/entities/shot/ball/resources',
          dest: 'assets',
        },
        {
          src: 'game/scenes/world/entities/npc/enemy/resources',
          dest: 'assets',
        },
        {
          src: 'game/scenes/world/entities/npc/assistant/resources',
          dest: 'assets',
        },
        {
          src: 'game/scenes/world/level/resources',
          dest: 'assets',
        },
        {
          src: 'game/scenes/world/fx-manager/effect/resources',
          dest: 'assets',
        },
        {
          src: 'game/scenes/world/fx-manager/particles/resources',
          dest: 'assets',
        },
        {
          src: 'game/scenes/world/wave/resources',
          dest: 'assets',
        },
        {
          src: 'game/scenes/screen/resources',
          dest: 'assets',
        },
        {
          src: 'game/scenes/world/level/resources/textures/venus',
          dest: 'assets/resources/textures',
        },
      ],
    }),
  ],
  root: './src',
  base: '/tower_war/',
  build: {
    target: 'esnext',
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash].[ext]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|mp3|wav|ogg/i.test(ext)) {
            return `assets/[name].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        },
      },
    },
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.mp3', '**/*.wav', '**/*.ogg'],
  define: {
    __VITE_ASSET_URL__: JSON.stringify('/tower_war/assets/'),
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
