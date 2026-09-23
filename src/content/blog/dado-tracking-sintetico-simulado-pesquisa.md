---
title: "O dado que ninguém precisou coletar: pesquisadores estão simulando partida inteira para treinar modelo"
description: "Já registramos aqui que tracking data é caro e proprietário, restrito a quem paga por ele. Uma dupla de pesquisadores (um deles ligado aos Chicago Blackhawks, da NHL) resolveu simular 3 mil partidas inteiras num videogame de física para gerar dado sintético com a mesma estrutura do real — de graça, para qualquer pesquisador."
pubDate: 2026-09-30T13:00:00Z
author: "Redação Data10"
category: "Ciência de Dados"
tags: ["Tracking Data", "Aprendizado por Reforço", "Machine Learning", "Visão Computacional", "Ciência de Dados"]
readingTime: 10
cover: "./covers/dado-tracking-sintetico-simulado-pesquisa.svg"
coverAlt: "Ilustração abstrata de um campo de futebol dentro de uma tela de videogame, com pontos de rastreamento sendo exportados para uma planilha de dados"
---

Já registramos aqui, no post sobre [visão computacional e tracking data](/pt/blog/visao-computacional-tracking-data/), uma limitação real desse tipo de dado: é caro, proprietário, e a maioria dos clubes com acesso a ele depende de contrato com poucos fornecedores especializados — o que concentra vantagem competitiva em quem tem orçamento para pagar. Uma dupla de pesquisadores decidiu atacar esse problema por um caminho inesperado: em vez de coletar dado de partida real, **simular** partidas inteiras num videogame de física e extrair dado de rastreamento sintético de lá — com a mesma estrutura que um tracking data de verdade teria.

## O videogame por trás do dado

A base é o **Google Research Football (GRF)**, um ambiente de simulação física em 3D criado originalmente para pesquisa de [aprendizado por reforço](/pt/glossario/aprendizado-por-reforco/) multiagente — cada jogador pode ser controlado por um agente de IA independente, competindo contra um time adversário com IA embutida em três níveis de dificuldade. O ambiente descreve o estado do jogo de três formas possíveis (imagem em pixel, um "minimapa" binário simplificado, ou um vetor compacto com 115 números representando posição de jogadores, posse e direção da bola). As ações disponíveis para cada agente são discretas — mover em 8 direções, passar, chutar, sprintar, dividir, driblar — e o sistema de recompensa foi desenhado com duas funções: uma que só recompensa gol, e outra ("checkpoint") que dá recompensa intermediária conforme a bola avança em direção ao gol adversário, resolvendo o problema de um agente nunca aprender nada porque gol é um evento raro demais para servir de único sinal de treino.

## De jogo simulado para dado de tracking

David Radke, hoje ligado ao departamento de análise dos Chicago Blackhawks (equipe da NHL), e Kyle Tilbury, da Universidade de Waterloo, publicaram na AAMAS 2025 (conferência internacional de sistemas multiagente) um método que roda partidas inteiras nesse ambiente, registra posição e velocidade de cada jogador e da bola quadro a quadro, e formata esse registro na mesma estrutura de schema que um tracking data real usaria — com processo automático para extrair eventos de alto nível como passe e gol a partir do dado bruto de posição. O resultado é um conjunto de **3 mil partidas simuladas** já disponível publicamente, pronto para qualquer pesquisador testar modelo sem precisar de contrato com fornecedor de dado real.

## A prova de que dado sintético funciona na prática

Um projeto complementar reforça que essa abordagem não é só gambiarra acadêmica: o **SoccerSynth-Detection** usa uma abordagem parecida para gerar não posição, mas **imagem sintética** de partida — variando de forma controlada iluminação, aparência de campo, textura de uniforme, ângulo de câmera e até desfoque de movimento simulado —, para treinar modelo de detecção de jogador em vídeo. Testado com o modelo YOLOv8n contra datasets reais de referência (SoccerNet-Tracking e SportsMoT), o modelo treinado com dado sintético **empatou em desempenho geral** com o treinado em dado real, e **superou** o dado real especificamente em imagens com desfoque de movimento — justamente o tipo de cena mais difícil de capturar em quantidade suficiente em vídeo real de partida.

## Por que isso resolve um problema real, não só teórico

A motivação declarada por trás do SoccerSynth-Detection é direta: a quantidade de jogadores em campo, a oclusão frequente entre eles e restrição de direito autoral sobre transmissão de jogo real limitam seriamente a disponibilidade e a diversidade de dataset de vídeo de futebol para treinar modelo de visão computacional. Dado sintético ataca os dois problemas ao mesmo tempo: não depende de licença de transmissão, e o pesquisador controla exatamente as condições que quer representar (mais desfoque, mais oclusão, luz diferente) em vez de esperar que a partida real aconteça daquele jeito.

## O que ainda não é resolvido

Vale a mesma ressalva de sempre: o comportamento de um agente de IA treinado num simulador ainda é mais previsível e menos "ruidoso" do que o de um jogador humano de verdade — decisão sob pressão, cansaço, e a variabilidade tática real de um time profissional não são totalmente capturados pelo ambiente simulado. Modelo treinado só com dado sintético ainda precisa passar por validação (e normalmente ajuste fino) em dado real antes de qualquer aplicação prática em decisão de clube. O valor imediato dessa linha de pesquisa não é substituir o dado real, é **democratizar o acesso ao primeiro estágio de prototipagem** — testar arquitetura de modelo, validar hipótese metodológica, treinar quem está aprendendo a área — sem depender, desde o primeiro dia, de contrato caro com fornecedor especializado.

**Fontes:** [AAMAS 2025 — Simulating Tracking Data to Advance Sports Analytics Research](https://www.ifaamas.org/Proceedings/aamas2025/pdfs/p3038.pdf), [arXiv — Simulating Tracking Data to Advance Sports Analytics Research](https://arxiv.org/abs/2503.19809), [University of Waterloo — How AI is opening the playbook on sports analytics](https://uwaterloo.ca/artificial-intelligence-institute/news/how-ai-opening-playbook-sports-analytics), [arXiv — SoccerSynth-Detection: A Synthetic Dataset for Soccer Player Detection](https://arxiv.org/abs/2501.09281), [GitHub — open-starlab/SoccerSynth-Detection](https://github.com/open-starlab/SoccerSynth-Detection).
