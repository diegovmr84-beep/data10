---
term: "Pitch Control"
shortDefinition: "Modelo que calcula, para cada ponto do campo, a probabilidade de um jogador específico controlar a bola ali — a base conceitual de várias ferramentas táticas modernas."
category: "Táticas"
relatedPosts: ["ghostbusters-zagueiros-fantasma-big-data-bowl"]
relatedTerms: ["controle-de-espaco", "tracking-data"]
---

**Pitch control** é um modelo, apresentado por William Spearman no MIT Sloan Sports Analytics Conference de 2018, que calcula a probabilidade de que um jogador específico consiga controlar a bola em cada ponto do campo, considerando velocidade, aceleração e tempo de reação de todos os 22 jogadores em campo.

## Como funciona

O modelo simula, a partir de dados de rastreamento posicional ([tracking data](/pt/glossario/tracking-data/)), um cenário contrafactual: não o que de fato aconteceu no lance, mas o que **poderia** acontecer se a bola fosse para determinado ponto do campo naquele instante. É um parente conceitual do [controle de espaço por Voronoi](/pt/glossario/controle-de-espaco/), mas incorpora física de movimento (velocidade, aceleração) em vez de só distância geométrica.

## Por que importa

Pitch control é considerado uma das bases conceituais por trás de ferramentas táticas modernas, como o TacticAI do Google DeepMind, desenvolvido originalmente com o Liverpool — clube onde Spearman trabalhava quando publicou o modelo original. A mesma lógica de simular cenários hipotéticos para avaliar decisão, em vez de só o resultado do lance, aparece também no futebol americano, no método "Ghostbusters" que venceu o Big Data Bowl 2026 da NFL.

Veja a explicação completa no artigo [Ghostbusters: o modelo de zagueiros-fantasma que venceu o Big Data Bowl](/pt/blog/ghostbusters-zagueiros-fantasma-big-data-bowl/).
