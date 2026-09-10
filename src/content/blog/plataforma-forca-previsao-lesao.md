---
title: "Plataformas de força: o terceiro eixo de dado na prevenção de lesão"
description: "Um estudo com 126 jogadores e 518 testes de força ao longo de uma temporada treinou um modelo de risco de lesão em três níveis. Entenda o que uma plataforma de força mede e por que isso é diferente de GPS e sono."
pubDate: 2026-09-10T14:00:00Z
author: "Redação Data10"
category: "Estatística Avançada"
tags: ["Prevenção de Lesões", "Machine Learning", "Wearables", "ACWR", "Biomecânica"]
readingTime: 8
cover: "./covers/plataforma-forca-previsao-lesao.svg"
coverAlt: "Ilustração abstrata de duas plataformas de força com vetores de força de reação do solo apontando para cima"
---

Já mapeamos dois lados da equação de prevenção de lesão: [carga externa via GPS](/pt/blog/gps-wearables-futebol-brasileiro-lesoes/) e [recuperação via qualidade de sono](/pt/blog/sono-dado-prevencao-lesao/). Um estudo publicado há dois dias, dia 8 de setembro, acrescenta um terceiro eixo, diferente dos outros dois: não mede quanto o atleta se moveu, nem quão bem ele descansou — mede a **capacidade neuromuscular bruta** do corpo em testes padronizados, usando plataformas de força.

## O que uma plataforma de força mede, de fato

Uma plataforma de força é um par de placas instrumentadas que registram, com precisão, a força de reação do solo — a força que o corpo do atleta exerce contra o chão, e que o chão devolve, a cada salto, aterrissagem ou contração muscular. Diferente do GPS (que rastreia posição e velocidade no espaço) ou da actigrafia usada para medir sono (que rastreia ciclos de atividade e repouso), a plataforma de força capta produção de força, potência, reatividade e assimetria entre os dois lados do corpo — em testes curtos e controlados, não durante o jogo ou o treino em si.

## O estudo: uma temporada inteira em números

Cento e vinte e seis jogadores de um clube profissional da Costa Rica, distribuídos em cinco categorias competitivas, passaram por **518 avaliações em plataforma de força dupla** (do sistema VALD ForceDecks) ao longo de 20 meses, usando quatro protocolos padronizados: **Nordic Hamstring** (força excêntrica dos isquiotibiais, ligada a lesão muscular na parte posterior da coxa), **isometric mid-thigh pull** (força isométrica de puxada, um proxy de força geral do corpo), **isometric adductor squeeze** (força dos adutores, ligada a lesão na virilha) e **countermovement jump** (salto vertical com contramovimento, usado para medir potência de membros inferiores e assimetria entre pernas). Juntos, os quatro protocolos geraram **21 variáveis** por avaliação.

Em paralelo, um sistema institucional de vigilância de lesões registrou **262 eventos com afastamento** ao longo do mesmo período, dos quais **53 jogadores com avaliação de plataforma de força feita antes da lesão** formaram a classe positiva do modelo (42,1% da amostra usada) — ou seja, o objetivo era prever, a partir do teste de força, quem estava mais perto de se lesionar.

## O modelo e o que ele realmente entrega

Os pesquisadores treinaram um modelo **Random Forest** (500 árvores, profundidade máxima 4), validado com validação cruzada estratificada em 5 partições, alcançando um **AUC-ROC médio de 0,683 (± 0,050)**. Vale traduzir esse número: numa escala em que 0,5 equivale a um chute aleatório e 1,0 a uma previsão perfeita, 0,68 é uma capacidade discriminativa **moderada** — claramente melhor que o acaso, mas longe de ser um oráculo. A partir desse modelo, os autores derivaram limiares (via análise ROC) para classificar cada jogador em três níveis de risco, pensados para apoiar decisão da comissão técnica, não para substituí-la.

## Por que isso importa mesmo sendo "só" moderado

Um AUC de 0,68 pode soar decepcionante à primeira vista, mas é exatamente o tipo de resultado honesto que esperamos de um problema difícil — prever lesão musculoesquelética a partir de um número limitado de testes físicos pontuais, sem incorporar carga de jogo, sono ou histórico prévio de lesão, é um problema genuinamente difícil. O valor do estudo não é anunciar uma bola de cristal, é mostrar que dá para transformar quatro testes físicos padronizados — coisas que fisioterapeutas de clube já fazem, mas historicamente sem um modelo estatístico por trás — numa classificação objetiva de risco, com desempenho mensurável e reportado com honestidade sobre os próprios limites.

## O quadro fica mais completo

Colocando os três estudos lado a lado — o [ACWR e o GPS](/pt/blog/gps-wearables-futebol-brasileiro-lesoes/) medindo carga externa, o [sono](/pt/blog/sono-dado-prevencao-lesao/) medindo recuperação, e agora a plataforma de força medindo capacidade neuromuscular — fica claro que "prevenção de lesão orientada por dado" não é uma métrica única, é um conjunto de eixos complementares, cada um capturando uma fatia diferente do problema, e nenhum deles suficiente sozinho.

**Fontes:** [MDPI — Predicting Musculoskeletal Injury Risk in Professional Football Using a Supervised Machine Learning Approach Based on Full-Season Multi-Protocol Neuromuscular Assessments](https://www.mdpi.com/2306-5729/11/9/231), [Science for Sport — ForceDecks: A Dual Force Plate System by VALD](https://www.scienceforsport.com/forcedecks-dual-force-plate-system-by-vald/), [VALD Health — ForceDecks](https://valdhealth.com/products/forcedecks).
