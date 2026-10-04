---
term: "StatsBomb 360"
shortDefinition: "Dado de evento denso (~3.300 por partida) com um freeze-frame anexado a cada ação, mostrando a posição de todo jogador visível em câmera naquele instante — um meio-termo entre dado de evento e tracking data."
category: "Ciência de Dados"
relatedPosts: ["statsbomb-360-freeze-frame"]
relatedTerms: ["dado-de-evento", "tracking-data", "controle-de-espaco"]
---

**StatsBomb 360** é um formato de dado que combina [dado de evento](/pt/glossario/dado-de-evento/) denso (cerca de 3.300 ações por partida, bem mais que a média de 700 a 1.000 do dado de evento tradicional) com um **freeze-frame**: um instantâneo da posição de todo jogador visível na câmera de transmissão, anexado a cada evento registrado.

## Como funciona

Em vez de só registrar que uma ação aconteceu, cada evento do StatsBomb 360 carrega junto a posição de todos os outros jogadores em quadro naquele instante exato — incluindo se havia pressão defensiva sobre o lance. É gerado a partir do vídeo de transmissão, não de câmera fixa dedicada instalada no estádio, o que o torna mais barato de produzir que tracking data completo.

## Limitação importante

Na versão aberta ao público, os jogadores não têm identificador consistente entre um freeze-frame e o próximo — dá pra saber a posição de cada um naquele instante exato, mas não dá pra calcular velocidade ou direção de movimento entre eventos, como o tracking data profissional permite.

## Onde é usado

Já cobriu a Copa do Mundo da FIFA de 2022, a Eurocopa masculina de 2024 e foi a primeira fonte de dado 360 do futebol feminino, estreando na Eurocopa Feminina de 2022.

Veja a explicação completa, incluindo as aplicações de pesquisa já publicadas em cima desse dado, no post [StatsBomb 360: o dado entre evento e tracking](/pt/blog/statsbomb-360-freeze-frame/).
