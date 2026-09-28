---
title: "Como a NFL e o futebol rastreiam o jogador"
description: "A NFL rastreia todo jogador com chip obrigatório no ombro. O futebol, majoritariamente por câmera, sem hardware no corpo. Duas filosofias, mesmo estádio."
pubDate: 2026-10-06T13:00:00Z
author: "Redação Data10"
category: "Tecnologia e Dados"
tags: ["Tecnologia e Dados", "Tracking Data", "NFL", "Visão Computacional", "EPTS"]
readingTime: 9
cover: "./covers/nfl-futebol-tracking-data-comparativo.svg"
coverAlt: "Ilustração abstrata de dois padrões de rastreamento sobrepostos — pontos de chip e uma malha de câmera — com selo de categoria Tecnologia e Dados"
---

Em 27 de setembro de 2026, o Maracanã recebeu Ravens e Cowboys pela NFL — [o mesmo estádio que, semana após semana, recebe Flamengo e Fluminense pelo futebol](/pt/blog/maracana-nfl-recorde-publico-gramado/). Os dois esportes têm uma coisa em comum que a maioria do torcedor nem imagina: os dois rastreiam a posição de cada atleta em campo, dezenas de vezes por segundo, o tempo inteiro. O que muda completamente é *como* — e essa diferença conta uma história sobre as regras, a cultura e o tipo de contato físico de cada esporte.

## Como a NFL rastreia: chip obrigatório em todo jogador

A NFL usa o sistema **Next Gen Stats**, operado pela Zebra Technologies desde 2014. Cada jogador carrega duas etiquetas RFID do tamanho de uma moeda, com pouco mais de 3 gramas, costuradas sob a ombreira do uniforme — equipamento obrigatório, não opcional, para todo atleta em campo. As etiquetas transmitem posição em tempo real a **12 hertz** (12 vezes por segundo) para receptores espalhados pelo estádio, e o mesmo tipo de sensor já é testado dentro da própria bola, capturando velocidade, rotação e altura de cada lançamento. O sistema converte esse fluxo bruto em mais de **200 métricas por jogada** — velocidade máxima, distância percorrida, ângulo de corrida — usadas ao vivo pela transmissão e depois pelos departamentos de análise de cada franquia.

## Como o futebol rastreia: câmera é a regra, chip é a exceção

O futebol de elite segue caminho oposto. O método padrão nas principais ligas é o **sistema ótico multi-câmera** — como o TRACAB, que usou até 12 câmeras por estádio a 25 quadros por segundo (chegando a 100 Hz em versão mais recente) para calcular a posição de todo mundo em campo sem exigir nenhum equipamento sobre o corpo do jogador. Foi esse tipo de sistema que a Premier League usou entre 2013 e 2020, antes de migrar para o concorrente Second Spectrum.

Isso não quer dizer que o futebol não usa chip: desde 2015, uma mudança na Lei 4 do IFAB passou a permitir que jogador use colete com GPS durante partida oficial — mas como opção, não obrigação. Cada clube (às vezes cada atleta) decide se usa, e o uso mais comum continua sendo em treino, não em jogo oficial. A [FIFA mantém um programa de certificação, o EPTS](/pt/glossario/epts/), justamente para padronizar a qualidade tanto do sistema ótico quanto do vestível — dando ao clube a opção de escolher qual tecnologia contratar, em vez de impor uma única solução pra liga inteira.

## Por que a diferença faz sentido

A divergência não é acidente, é reflexo direto de como cada esporte é jogado. A NFL é esporte de contato pesado e constante — colisão o tempo inteiro, jogador equipado da cabeça aos pés com capacete e ombreira, o que torna trivial esconder um chip de 3 gramas dentro do equipamento que ele já usa. O futebol é esporte de contato ocasional, com uniforme mínimo por regra — qualquer coisa que soe "hardware extra" no corpo do atleta enfrenta resistência de jogador e de árbitro, o que empurrou a indústria a resolver o problema de outro jeito: apontando câmera pra cima do gramado, em vez de pendurar sensor no corpo de quem joga.

## O que os dois têm, de fato, em comum

Apesar da arquitetura oposta, os dois esportes convergem exatamente onde o corpo do atleta não está: a bola. A NFL já testa bola com RFID embutido pra capturar dado de lançamento, e a bola oficial da Copa do Mundo de 2026 carrega [chip de movimento a 500 Hz](/pt/blog/copa-do-mundo-2026-dados/) — sensor incorporado ao próprio objeto do jogo, e não ao corpo de quem o manuseia, contornando exatamente a mesma resistência ao "hardware no corpo" que molda a diferença entre os dois esportes até hoje.

**Fontes:** [Zebra — Zebra RFID technologies are changing the NFL Game Day experience](https://www.zebra.com/us/en/blog/posts/2019/five-years-ago-nickel-sized-RFID-sensor-changed-NFL-forever.html), [RFID Journal — Zebra Continues to Expand Relationship with NFL](https://www.rfidjournal.com/news/zebra-continues-to-expand-relationship-with-nfl/223983/), [PLOS One — Football-specific validity of TRACAB's optical video tracking systems](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0230179), [Sportsmith — Interchangeability of optical tracking technologies](https://www.sportsmith.co/reviews/september/interchangeability-of-optical-tracking-technologies/), [Duke University — History and FIFA Regulations of EPTS](https://sites.duke.edu/wcwp/tournament-guides/mens-world-cup-2018-guide/gear/electronic-performance-and-tracking-systems/history-and-fifa-regulations-of-epts), [FIFA — Electronic Performance and Tracking Systems (EPTS)](https://inside.fifa.com/innovation/standards/epts).
