---
title: "Como o aiScout treina uma IA para enxergar como um olheiro — e por que a Arábia Saudita comprou uma fatia da empresa"
description: "O aiScout já avalia 45 mil jovens atletas da MLS NEXT por vídeo de celular. Em fevereiro de 2026, a HUMAIN, braço de tecnologia do fundo soberano saudita, comprou participação de controle na empresa por trás do app. Entenda a técnica de aprendizado por comparação pareada que treina o modelo — e o que isso significa institucionalmente."
pubDate: 2026-09-17T13:00:00Z
author: "Redação Data10"
category: "Scouting"
tags: ["Scouting", "Inteligência Artificial", "Machine Learning", "aiScout", "MLS", "Categorias de Base"]
readingTime: 9
cover: "./covers/aiscout-humain-ia-scouting-mls.svg"
coverAlt: "Ilustração abstrata de uma silhueta em movimento decomposta em pontos de articulação conectados, com dois quadros de vídeo sendo comparados lado a lado"
---

Em 10 de fevereiro de 2026, a **HUMAIN** — braço de tecnologia do fundo soberano saudita PIF — anunciou, no PIF Private Sector Forum, a compra de participação de controle na **ai.io**, empresa britânica por trás do **aiScout**, e o lançamento de uma nova divisão chamada **HUMAIN Sport**. É um movimento institucional relevante: dinheiro soberano entrando diretamente na infraestrutura de scouting por inteligência artificial, não só em um clube ou liga isolada. E o aiScout já não é aposta piloto — via parceria com a MLS, a ferramenta hoje avalia **45 mil jovens atletas** da MLS NEXT nos Estados Unidos.

## O que o app realmente mede

O mecanismo, na superfície, é simples: o atleta grava pelo celular uma sequência de exercícios padronizados — sprint de 10 metros, salto vertical com contramovimento, drible entre cones, passe, finalização — e envia o vídeo pelo aplicativo. Por trás, o sistema de visão computacional da aiScout rastreia **22 segmentos do corpo** e converte o vídeo 2D em um modelo inferido de movimento em três dimensões, extraindo métricas como velocidade, altura de salto, simetria, coordenação e mecânica de giro.

## A parte mais interessante: como o modelo aprendeu o que é "bom"

O ponto tecnicamente mais relevante não é a câmera, é como o modelo foi treinado para julgar qualidade de movimento. Em vez de pedir a especialistas que atribuíssem uma nota absoluta a cada vídeo — tarefa em que diferentes avaliadores humanos tendem a discordar bastante —, a empresa usou [comparação pareada](/pt/glossario/aprendizado-comparacao-pareada/): olheiros analisaram milhares de pares de vídeos e indicaram, repetidamente, qual dos dois jogadores era melhor naquele exercício específico. Esse conjunto de julgamentos relativos ("A é melhor que B") virou a base de dados para treinar os parâmetros que hoje pontuam automaticamente qualquer vídeo novo — com os benchmarks segmentados por idade e gênero, para que um atleta de 13 anos seja comparado com seus pares, não com atletas mais desenvolvidos fisicamente.

É uma escolha metodológica com lógica própria: pedir a um humano para julgar "quem é melhor, A ou B" tende a gerar respostas mais consistentes entre avaliadores diferentes do que pedir uma nota absoluta de 0 a 10 — e é a mesma lógica usada em vários sistemas de ranking fora do esporte, de recomendação de conteúdo a comparação de modelos de linguagem.

## Adoção real, não só demonstração

O aiScout já foi usado por clubes como Chelsea e Burnley, além da integração em escala com a MLS NEXT nos Estados Unidos e Canadá. Segundo a própria empresa, mais de 135 jogadores de 125 países diferentes já conquistaram testes ou contratos a partir de avaliações feitas pelo aplicativo — número modesto perto dos 45 mil usuários ativos só na MLS NEXT, o que reforça o padrão que já vimos em ferramentas parecidas: a base de usuários cresce muito mais rápido do que os casos de sucesso documentados, e vale manter a mesma cautela de sempre com esse tipo de comparação.

## Por que a compra da HUMAIN importa mais do que parece

A aiScout foi fundada em 2017, em Hampton, no Reino Unido, por Darren Peries — uma trajetória de startup de scouting como tantas outras. A diferença agora é que ela deixou de ser só uma ferramenta de clube para se tornar ativo estratégico de um fundo soberano: a HUMAIN é o veículo de investimento em inteligência artificial do PIF, o mesmo fundo por trás da presença saudita crescente no futebol mundial (LIV Golf, Newcastle, contratações de estrelas na Saudi Pro League). Colocar dinheiro soberano diretamente na infraestrutura de scouting por IA — não em um clube, mas na ferramenta que decide quem é observado — é um sinal de que esse tipo de tecnologia deixou de ser nicho de startup esportiva para virar peça de estratégia de longo prazo de um Estado.

## O que ainda merece ceticismo

Vale a mesma honestidade que aplicamos a qualquer ferramenta de IA no scouting: a literatura acadêmica sobre avaliação automatizada por vídeo já documenta riscos reais de viés algorítmico — sistemas treinados com dados históricos podem reproduzir e amplificar desigualdades presentes nesses dados, e a promessa de "objetividade automática" costuma ser mais frágil do que parece à primeira vista. Isso não invalida a tecnologia, mas é uma ressalva que vale carregar: um modelo treinado por comparação pareada só é tão justo quanto os julgamentos humanos usados para treiná-lo. É o mesmo ponto que já levantamos no post sobre o [fim da peneira tradicional no Brasil](/pt/blog/fim-da-peneira-ia-scouting-brasil/): a democratização do acesso ao processo de ser visto é real e importante, mas ainda não é sinônimo de um processo de avaliação livre de viés.

**Fontes:** [ai.io — HUMAIN launches HUMAIN Sport following acquisition of controlling stake in ai.io](https://www.ai.io/articles/ai-io-and-humain), [Yahoo Finance — HUMAIN Launches HUMAIN Sport Following Acquisition of Controlling Stake in ai.io](https://finance.yahoo.com/news/humain-launches-humain-sport-following-145900846.html), [MLSSoccer.com — Major League Soccer and ai.io Announce Partnership](https://www.mlssoccer.com/news/major-league-soccer-and-ai-io-announce-partnership-to-provide-all-players-with-a), [Youth Sports Business Report — Ai.io's Talent Discovery App Reaches 45,000 Youth Athletes Through MLS Partnership](https://youthsportsbusinessreport.com/ai-ios-ai-talent-discovery-app-reaches-45000-youth-athletes-through-mls-partnership/), [PitchBook — AiScout Company Profile](https://pitchbook.com/profiles/company/458279-11), [MDPI — Talent Identification and AI-Driven Decision Tools in Sport: A Policy-Oriented Perspective on Algorithmic Bias, Data Privacy, and Digital Determinism in Player Evaluation](https://www.mdpi.com/2504-2289/10/5/146).
