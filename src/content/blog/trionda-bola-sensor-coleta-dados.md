---
title: "A bola virou sensor: como a Trionda coleta dado 500 vezes por segundo"
description: "A bola oficial da Copa 2026 tem um chip da alemã Kinexon embutido num dos quatro painéis, medindo aceleração e rotação 500 vezes por segundo. Entenda como esse dado chega ao VAR em tempo real."
pubDate: 2026-09-09T13:00:00Z
author: "Redação Data10"
category: "Tecnologia e Dados"
tags: ["Copa do Mundo 2026", "Coleta de Dados", "Trionda", "VAR", "Tracking Data"]
readingTime: 8
cover: "./covers/trionda-bola-sensor-coleta-dados.svg"
coverAlt: "Ilustração abstrata de uma bola de futebol dividida em quatro painéis, com um deles emitindo ondas de sinal captadas por uma antena"
---

Já escrevemos aqui sobre câmeras que rastreiam jogadores e sobre coletes que medem a carga física de um atleta. Mas na Copa do Mundo de 2026 tem um terceiro dispositivo de coleta que costuma passar despercebido, porque parece só um detalhe de equipamento: **a própria bola virou um sensor**. Vale entender como isso funciona de verdade, porque a engenharia por trás é mais interessante do que "bola com chip".

## O sensor por dentro da Trionda

A **Trionda**, bola oficial da Copa 2026 fabricada pela Adidas, carrega um chip de unidade de medição inercial (IMU) desenvolvido pela empresa alemã **Kinexon** — a mesma que já fornece sistemas de rastreamento e análise de dados para times profissionais em outros esportes. Esse chip mede, **500 vezes por segundo**, aceleração tridimensional, velocidade angular e rotação da bola — ou seja, uma nova leitura de movimento a cada 2 milissegundos aproximadamente. Os dados são transmitidos sem fio, em pacotes, para antenas instaladas no teto dos estádios.

## O problema de engenharia que a Adidas teve que resolver

Colocar um componente eletrônico dentro de uma bola de futebol cria um problema físico óbvio: peso extra concentrado num ponto específico pode alterar o equilíbrio e a trajetória de voo — exatamente o tipo de efeito que uma bola oficial de torneio não pode ter. A solução da Trionda foi estrutural: a bola é feita de **quatro painéis** de poliuretano termosoldados (o menor número de painéis já usado numa bola oficial de Copa do Mundo), e o chip fica embutido numa cavidade selada dentro de **apenas um** desses painéis. Os outros três painéis carregam **contrapesos** para compensar a massa extra e manter a bola equilibrada. É um detalhe que só existe porque a prioridade do projeto era viabilizar a coleta de dado sem comprometer o próprio jogo — e não o contrário. A bola também depende de carregamento por indução, levando cerca de 90 minutos para carregar antes de entrar em campo.

## Como esse dado se junta ao que a bola sozinha não sabe

Sozinho, o sensor da bola sabe como ela se moveu — não sabe onde estava cada jogador, nem se houve contato com uma mão ou um pé. É aí que os dados da Trionda se cruzam com o sistema de rastreamento óptico que já [explicamos em detalhe aqui](/pt/blog/visao-computacional-tracking-data/): 16 câmeras por estádio, captando até 29 pontos do corpo de cada jogador, 50 vezes por segundo. Combinando as duas fontes — posição exata de cada jogador mais o instante exato em que a bola foi tocada —, o sistema consegue automatizar dois tipos de decisão que antes dependiam inteiramente do olho humano: o impedimento semiautomático (cruzando o momento exato do toque na bola com o posicionamento 3D de quem recebe o passe) e lances de toque de mão, onde o sensor identifica com precisão de milissegundos o instante do contato entre a bola e o braço de um jogador.

## Por que vale chamar isso de coleta de dados, não de gadget

É fácil tratar "bola com chip" como curiosidade de marketing. Mas o desenho da Trionda mostra o oposto: uma decisão de engenharia (quatro painéis em vez do padrão anterior, contrapesos redistribuindo peso) tomada especificamente para viabilizar uma fonte de dado nova sem distorcer o objeto que está sendo medido — o mesmo tipo de cuidado metodológico que já discutimos em outros contextos de coleta, como a diferença entre dado de evento e [tracking data](/pt/glossario/tracking-data/). A bola não substitui as câmeras nem os coletes GPS que os jogadores usam em campo — ela adiciona uma camada de dado que nenhuma câmera capta sozinha: o que acontece **dentro** do objeto que decide o jogo, não só ao redor dele.

**Fontes:** [CircuitDigest — FIFA World Cup 2026's Trionda Ball Has a 500Hz Sensor Inside](https://circuitdigest.com/news/fifa-world-cup-2026-trionda-ball-has-a-500hz-sensor-inside), [Gulf News — Can the FIFA 2026 ball fail mid-game? Inside its wireless charging system](https://gulfnews.com/sport/football/world-cup/fifa-world-cup-2026-what-happens-if-the-match-ball-dies-mid-game-inside-the-wireless-tech-keeping-play-alive-1.500570906), [Hardware.com.br — como funciona o chip na bola da Copa do Mundo de 2026](https://www.hardware.com.br/artigos/bola-copa-mundo-2026-trionda-chip/), [SI.com — adidas Unveil 2026 World Cup Ball With Revolutionary In-Built AI](https://www.si.com/soccer/adidas-unveil-2026-world-cup-ball), [Lance! — Impedimento semiautomático e VAR na Copa do Mundo 2026](https://www.lance.com.br/lancepedia/impedimento-semiautomatico-e-var-na-copa-do-mundo-2026.html).
