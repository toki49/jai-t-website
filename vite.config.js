// // import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';

// // export default defineConfig({
// //   plugins: [react()],
// //   base: '/jai-t-website/', // 👈 IMPORTANT — change this
// // });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: process.env.CF_PAGES ? '/' : '/jai-t-website/',
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), 
     tailwindcss(),
  ],
  base: '/', // ✅ ALWAYS '/' for Cloudflare Pages
});
