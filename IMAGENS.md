# Imagens do redesign (branch `redesign-confianca-premium`)

## Usada: seção "ambiente de trabalho tranquilo" (home)

- **Arquivo**: `src/assets/images/ambiente-trabalho-organizado.jpg`
- **Origem**: Unsplash — foto "Diverse team collaborating around a table in office"
- **Fotógrafo**: Vitaly Gariev
- **Link da página**: https://unsplash.com/photos/diverse-team-collaborating-around-a-table-in-office-oiqFyLx_KDU
- **Licença**: Unsplash License (uso comercial livre, sem exigência de atribuição — creditado aqui por boa prática)

## Não usada: hero da home — ficou como placeholder

Tentei três fotos candidatas pro hero (duas de um time em escritório, uma
delas de fotógrafo brasileiro em "Copa Network, Brazil") e nenhuma bateu bem
com o pedido — uma ficou escura demais e com um elemento gráfico estranho
sobreposto ao vidro, a outra mostrava um time pouco diverso, em postura muito
casual (pernas na mesa), sem o tom "confiança premium" pedido. Descartei as
três em vez de usar uma imagem que destoasse do resultado.

**O que ficou no lugar**: um placeholder estilizado (gradiente marinho/verde,
sem foto real) no componente `src/components/HomeHero.astro`, com o card
flutuante dos "7 caminhos" sobreposto, do jeito que ficaria com a foto real.

**Termo de busca sugerido**, pra você baixar manualmente (Unsplash ou
Pexels, licença de uso comercial):
- "diverse business team office natural light" / "equipe diversa escritório luz natural"
- "confident professionals meeting bright office"
- Evitar fotos com pose muito rígida, iluminação escura, ou elemento gráfico
  estranho sobreposto à cena.

**Como substituir depois**: salve a foto escolhida em
`src/assets/images/hero-equipe.jpg`, importe com
`import heroImg from '../assets/images/hero-equipe.jpg'` no topo de
`HomeHero.astro`, e troque o `<div class="hero-photo-placeholder">` por
`<Image src={heroImg} alt="..." widths={[480, 800, 1200]} sizes="(min-width: 1024px) 560px, 100vw" />`
(o import de `Image` de `astro:assets` já está disponível no projeto).
