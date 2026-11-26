// Metadados dos posts do Blog, usados pela página de listagem
// (src/pages/blog/index.astro) para montar os cards. O conteúdo completo de
// cada post vive no próprio arquivo da página, em src/pages/blog/ — aqui só
// ficam os dados que também aparecem fora do post (card, SEO da listagem).
//
// Pra adicionar um post novo: criar o arquivo em src/pages/blog/<slug>.astro
// usando BlogPostLayout, e acrescentar uma entrada aqui com os mesmos dados
// (incluindo o import da mesma imagem de capa usada no post, se tiver).
// Post mais novo primeiro.

import coverCaptarSemIncentivo from '../assets/blog/equipe-reuniao-dados.jpg';

export const posts = [
  {
    slug: 'captar-recursos-sem-lei-de-incentivo-fiscal',
    title: 'Como captar recursos sem lei de incentivo fiscal: 4 caminhos que funcionam',
    excerpt:
      'Você sabia que é possível captar recurso pro seu projeto mesmo sem lei de incentivo fiscal? Conheça 4 caminhos reais, pra quem não depende (ou não pode depender) de incentivo do governo.',
    date: '2026-11-26',
    readingMinutes: 6,
    cover: coverCaptarSemIncentivo,
    coverAlt: 'Equipe reunida em mesa de trabalho analisando gráficos e dados em notebook, discutindo o planejamento de um projeto',
  },
];
