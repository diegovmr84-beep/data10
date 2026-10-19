// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { legacyRedirects } from './src/data/legacy-redirects.mjs';

// Site hospedado no domínio próprio https://data10.app.br, via GitHub Pages
// (CNAME em public/CNAME). Como o domínio serve a raiz diretamente, `base`
// fica em '/' — se o site voltar a ser servido a partir de um subcaminho
// (ex: usuario.github.io/data10/), ajuste `base` de volta para '/data10'.
const base = '/';

export default defineConfig({
  site: 'https://data10.app.br',
  base,
  trailingSlash: 'always',

  // URLs do antigo site (sistema de gestão esportiva) redirecionadas pras
  // páginas novas mais próximas, ou pra home — ver src/data/legacy-redirects.mjs.
  redirects: legacyRedirects,

  integrations: [
    sitemap({
      // A página de privacidade é noindex (ver src/pages/privacidade.astro);
      // excluir do sitemap evita mandar sinal contraditório ao Google.
      filter: (page) => !page.includes('/privacidade/'),
    }),
  ],

  image: {
    // A imagem padrão de Open Graph é SVG autoral (não vem de usuário/fonte
    // externa), então é seguro rasterizá-la — usado para gerar a versão PNG
    // pra og:image/twitter:image (X/Twitter não aceita SVG em preview de link).
    dangerouslyProcessSVG: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // Deixa o build enxuto e previsível em máquinas com pouca RAM/CPU.
    inlineStylesheets: 'auto',
  },
});
