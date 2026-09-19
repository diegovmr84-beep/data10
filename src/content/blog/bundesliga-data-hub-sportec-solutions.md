---
title: "700 milhões de pontos de dado e quase 10 anos de obra: dentro do Data Hub da Bundesliga"
description: "A CBF fechou parceria de 2 anos com o Google. O México acabou de anunciar a Sportian. A Bundesliga já percorreu esse caminho há quase uma década — e hoje distribui dado oficial para os 36 clubes e roda 16 métricas de IA ao vivo em transmissão. Veja onde esse tipo de investimento pode chegar."
pubDate: 2026-09-24T13:00:00Z
author: "Redação Data10"
category: "Tecnologia e Dados"
tags: ["Bundesliga", "DFL", "Gestão de Dados", "Machine Learning", "Win Probability"]
readingTime: 10
cover: "./covers/bundesliga-data-hub-sportec-solutions.svg"
coverAlt: "Ilustração abstrata de um hub central de dados distribuindo feeds para múltiplos ícones de clube e de transmissão"
---

Já mostramos aqui duas federações tentando resolver o mesmo problema estrutural — dado fragmentado entre clube e seleção — com movimentos recentes: a [parceria de 2 anos da CBF com o Google](/pt/blog/cbf-google-gemini-dados-selecoes/) e a chegada da [Sportian Performance à Federação Mexicana](/pt/blog/sportian-federacao-mexicana-futebol-ia/). Vale olhar para onde esse tipo de investimento pode chegar quando amadurece: a liga alemã começou a construir a própria infraestrutura de dado em **2016** — quase 10 anos atrás — e hoje ela sustenta desde a análise de desempenho dos clubes até 16 métricas de inteligência artificial exibidas ao vivo na transmissão para o torcedor comum.

## Uma joint venture, não um contrato de fornecedor

Em vez de contratar um fornecedor externo por prazo fixo, a DFL (a liga alemã) optou por criar, junto com a empresa de tecnologia esportiva Deltatre, uma joint venture própria: a **Sportec Solutions GmbH (STS)**, fundada em 2016 como "centro de excelência" para dado de partida e tecnologia esportiva. Desde a temporada 2017/18, a STS tem responsabilidade operacional pela coleta, armazenamento e distribuição de todo o dado oficial da Bundesliga e da Bundesliga 2 — e mantém o banco de dados histórico oficial completo desde a primeira temporada da Bundesliga, em **1963/64**. A diferença para um contrato de fornecedor é relevante: a liga não aluga acesso a uma ferramenta, ela é dona de parte da infraestrutura — e hoje a STS já oferece esse serviço globalmente, para outros esportes além do futebol alemão.

## O Data Hub: um cano só, não um cano por clube

A partir da STS nasceu o **DFL Data Hub**, que distribui um fluxo constante de dado oficial de cada partida — separado em feeds diferentes para os departamentos de performance e de mídia de cada um dos 36 clubes da Bundesliga e Bundesliga 2, além de parceiros de transmissão. Parte desses feeds é disponibilizada de graça para os departamentos de comunicação dos clubes. É uma escolha estrutural que evita o problema mais comum em ligas onde cada clube negocia sua própria solução de dado isoladamente: times menores, com orçamento de tecnologia menor, ficam sempre atrás. Na Bundesliga, a infraestrutura básica de dado é compartilhada — a diferença de investimento aparece na camada de análise em cima do dado, não no acesso a ele.

## As 16 métricas de IA que já rodam ao vivo

Desde 2020 a DFL tem a AWS como parceira de tecnologia — parceria expandida em 2024, quando a AWS passou a "provedora oficial de IA generativa" da liga. O resultado mais visível para quem assiste aos jogos é o programa **Bundesliga Match Facts**: hoje são **16 métricas** geradas por modelos de machine learning e exibidas ao vivo na transmissão, incluindo [xGoals](/pt/glossario/xg/), **Win Probability**, Skill, Pressure Handling, Shot Speed, Keeper Efficiency, Set Piece Threat e a mais recente, Match Momentum (adicionada em setembro de 2025). O Win Probability, por exemplo, já explicamos em profundidade [aqui](/pt/blog/modelos-preditivos-win-probability/) — a versão da Bundesliga combina diferença de gols, tempo restante e outras Match Facts já calculadas (como o próprio xGoals e o Skill) para atualizar a probabilidade de vitória a cada lance relevante do jogo. O ponto central: esses modelos não ficam restritos ao departamento de análise do clube, eles vão direto pro telespectador em tempo real — a métrica avançada virou parte da experiência de assistir ao jogo, não só ferramenta de bastidor.

