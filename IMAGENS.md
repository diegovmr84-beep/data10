# Imagens do site

## Fotos enviadas diretamente pelo Diego (19/10/2026)

As quatro fotos abaixo foram baixadas pelo Diego do Pexels (busca
["corporativo"](https://www.pexels.com/pt-BR/procurar/corporativo/)) e
enviadas pelo chat. **Licença**: Pexels License — uso comercial livre, sem
exigência de atribuição (https://www.pexels.com/license/). Creditadas aqui
por boa prática; não identifiquei o fotógrafo/URL exata de cada foto
individual, já que vieram prontas, não baixadas por mim direto da página.

### Seção "Como entregamos" (página Sites e Aplicativos)

- **Arquivo**: `src/assets/images/equipe-escritorio-digital.jpg`
- **Usada em**: `src/pages/sites-aplicativos.astro` (seção nova, antes a
  página não tinha foto)
- **Fonte**: Pexels (busca "corporativo") — Pexels License
- **Histórico**: essa foto ficou primeiro no hero da home, mas o cartão
  flutuante dos "7 caminhos" tampava o rosto das pessoas nela. Movida pra
  cá, onde não tem esse problema de recorte.

### Seção "Processo conduzido com calma" (home)

- **Arquivo**: `src/assets/images/reuniao-equipe-diversa.jpg`
- **Usada em**: `src/components/TrustSection.astro` (substituiu a foto do
  Unsplash usada antes — ver histórico de commits se precisar recuperá-la)
- **Fonte**: Pexels (busca "corporativo") — Pexels License

### Seção "Experiência" (página Sobre)

- **Arquivo**: `src/assets/images/lideranca-conversa.jpg`
- **Usada em**: `src/pages/sobre.astro` (seção nova, antes a página não
  tinha foto)
- **Fonte**: Pexels (busca "corporativo") — Pexels License

### Seção "Como atuamos" (página Captação de Recursos)

- **Arquivo**: `src/assets/images/reuniao-captacao.jpg`
- **Usada em**: `src/pages/servicos-captacao.astro` (seção nova, antes a
  página não tinha foto)
- **Fonte**: Pexels (busca "corporativo") — Pexels License

## Hero da home: ilustração animada, não foto

Depois de testar foto no hero (ver histórico abaixo), o hero passou a usar
uma ilustração SVG animada — nós conectados por linhas, em navy/emerald,
simbolizando os caminhos de captação convergindo para um projeto — em vez
de foto. Evita de vez o problema de o cartão flutuante tampar rosto de
pessoa, e não depende de nenhuma licença de imagem. Está inline em
`src/components/HomeHero.astro` (respeita `prefers-reduced-motion`).

## Histórico

A primeira versão do redesign ("Confiança premium") usou uma foto do
Unsplash (Vitaly Gariev, Unsplash License) na seção de confiança da home e
deixou o hero como placeholder estilizado, por não ter uma foto que
batesse bem com o pedido. As quatro fotos do Pexels acima substituíram
essa versão; a do hero depois virou a ilustração animada descrita acima, e
a foto original do hero foi reaproveitada em Sites e Aplicativos.
