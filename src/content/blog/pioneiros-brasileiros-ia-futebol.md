---
title: "Do scouting à tática: dois pioneiros brasileiros da IA no futebol"
description: "Uma startup brasileira levou a primeira jogadora descoberta por IA à Seleção, e o Palmeiras é o primeiro clube latino-americano a usar o TacticAI do Google DeepMind. Dois casos reais, nas duas pontas do futebol de dados."
pubDate: 2026-09-07T15:00:00Z
author: "Redação Data10"
category: "Tecnologia e Dados"
tags: ["Inteligência Artificial", "Scouting", "Palmeiras", "Corinthians", "TacticAI"]
readingTime: 9
cover: "./covers/pioneiros-ia-futebol-brasileiro.svg"
coverAlt: "Ilustração abstrata dividida em dois lados: uma câmera apontando para um jogador de um lado, um campo tático do outro"
---

Boa parte do que se discute sobre "IA no futebol" chega ao Brasil como notícia de fora — relatórios da FIFA, plataformas europeias, parcerias de ligas estrangeiras. Vale inverter essa lente: hoje o Brasil tem **dois casos genuinamente pioneiros**, nas duas pontas opostas do que a inteligência artificial pode fazer no esporte — descoberta de talento, do lado de dentro do campo de base, e decisão tática em tempo real, do lado de dentro do jogo profissional.

## Caso 1: a primeira jogadora da história convocada com ajuda de IA

**Glória Gasparini**, zagueira de 16 anos, foi descoberta pela **Footbao**, startup brasileira fundada pelo suíço Francesco Amato (com o britânico Nick Rappolt como CEO e aporte de € 5 milhões, incluindo investimento do suíço-italiano Boris Collardi, ex-CEO global do banco Julius Baer). O funcionamento é direto: jogadores enviam vídeos de jogos e lances individuais pelo aplicativo, que são avaliados por modelos de IA e, depois, por uma equipe humana de analistas e olheiros — a IA ranqueia os atletas mais promissores entre dezenas de milhares de vídeos recebidos, e gera relatórios para os clubes parceiros.

A escala já é relevante: cerca de **120 mil jogadores cadastrados**, 20 mil com vídeos enviados, 14 mil avaliados, e mais de **300 recomendados a clubes** — entre os mais de 35 times parceiros estão os quatro grandes de São Paulo, além de Goiás, Avaí e até o Lecce, da Itália. Gasparini foi contratada pelo **Corinthians** através da plataforma e, meses depois, tornou-se a primeira jogadora da história a ser convocada para uma seleção brasileira (no caso, a Sub-17 feminina) tendo sido descoberta com ajuda de IA — um marco que discutimos em termos parecidos no artigo sobre [IA agente no scouting](/pt/blog/ia-agente-no-scouting/), mas aqui com nome, data e resultado concreto no Brasil.

## Caso 2: o Palmeiras e a IA que prevê jogadas antes de acontecerem

Do outro lado do funil de dados, o **Palmeiras** se tornou o primeiro clube da América Latina a adotar o **TacticAI**, ferramenta do Google DeepMind. Vale entender a origem real da tecnologia antes de falar da adaptação brasileira: o TacticAI nasceu de uma parceria de vários anos entre o Google DeepMind e o **Liverpool FC**, especificamente para analisar **escanteios** — a equipe de pesquisa processou dados de 7.176 escanteios anteriores do Liverpool usando uma técnica chamada *geometric deep learning*, e validou o sistema com avaliações cegas: especialistas do próprio Liverpool **não conseguiram distinguir as sugestões da IA de jogadas reais em 90% dos casos**, e as preferiram à configuração original na maioria das vezes.

A imprensa brasileira relata que a versão adotada pelo Palmeiras foi adaptada para também analisar lances com a bola em movimento, não só escanteios — um passo além do escopo original da ferramenta. O departamento de ciência de dados do clube já usa, paralelamente, um software de simulação tática do tipo "arrastar e soltar" (para testar configurações posicionais hipotéticas) e a base **Wyscout** para scouting internacional — ou seja, o TacticAI entra como mais uma camada sobre uma infraestrutura de dados que o Palmeiras já vinha construindo, não como uma ferramenta isolada.

## Duas pontas do mesmo funil

O que torna os dois casos interessantes lado a lado é que eles atacam problemas opostos do "funil" de dados no futebol: a Footbao tenta resolver **quem entra no funil** — ampliando o alcance de descoberta de talento para além da rede de olheiros tradicional, especialmente relevante num país do tamanho do Brasil —, enquanto o TacticAI tenta melhorar **a decisão dentro do funil já formado** — extrair mais valor tático de um elenco profissional já montado. Nenhum dos dois substitui julgamento humano (a Footbao usa IA só para triagem inicial, com decisão final de analistas humanos; o TacticAI foi desenhado para *sugerir*, não decidir por um treinador), mas os dois mostram que o Brasil não está só importando tendência global de IA no futebol — está gerando casos de uso próprios, com startups e departamentos nacionais na equação.

Para quem quer entender melhor os fundamentos por trás desses dois casos, os artigos sobre [Machine Learning no scouting](/pt/blog/machine-learning-scouting/) e [categorias de base e gestão de dados](/pt/blog/categorias-de-base-gestao-de-dados/) explicam a base técnica e organizacional que sustenta esse tipo de iniciativa.

**Fontes:** [Público — Glória, a primeira atleta descoberta por IA a ser convocada](https://www.publico.pt/2025/03/23/publico-brasil/noticia/primeira-atleta-convocada-selecao-brasileira-descoberta-ia-2126734), [Trivela — Footbao, a nova peneira do futebol](https://trivela.com.br/brasil/footbao-ferramenta-jovens-futebol-ia/), [NeoFeed — saem os olheiros, entra a seleção por IA](https://neofeed.com.br/finde/no-futebol-brasileiro-saem-de-campo-olheiros-e-peneiras-e-entra-a-selecao-por-ia/), [Google DeepMind — TacticAI: an AI assistant for football tactics](https://deepmind.google/blog/tacticai-ai-assistant-for-football-tactics/), [Olhar Digital — Google e Palmeiras anunciam parceria](https://olhardigital.com.br/2026/06/10/inteligencia-artificial/google-e-palmeiras-anunciam-parceria-para-usar-ia-em-lances-com-bola-rolando/).
