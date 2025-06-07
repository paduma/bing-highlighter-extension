import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json';

export default defineConfig({
    plugins: [
        crx({ manifest })
    ],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: './index.html',
                content: './src/content.ts',
                popup: './src/popup.ts'
            },
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        }
    }
}); 