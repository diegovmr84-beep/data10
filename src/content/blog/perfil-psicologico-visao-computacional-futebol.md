---
title: "A câmera nunca pisca: como clubes estão medindo o psicológico do jogador em vídeo"
description: "Brighton usou um modelo de IA para analisar o perfil emocional de dois reforços antes de contratá-los — e viu o índice de coesão do elenco subir 14% depois. Entenda como a Inside Out Analytics, do pesquisador Geir Jordet, transforma gesto em dado."
pubDate: 2026-09-27T13:00:00Z
author: "Redação Data10"
category: "Ciência de Dados"
tags: ["Psicologia Esportiva", "Visão Computacional", "Scouting", "Machine Learning", "Premier League"]
readingTime: 10
cover: "./covers/perfil-psicologico-visao-computacional-futebol.svg"
coverAlt: "Ilustração abstrata de um rosto estilizado sendo decomposto em pontos de rastreamento de expressão sobre um campo de futebol"
---

Toda a camada de dado que já exploramos aqui — [tracking data](/pt/blog/visao-computacional-tracking-data/), [bioimpedância](/pt/blog/palmeiras-ava-bioimpedancia/), até [tecnologias ômicas](/pt/blog/socceromics-dado-molecular-futebol/) — mede o que o corpo do atleta faz ou produz. Uma categoria mais nova tenta medir outra coisa: o que o jogador **sente e como reage** sob pressão, só a partir do vídeo do jogo. E já existe um caso concreto de decisão de contratação tomada com base nisso, não só promessa de laboratório.

## A dupla por trás da ideia

A **Inside Out Analytics**, empresa norueguesa, nasceu da parceria entre **Yaw Ihle Amankwah**, ex-zagueiro, e **Geir Jordet**, professor da Norwegian School of Sport Sciences e um dos pesquisadores mais respeitados do mundo em decisão sob pressão no futebol. Jordet já analisou mais de 700 cobranças de pênalti de Copas do Mundo, Eurocopas e Champions League desde 1976, e é conhecido por um achado central da área: o comportamento do olhar de batedor e goleiro — quem evita contato visual, quem apressa a corrida até a bola — prediz resultado de cobrança com consistência. É essa bagagem de pesquisa sobre comportamento visível, mas normalmente ignorado, que a empresa aplicou a um problema mais amplo: o estado psicológico do jogador durante os 90 minutos inteiros, não só num pênalti.

## Como o sistema transforma gesto em número

A tecnologia combina múltiplas câmeras, redes de estimativa de pose (que mapeiam a posição do corpo quadro a quadro) e uma **ontologia de comportamento** customizada — uma espécie de dicionário próprio de microcomportamentos relevantes, construído especificamente para o contexto do futebol. O processo mistura aprendizado supervisionado (treinado sobre exemplos já rotulados) com clusterização (técnica que agrupa padrões semelhantes automaticamente, útil para descobrir microcomportamentos novos que ninguém tinha catalogado antes). O resultado já passa de **100 mil microcomportamentos** identificados e rotulados — um tapinha de consolo num companheiro, um tique de perna, um gesto de encorajamento — o que a empresa chama de "[vazamento não-verbal](/pt/glossario/vazamento-nao-verbal/)": sinais rápidos demais e sutis demais para um observador humano notar de forma consistente, mas que uma câmera que "nunca pisca" consegue captar quadro a quadro.

## O que isso vira em métrica prática

O produto final não é uma lista de gestos, é uma pontuação: uma métrica de **compostura sob pressão**, por exemplo, já consegue apontar zagueiros no top 5% do índice mesmo quando as estatísticas tradicionais desse jogador não chamam atenção — um sinal de liderança e regulação emocional que passaria despercebido em qualquer ficha técnica convencional. Times da Premier League já usam sistemas parecidos, detectando automaticamente mais de **180 microcomportamentos por partida**, entre sinais de frustração, postura de liderança latente e gestos de encorajamento a companheiro.

## O caso que sai do laboratório: Brighton

O exemplo mais concreto de adoção real veio do próprio Brighton, clube conhecido por decisão de contratação orientada a dado: o clube aplicou um modelo de análise emocional antes de fechar **duas contratações** na janela de 2025 — e registrou um aumento de **14% no índice de coesão** do elenco nas primeiras dez partidas depois da chegada dos reforços. É o primeiro caso documentado de decisão de contratação informada, ao menos em parte, por esse tipo de dado comportamental, não só por estatística de campo. O Bayern de Munique, sob Julian Nagelsmann, também já incorpora esse tipo de leitura nas escolhas de escalação — e Max Pelka, ex-psicólogo do próprio Bayern, hoje trabalhando no Brighton, resume bem o vácuo que essa tecnologia tenta preencher: diferente de outros departamentos do clube, a psicologia historicamente nunca teve métrica mensurável ligada de forma direta ao desempenho em campo.

## A ressalva que os próprios criadores fazem

Vale a mesma honestidade de sempre: os próprios praticantes reconhecem os limites. Um gesto interpretado pelo modelo como sinal negativo pode simplesmente refletir concentração intensa — e "moral de grupo" ou química de vestiário continuam sendo coisas que só julgamento humano experiente consegue interpretar direito, não um score automatizado. A tecnologia reduz um tipo de informação antes invisível a número comparável — não substitui o olho clínico de quem convive com o elenco todos os dias.

## Onde isso se encaixa no que já vimos aqui

É o mesmo movimento que já documentamos em outras frentes: uma dimensão do jogo que sempre existiu, mas nunca teve número — biotipo antes do [somatotipo](/pt/blog/somatotipo-scouting-biotipo/), risco de lesão antes do [ACWR](/pt/blog/acwr-carga-de-treino-prevencao-de-lesoes/), e agora estado psicológico antes desse tipo de perfil comportamental — sendo convertida em dado estruturado, comparável entre jogadores, e ligado a decisão real de clube. A diferença é que aqui a fonte de dado nunca foi física, sempre esteve só nos olhos de quem sabia observar.

**Fontes:** [Inside Out Analytics](https://www.insideoutanalytics.com/), [Neuron Expert — Revolutionizing Football Recruitment: Measuring Player Psychology Through On-Pitch Behavior](https://neuron.expert/news/its-a-new-world-the-analysts-using-ai-to-psychologically-profile-elite-players/12322/en/), [360 Scouting — AI psychological profiling transforms football scouting](https://360scouting.com/how-ai-is-reading-players-minds-through-video/), [aivancity — AI and Soccer: Using Behavioral Analysis to Help Teams](https://aivancity.ai/en/blog/lia-observe-ce-que-les-cameras-ne-voient-pas-le-profil-psychologique-des-joueurs/), [Norwegian School of Sport Sciences — Geir Jordet](https://www.nih.no/english/about/employees/geirj/), [Grant Wahl — The Interview: Geir Jordet](https://grantwahl.substack.com/p/the-interview-geir-jordet).
