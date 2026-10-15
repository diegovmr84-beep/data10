---
title: "A bola conectada que virou padrão na LaLiga"
description: "Diferente da bola da Copa, usada só no torneio, a LaLiga tornou o sensor dentro da bola parte permanente de toda rodada. Entenda o xBALL."
pubDate: 2026-10-16T13:00:00Z
author: "Redação Data10"
category: "Tecnologia e Dados"
tags: ["Tecnologia e Dados", "LaLiga", "Coleta de Dados", "VAR"]
readingTime: 9
cover: "./covers/laliga-connected-ball-xball-kinexon.svg"
coverAlt: "Diagrama de uma bola de futebol emitindo um sinal captado por antenas ao redor do campo"
---

Já [explicamos aqui como a Trionda](/pt/blog/trionda-bola-sensor-coleta-dados/), bola oficial da Copa do Mundo de 2026, embute um chip que mede aceleração e rotação 500 vezes por segundo. Mas a Trionda tem uma limitação estrutural: ela existe para um torneio só, quatro semanas de exposição e depois vira peça de colecionador. Em agosto de 2026, a LaLiga fez algo estruturalmente diferente — tornou a bola conectada **parte permanente de toda rodada da temporada**, não de um evento isolado. É a primeira competição nacional de futebol do mundo a fazer isso.

## O sensor, e o que ele mede diferente da Trionda

A **Connected Ball** da LaLiga usa um sensor de radiofrequência desenvolvido pela **Kinexon** — mesma empresa por trás do chip da Trionda, mas com proposta técnica diferente — embutido na bola oficial da **Puma**. Em vez de medir aceleração e rotação como a bola da Copa, o sensor da LaLiga foca em dois dados: a **posição da bola em tempo real** e o **momento exato de cada toque**, captados por cerca de **12 antenas instaladas em cada estádio**. Esse segundo dado tem nome próprio no material da liga: o sinal de "heartbeat", que marca com precisão o instante do contato — justamente o tipo de ambiguidade que hoje obriga o árbitro de vídeo a escolher manualmente qual frame de câmera usar pra marcar um impedimento.

## A engenharia por trás de manter a bola "normal"

O mesmo problema que a Adidas resolveu com contrapeso na Trionda — peso extra concentrado não pode alterar como a bola se comporta em jogo — também apareceu aqui, resolvido em conjunto por Puma e Kinexon. Testes de validação e testes cegos com jogadores profissionais não encontraram diferença perceptível de toque, trajetória, peso ou equilíbrio em relação a uma bola convencional. É um padrão que já vimos antes nesse tipo de produto: a prioridade de engenharia é não distorcer o próprio objeto que está sendo instrumentado.

## Operação de um jogo com bola conectada

A logística por trás é mais pesada do que parece à primeira vista: cada partida da LaLiga usa **14 bolas conectadas** — uma em jogo, uma com o quarto árbitro, e doze posicionadas em pontos fixos ao redor do campo, pra reposição imediata sem perder o rastreamento. Cada bola é identificada, carregada, checada e validada antes da partida, e bolas conectadas só entram em jogo oficial — não em aquecimento nem treino. Há também um programa de capacitação liderado pelo Comitê Técnico de Árbitros (CTA) espanhol, pra padronizar o uso do sistema em todos os estádios da liga.

## xBALL: o que a liga quer fazer com esse dado depois

A LaLiga batizou de **xBALL** a nova camada oficial de dado criada a partir da bola conectada — descrita como base pra inovação futura em transmissão, produto digital e análise de partida. Na prática, isso deve viabilizar exibição de velocidade exata de um chute, efeito aplicado à bola e trajetória de lances-chave direto na transmissão, compatível com o sinal internacional da liga e com futuros produtos de "segunda tela". A liga não divulgou taxa de amostragem do sensor nem termo de acesso a terceiros — informação que, se vier a público, merece atualização deste texto.

## Por que a diferença entre "evento" e "padrão" importa

O ponto central não é a tecnologia em si — RF e IMU são abordagens diferentes pra um problema parecido, nenhuma claramente superior à outra pro que cada uma mede. O ponto é institucional: a Copa do Mundo é a vitrine mais vista do mundo pra qualquer tecnologia nova, mas dura um mês a cada quatro anos. Uma liga doméstica rodando o sistema em **todas as partidas de uma temporada inteira**, com plano de expansão pra segunda divisão a partir de 2027/28, é o tipo de adoção que de fato muda o comportamento de analista, árbitro e torcedor no dia a dia — o critério que tentamos aplicar toda vez que avaliamos se uma tecnologia nova merece espaço aqui.

**Fontes:** [LaLiga — LALIGA EA SPORTS becomes the first national football competition to roll out Connected Ball technology across all its matches](https://www.laliga.com/en-GB/news/laliga-ea-sports-becomes-the-first-national-football-competition-to-roll-out-connected-ball-technology-across-all-its-matches), [Advanced Television — LaLiga rolls out Connected Ball technology](https://www.advanced-television.com/2026/08/14/laliga-rolls-out-connected-ball-technology/).
