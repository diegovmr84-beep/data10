---
title: "StatsBomb 360: o dado entre evento e tracking"
description: "Pra cada um dos 3.300 eventos de uma partida, o StatsBomb 360 captura a posição de todo jogador visível em câmera — sem o custo do tracking data completo."
pubDate: 2026-10-09T13:00:00Z
author: "Redação Data10"
category: "Ciência de Dados"
tags: ["Ciência de Dados", "Tracking Data", "StatsBomb", "Visão Computacional"]
readingTime: 9
cover: "./covers/statsbomb-360-freeze-frame.svg"
coverAlt: "Ilustração abstrata de um ponto de evento central cercado por um instantâneo de posições de jogador, com selo de categoria Ciência de Dados"
---

Já explicamos aqui a diferença entre as duas camadas clássicas de dado no futebol: o [dado de evento](/pt/glossario/dado-de-evento/), que registra só os momentos em que algo acontece (entre 700 e 1.000 por partida), e o [tracking data](/pt/glossario/tracking-data/), que captura a posição contínua de todos os 22 jogadores, dezenas de vezes por segundo. O que normalmente fica de fora dessa conversa é que existe uma terceira opção, real e já usada em competição oficial, que fica exatamente no meio das duas: o **StatsBomb 360**.

## O que é, na prática

O StatsBomb 360 pega o modelo de dado de evento — só que bem mais denso, cerca de **3.300 eventos por partida** — e, pra cada um desses eventos, anexa um **freeze-frame**: um instantâneo da posição de todo jogador visível na câmera de transmissão naquele exato instante, não só do jogador que está com a bola. Em vez de só saber que "o lateral-direito cruzou pra área aos 23 minutos", o analista passa a saber exatamente onde estavam todos os outros jogadores visíveis em campo no momento daquele cruzamento — incluindo se havia defensor pressionando a jogada.

## Por que isso não é tracking data disfarçado

É tentador achar que isso é só tracking data mais barato, mas a diferença técnica importa. O freeze-frame do StatsBomb 360 é reconstruído a partir do **vídeo de transmissão**, não de câmera fixa dedicada instalada no estádio — por isso só captura o jogador que está dentro do enquadramento da câmera de TV naquele momento, podendo faltar gente fora de quadro. E, na versão aberta ao público, as posições não têm identificador de jogador consistente entre um freeze-frame e o seguinte — ou seja, dá pra saber onde cada um estava **naquele instante exato**, mas não dá pra calcular velocidade ou direção de movimento entre um evento e outro, como o tracking data profissional faz.

## O que já dá pra fazer com esse dado

Mesmo com essa limitação, o volume de pesquisa construído em cima do StatsBomb 360 é real. O freeze-frame é usado pra treinar modelo de [controle de espaço](/pt/glossario/controle-de-espaco/) (medir quanto território cada time "domina" no instante de um lance), pra melhorar modelo de xG levando em conta a posição do goleiro e dos defensores na hora do chute, e pra agrupar situação de jogo semelhante usando aprendizado profundo — linha de pesquisa que já apareceu publicada em cima de uma final de Copa do Mundo inteira, reconstruindo quanto do campo cada seleção controlava, lance a lance.

## Onde já está em uso oficial

Não é um experimento de laboratório: o StatsBomb 360 já cobriu a Copa do Mundo da FIFA de 2022 (64 partidas), a Eurocopa masculina de 2024 (51 partidas) e foi a primeira fonte de dado 360 já lançada para o futebol feminino, estreando na Eurocopa Feminina de 2022 e cobrindo a edição de 2025 (31 partidas) — além de apoio direto a clube de liga feminina de elite em pelo menos nove países, incluindo o Brasil.

## Por que esse meio-termo importa

O caso do StatsBomb 360 é um lembrete de que "dado no futebol" não é uma escolha binária entre o básico e o caro. Dá pra comprar densidade extra de informação — pressão, posicionamento de todos em campo — sem pagar o custo de instalar câmera fixa dedicada em cada estádio, que é exatamente a barreira que já discutimos no post sobre [tracking data sem câmera fixa](/pt/blog/tracking-data-video-de-transmissao/). Pra clube ou liga que não tem orçamento de tracking completo, mas quer ir além do dado de evento tradicional, esse meio-termo já é, hoje, uma opção real — não uma promessa futura.

**Fontes:** [Hudl StatsBomb — The World's Most Advanced Football Data](https://www.hudl.com/en_gb/products/statsbomb), [Hudl — StatsBomb's Support for Women's Football in 2024/25](https://blogarchive.statsbomb.com/news/statsbombs-support-for-womens-football/), [StatsBomb Blog Archive — Major League Soccer 2022: StatsBomb 360 Data Report](https://blogarchive.statsbomb.com/articles/soccer/major-league-soccer-2022-statsbomb-360-data-report/), [StatsBomb — An Events and 360 Data-Driven Approach for Extracting Team Tactics and Evaluating Performance in Football](https://blogarchive.statsbomb.com/uploads/2023/10/An-Events-and-360-Data-Driven-Approach-for-Extracting-Team-Tactics-and-Evaluating-Performance-in-Football.pdf), [Medium — Building a Pitch Control Model for StatsBomb Event Data](https://medium.com/@fadih3940/building-a-pitch-control-model-for-statsbomb-event-data-e0fbe50cac97).