## O efeito prático nas divisões menores

O caso mais concreto de democratização de acesso está na Bundesliga 2, a segunda divisão alemã. Com a automação construída sobre essa infraestrutura, todas as **306 partidas** da temporada da Bundesliga 2 passaram a ter gráficos de transmissão em inglês (escalação, placar, Match Facts) gerados automaticamente — algo que antes só valia a pena produzir manualmente para os jogos de maior audiência. O resultado: o número de transmissões internacionais da Bundesliga 2 **mais que dobrou**, e o alcance **quase quadruplicou**. É a prova mais direta de que compartilhar a infraestrutura de dado entre toda a liga, em vez de deixar cada clube resolver sozinho, também é uma estratégia de receita — mais audiência internacional para um produto que antes não tinha orçamento de produção próprio.

## O que vem em 2026: de dado para clube, para dado para torcedor

A camada mais recente do ecossistema é voltada direto para o torcedor: o **Captain**, assistente de IA construído com a AWS e lançado no aplicativo oficial da Bundesliga em 2026, responde perguntas em linguagem natural sobre estatística ao vivo, dado histórico, análise tática e traz vídeo relevante sob demanda. É a mesma lógica de interface conversacional que a CBF adotou com o Gemini — só que ali voltada para a comissão técnica das seleções, aqui voltada direto para quem está assistindo ao jogo em casa.

## Por que isso interessa ao Brasil

O contraste entre a maturidade da Bundesliga e o estágio inicial da CBF e da federação mexicana não é sobre quem é "melhor" hoje — é sobre trajetória. Uma parceria de dois anos, como a da CBF com o Google, é o tipo de primeiro passo que, se sustentado e ampliado ao longo de uma década, pode evoluir para algo parecido com o que a Alemanha construiu: infraestrutura compartilhada entre toda a entidade, não só ferramenta isolada num departamento, com resultado que aparece tanto na análise interna quanto na receita de audiência internacional. Vale acompanhar se as iniciativas mais recentes na América do Sul seguem esse mesmo caminho de longo prazo, ou permanecem como projeto pontual.

**Fontes:** [DFL — Sportec Solutions AG](https://www.dfl.de/en/about/subsidiaries/sportec-solutions/), [DFL — The new Bundesliga Data Hub](https://www.dfl.de/en/innovation/the-new-bundesliga-data-hub-leading-edge-digital-data-delivery/), [SportsPro — DFL and Deltatre take Sportec Solutions' tools to international markets](https://www.sportspro.com/news/deltatre-dfl-bundesliga-sportec-solutions-data-technology-germany/), [Bundesliga — DFL and Amazon Web Services expand partnership](https://www.bundesliga.com/en/bundesliga/news/dfl-amazon-web-services-expand-partnership-to-further-drive-innovation-26653), [Bundesliga — Bundesliga Match Facts powered by AWS: Match Momentum expands the data offering](https://www.bundesliga.com/en/bundesliga/news/bundesliga-match-facts-aws-match-momentum-34052), [AWS — Bundesliga Match Fact Win Probability](https://aws.amazon.com/blogs/machine-learning/bundesliga-match-fact-win-probability-quantifying-the-effect-of-in-game-events-on-winning-chances-using-machine-learning-on-aws/), [DFL — Smart companion for fans in the Bundesliga app: New AI feature "Captain"](https://www.dfl.de/en/innovation/smart-companion-for-fans-in-the-bundesliga-app-new-ai-feature-captain-provides-video-content-data-and-historical-knowledge-on-individual-request/).
