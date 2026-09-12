---
title: "Como a academia organiza a análise tática computacional no futebol"
description: "Uma dupla de artigos de 2025, escritos por uma cientista do esporte e um cientista da computação, mapeia toda a produção acadêmica sobre tática e dado — e expõe a lacuna entre a ferramenta sofisticada e a comissão técnica que precisa usá-la."
pubDate: 2026-09-12T13:00:00Z
author: "Redação Data10"
category: "Táticas"
tags: ["Tática", "Machine Learning", "Pitch Control", "Expected Threat", "Pesquisa Acadêmica"]
readingTime: 9
cover: "./covers/abordagens-computacionais-tatica.svg"
coverAlt: "Ilustração abstrata de quatro nós conectados em ciclo ao redor de um hub central de dados"
---

A maioria dos posts que escrevemos aqui parte de uma novidade pontual — um estudo novo, uma tecnologia lançada, um resultado de jogo. Este é diferente: em 2025, a *Science and Medicine in Football* publicou uma dupla de artigos de comentário que tenta organizar **todo o campo** de análise tática computacional no futebol, assinados por **Sigrid Olthof** (cientista do esporte, Liverpool John Moores University) e **Jesse Davis** (cientista da computação, KU Leuven) — uma dupla interdisciplinar por escolha deliberada. Vale usar esse mapa para ver como os posts que já publicamos aqui se encaixam num quadro maior.

## O modelo de fases que organiza a área

Os autores dividem qualquer partida em quatro fases: **posse de bola (IP)**, **sem a bola (OOP)**, **transição ataque-defesa (ADT)** e **transição defesa-ataque (DAT)**. Não é uma novidade tática — é a mesma lógica que qualquer comissão técnica já usa —, mas serve como uma lente organizadora útil para mapear onde cada tipo de ferramenta computacional atua.

## Três frentes computacionais, mapeadas por fase

- **Avaliação de ações e tática** (concentrada na fase de posse): modelos que atribuem valor a uma ação — o [xG](/pt/glossario/xg/) avalia a qualidade de uma finalização, o [xT (Expected Threat)](/pt/glossario/xt/) avalia o valor de cada ação que aproxima a bola do gol adversário, não só o chute em si.
- **Modelagem de movimento de jogadores** (atravessa todas as fases, mas rende mais nas transições e na fase sem a bola): o [pitch control](/pt/glossario/pitch-control/) calcula a probabilidade de controle de cada ponto do campo, e técnicas de "ghosting" — como o método que [venceu o Big Data Bowl 2026 da NFL](/pt/blog/ghostbusters-zagueiros-fantasma-big-data-bowl/) — simulam cenários contrafactuais de posicionamento para avaliar decisão, não só resultado.
- **Previsão de sucesso de jogador e de equipe**: modelos de machine learning que vão além de descrever o desempenho passado e tentam estimar o futuro — o mesmo tipo de abordagem do estudo que tentou [prever quem vira "jogador de ponta"](/pt/blog/ia-prever-jogador-de-ponta/).

## O ponto central do artigo: uma lacuna, não uma solução

O argumento mais importante de Olthof e Davis não é técnico, é organizacional: pesquisadores computacionais constroem ferramentas cada vez mais sofisticadas, mas isso não resolve sozinho o problema de como uma comissão técnica **usa** essa informação numa segunda-feira de treino real. Os autores defendem colaboração mais próxima entre as duas comunidades — cientista de dados e cientista do esporte — justamente porque elas usam ferramentas científicas diferentes e partem de perguntas diferentes sobre o mesmo jogo.

## A resposta crítica publicada junto

O artigo não ficou sem contestação — e isso é uma parte saudável do processo científico que vale destacar. Em resposta, os pesquisadores **Hecksteden, Kempe e Berger** concordaram com o argumento central, mas acrescentaram uma nuance importante: o núcleo de qualquer decisão tática é, no fundo, uma **tarefa de previsão** — estimar o resultado provável de cada opção disponível e escolher entre elas com informação limitada. Por isso, defendem que o caminho mais promissor não é a ferramenta computacional substituir o julgamento humano, mas combinar as duas coisas deliberadamente — o que chamam de aproveitar sinergias entre inteligência humana e artificial, com modelos de machine learning **interpretáveis**, e colaboração entre especialista do domínio e especialista em dado ao longo de **todo** o processo, não só na entrega final da ferramenta pronta.

## Por que isso amarra tudo que já escrevemos aqui

Esse debate acadêmico é, essencialmente, a versão formal de uma ressalva que repetimos neste blog sempre que cruzamos dado com decisão esportiva: modelo bom reduz incerteza, não elimina o julgamento humano. A diferença é que aqui isso vem como conclusão deliberada de dois pesquisadores de disciplinas diferentes — um do lado da computação, outro do lado da ciência do esporte —, publicando juntos exatamente para forçar essa conversa entre os dois campos a acontecer na prática, não só no papel.

**Fontes:** [Science and Medicine in Football — Perspectives on data analytics for gaining a competitive advantage in football: computational approaches to tactics](https://www.tandfonline.com/doi/full/10.1080/24733938.2025.2533784), [Science and Medicine in Football — harnessing data for decision support](https://www.tandfonline.com/doi/full/10.1080/24733938.2025.2517056), [PubMed — Perspectives on data analytics for gaining a competitive advantage in football: harnessing data for decision support](https://pubmed.ncbi.nlm.nih.gov/40483541/), [University of Groningen Research Portal — registro da publicação](https://research.rug.nl/en/publications/perspectives-on-data-analytics-for-gaining-a-competitive-advantag/).
