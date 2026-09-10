---
title: "Um modelo tentou prever quem vira jogador de ponta — e acertou 84% das vezes"
description: "Pesquisadores alemães criaram uma nota combinada e um ensemble de machine learning para estimar objetivamente o potencial de um jogador. O resultado: 83,9% de acurácia balanceada prevendo quem se torna referência."
pubDate: 2026-09-10T17:00:00Z
author: "Redação Data10"
category: "Scouting"
tags: ["Machine Learning", "Scouting", "Categorias de Base", "Inteligência Artificial"]
readingTime: 8
cover: "./covers/ia-prever-jogador-de-ponta.svg"
coverAlt: "Ilustração abstrata de cinco círculos convergindo para um círculo maior com uma estrela dentro, indicando uma nota combinada"
---

Avaliar se um jogador vai "dar certo" ainda é, na esmagadora maioria dos clubes do mundo, trabalho de olho clínico de olheiro — observação repetida, experiência acumulada, intuição. Um estudo publicado este ano no *Journal of Big Data*, por pesquisadores da Hochschule Aalen, na Alemanha, tentou formalizar essa avaliação em dois números: uma **nota combinada** de força atual do jogador, e a **probabilidade estimada** de ele se tornar um jogador de referência no futuro.

## O problema que o estudo ataca

Os autores, Marco Klaiber e M. Rössle, partem de uma constatação direta: jogadores são um dos ativos mais importantes do sucesso esportivo e financeiro de um clube, mas a avaliação do valor e do potencial de um atleta ainda depende, majoritariamente, de observação trabalhosa e experiência subjetiva de olheiros e dirigentes. A proposta do estudo é usar dado para tornar esse processo **mais objetivo e menos dependente de recurso humano escasso** — sem descartar a lógica por trás da avaliação tradicional, mas testando se ela pode ser formalizada.

## A nota combinada: dois pontos de vista, um número interpretável

O primeiro produto do estudo é uma **nota combinada e interpretável** de força do jogador, construída a partir de desempenho real observado — cruzando a perspectiva individual (o que o próprio jogador produz) com a perspectiva de equipe (o efeito da presença dele no desempenho coletivo), na mesma linhagem conceitual de métricas como plus-minus e xGPM que já existem na literatura de análise esportiva. O ponto que os autores fazem questão de destacar é a **interpretabilidade**: a nota não é uma caixa-preta — dá para entender por que um jogador recebeu determinada pontuação, o que importa na prática para que comissões técnicas confiem no número e o usem de verdade, em vez de tratá-lo como uma caixa-preta a ser ignorada. Testada contra o desempenho real dos jogadores num teste de retrodição fora da amostra (out-of-sample), a nota combinada alcançou um **RMSE de 0,486**, superando outras métricas comparáveis usadas como referência.

## O ensemble que aposta no futuro do jogador

A segunda parte do estudo vai além de avaliar o presente: um **ensemble de machine learning**, combinando cinco modelos diferentes (CatBoost, Random Forest, GradBoost, XGBoost e uma árvore de decisão), foi treinado para estimar a probabilidade de um jogador se tornar um "jogador de ponta" — uma referência dentro da própria posição — a partir da nota combinada e de dados de desempenho. O resultado: **83,9% de acurácia balanceada**, descrito pelos próprios autores como o primeiro trabalho do tipo a estabelecer esse tipo de referência (benchmark) para essa tarefa específica.

## Por que isso interessa além do artigo acadêmico

O recorte conecta diretamente com dois temas que já tratamos aqui: [scouting orientado por dado](/pt/blog/machine-learning-scouting/) e a [gestão de dados nas categorias de base](/pt/blog/categorias-de-base-gestao-de-dados/). A diferença deste estudo é o alvo específico — não é "esse jogador teve um bom desempenho nesta temporada", é "esse jogador tem características associadas a quem, historicamente, virou referência" — uma pergunta de natureza preditiva, não descritiva, que é exatamente o tipo de informação que mais interessa a um departamento de scouting decidindo em quem investir tempo e dinheiro de formação.

## O limite que vale registrar

83,9% de acurácia balanceada é um resultado forte, mas significa também que, em aproximadamente um a cada seis casos, o modelo erra a classificação — errando tanto para cima (aposta num jogador que não desenvolve) quanto para baixo (subestima alguém que desenvolve). E vale lembrar que o teste foi de **retrodição**: o modelo foi validado contra trajetórias de jogadores que já aconteceram, não acompanhado prospectivamente contra o futuro real de uma nova geração — a validação mais rigorosa, prospectiva, ainda está por vir. É a mesma ressalva que já repetimos aqui várias vezes: um modelo bom reduz a distância entre acerto e opinião, mas não elimina a incerteza que existe em prever o desenvolvimento de um ser humano ao longo de anos.

**Fontes:** [Journal of Big Data (Springer Nature) — Quantifying football player value: a novel combined rating and ML ensemble approach for predicting top players](https://link.springer.com/article/10.1186/s40537-026-01369-w), [Repositório da Hochschule Aalen — texto completo do artigo](https://opus-htw-aalen.bsz-bw.de/frontdoor/deliver/index/docId/9013/file/s40537-026-01369-w.pdf), [ResearchGate — Quantifying football player value](https://www.researchgate.net/publication/400725214_Quantifying_football_player_value_a_novel_combined_rating_and_ML_ensemble_approach_for_predicting_top_players).
