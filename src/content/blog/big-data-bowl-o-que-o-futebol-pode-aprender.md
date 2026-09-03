---
title: "O que o futebol pode aprender com o Big Data Bowl da NFL"
description: "A NFL tem uma competição aberta de ciência de dados que já colocou estudantes para trabalhar em times da liga. O futebol tem um ecossistema de dados abertos mais rico do que parece — mas falta algo parecido com isso, especialmente no Brasil."
pubDate: 2026-09-03
author: "Redação Data10"
category: "Tecnologia e Dados"
tags: ["Big Data Bowl", "NFL", "Dados Abertos", "Carreira em Dados", "CBF"]
readingTime: 8
cover: "./covers/big-data-bowl-futebol.svg"
coverAlt: "Ilustração abstrata de uma bola de futebol americano e uma bola de futebol conectadas por um fluxo de dados"
---

Todo início de temporada da NFL vem acompanhado de uma notícia recorrente: alguém que nunca trabalhou num departamento de análise de um time profissional vence uma competição aberta de ciência de dados e, meses depois, aparece contratado por uma franquia. Esse "alguém" já foi estudante de graduação, cientista de dados de outra indústria, ou simplesmente alguém curioso o suficiente para baixar uma planilha gigante de dados de rastreamento e tentar algo novo. Isso tem nome: **Big Data Bowl**. E vale perguntar por que o futebol — apesar de ter um ecossistema de dados abertos surpreendentemente maduro — ainda não tem nada parecido em escala real.

## O que é o Big Data Bowl

O Big Data Bowl é uma competição anual da NFL, hospedada no Kaggle, que já vai na oitava edição. O formato é simples de descrever e difícil de executar bem: a liga libera um conjunto real de dados de rastreamento de jogadas (posição de cada jogador, quadro a quadro) e lança um desafio analítico específico. Em 2026, o desafio pedia para prever o movimento dos jogadores **antes mesmo de a bola ser lançada** — uma tentativa de antecipar decisões táticas a partir de padrões espaciais, não de resultado já consumado.

Os números do formato ajudam a entender por que ele funciona como porta de entrada: **US$ 100 mil em prêmios**, dois formatos de inscrição (uma trilha aberta a qualquer pessoa e uma trilha exclusiva para estudantes de graduação e pós-graduação), e um prêmio que não é só dinheiro — os finalistas apresentam o trabalho pessoalmente para analistas dos 32 times da liga, no NFL Scouting Combine. O vencedor de 2026, um estudante da Rice University, construiu um modelo para avaliar a movimentação de defensores durante a bola no ar. E não é caso isolado: outro ex-participante do Big Data Bowl, também formado pela Rice, hoje trabalha como analista de dados de futebol americano em tempo integral para um time da liga. A competição não é só um exercício acadêmico — é, na prática, um funil de contratação.

## O futebol não está tão atrás quanto parece — mas falta o formato certo

Aqui a nossa opinião foge do senso comum. É fácil assumir que o futebol (soccer) está muito atrás da NFL em cultura de dados abertos, mas isso não é bem verdade. A **StatsBomb** mantém, há anos, um dos conjuntos de dados de eventos mais ricos e genuinamente gratuitos do esporte, cobrindo múltiplas competições, disponível publicamente para pesquisa. Em torno disso, cresceu uma comunidade real de ferramentas abertas — bibliotecas como `kloppy`, `socceraction`, `floodlight` e `statsbombpy` existem justamente porque há gente séria construindo infraestrutura de análise sem depender de contrato com clube.

O que falta não é dado aberto. É um **evento centralizador, recorrente e com pipeline direto de contratação**, no molde do Big Data Bowl. O exemplo mais próximo que o futebol já teve foi o **Bundesliga Data Shootout**, promovido pela DFL em parceria com a AWS: mais de 500 equipes competindo, com prêmios de até US$ 25 mil. Só que era uma edição única, focada especificamente em visão computacional para reconhecer eventos em vídeo (lances, passes, desarmes) — não um evento anual institucionalizado, e sem o mesmo tipo de vitrine direta para contratação que o Big Data Bowl oferece nos bastidores do Combine.

## O ponto cego do Brasil é ainda mais básico

Se olharmos para o Brasileirão especificamente, o problema é anterior ao formato de competição: é o **acesso ao dado bruto**. O site da CBF disponibiliza estatísticas desde 2012, mas sem opção de download direto para análise — quem quer trabalhar com esses números recorre a web scraping, projeto por projeto, sem um padrão único. A CBF Academy tem uma pós-graduação em inteligência artificial aplicada ao futebol, com hackathons vinculados ao curso — um passo real, mas que exige pagar uma pós-graduação para participar, o oposto do modelo aberto e gratuito que caracteriza tanto o Big Data Bowl quanto o próprio StatsBomb Open Data.

Na nossa leitura, isso é uma oportunidade perdida específica do futebol brasileiro: a CBF (ou uma liga, ou mesmo um clube grande com departamento de dados estruturado) poderia abrir um conjunto de dados de qualidade — mesmo que limitado a algumas temporadas — e lançar um desafio anual, gratuito, com prêmio e visibilidade real para quem vencer. O modelo já está testado em dois esportes diferentes (futebol americano e futebol alemão); falta vontade institucional de reproduzi-lo aqui, com o dado certo e um prêmio que valha a pena.

## O que fazer enquanto isso não existe

Para quem quer entrar na área de ciência de dados aplicada ao futebol no Brasil hoje, o caminho realista ainda passa pelo que já existe: começar pelo [StatsBomb Open Data](https://github.com/statsbomb/open-data) e pelas bibliotecas open-source do ecossistema, construir projetos próprios publicamente (GitHub, Kaggle, LinkedIn), e acompanhar iniciativas pontuais como a da CBF Academy. Não é o mesmo que ter uma porta de entrada institucionalizada e gratuita como o Big Data Bowl — mas é o material bruto necessário para quem quiser ser a pessoa que faz essa porta existir por aqui.

Para entender os fundamentos técnicos que sustentam esse tipo de análise — os mesmos que aparecem nos desafios do Big Data Bowl e do Bundesliga Data Shootout — veja nossos artigos sobre [visão computacional e tracking data](/pt/blog/visao-computacional-tracking-data/) e [machine learning no scouting](/pt/blog/machine-learning-scouting/).

**Fontes:** [NFL Football Operations — Big Data Bowl](https://operations.nfl.com/the-game/big-data-bowl/index.html), [Rice University News — aluno vence o Big Data Bowl 2026](https://news.rice.edu/news/2026/classroom-combine-champion-rice-student-wins-nfl-analytics-title), [DFL — Bundesliga Data Shootout](https://www.dfl.de/en/innovation/bundesliga-data-shootout-machine-learning-competition-on-football-data/), [StatsBomb Open Data (GitHub)](https://github.com/statsbomb/open-data), [CBF Academy — Pós-graduação em IA no futebol](https://cbfacademy.com.br/pos-graduacao-lato/pos-graduacao-em-inteligencia-artificial-no-futebol/).
