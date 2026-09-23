---
title: "O dado que discordou do técnico: o caso Salah"
description: "Em 2017, o modelo de dados do Liverpool insistiu em Salah — recém-fracassado no futebol inglês. Entenda a metodologia por trás dessa aposta contra o consenso."
pubDate: 2026-10-01T13:00:00Z
author: "Redação Data10"
category: "Scouting"
tags: ["Scouting", "Machine Learning", "Liverpool", "Expected Goals", "Estatística"]
readingTime: 10
cover: "./covers/liverpool-salah-possession-value-model.svg"
coverAlt: "Ilustração abstrata de uma trajetória de bola sobre o campo com valores numéricos crescentes marcados ao longo do percurso"
---

Em junho de 2017, o consenso entre torcedor e imprensa inglesa sobre Mohamed Salah era simples: jogador que já tinha tentado a Premier League e fracassado. Comprado pelo Chelsea em 2014 por £11 milhões, ele fez só 19 partidas em dois anos e meio, foi emprestado duas vezes e vendido em definitivo à Roma sem nunca convencer. O departamento de pesquisa do Liverpool, liderado pelo físico **Ian Graham**, discordava — com base num modelo que já vinha entregando resultado havia cinco anos, mesmo quando contrariava a opinião de quem estava de fora, e até a preferência inicial do próprio técnico.

## Quem construiu o modelo

Ian Graham entrou no Liverpool em julho de 2012, vindo de sete anos como chefe de pesquisa em futebol na Decision Technology — empresa que rodava projeto de análise para Premier League, Tottenham e casas de aposta. Com doutorado em física teórica pela Universidade de Cambridge, montou o primeiro departamento interno de análise de dados da Premier League: uma equipe de seis pessoas cobrindo pré e pós-jogo, ciência do esporte, categoria de base e, principalmente, recrutamento. Ficou no cargo até 2023, período que coincide com a fase de maior sucesso do clube desde os anos 1980 — Champions League e Mundial de Clubes em 2019, Premier League em 2020, FA Cup e Copa da Liga em 2022. Depois de sair, escreveu um livro inteiro sobre a metodologia: *How to Win the Premier League*.

## O "Possession Value Model": um valor só para toda ação da partida

O núcleo da metodologia é o [Possession Value Model](/pt/glossario/possession-value-model/) (modelo de valor de posse): cada toque na bola recebe um valor numérico baseado em quanto aquele toque específico aumentou ou diminuiu a probabilidade do time marcar gol. Um passe que sai do meio-campo e chega à entrada da área adversária, por exemplo, pode elevar a probabilidade de gol de 0,4% para 1,7% — um salto pequeno isoladamente, mas que, somado a milhares de ações ao longo de uma temporada, revela com precisão quem realmente aumenta a chance de vitória do time, não só quem "parece" bom jogando.

A vantagem prática é ter uma **moeda única** de avaliação, usável por olheiro, analista e técnico ao mesmo tempo, para comparar qualquer jogador em qualquer posição. E o modelo produz leitura contraintuitiva com frequência: um jogador com taxa de acerto de passe mais baixa pode valer mais que um "passador seguro", se os passes que ele completa forem ações de risco alto que avançam a bola para zona perigosa — exatamente o tipo de jogador que estatística de acerto bruto de passe penaliza injustamente. O modelo ainda inclui camada extra de refinamento, como perfil diferenciado para atacante de referência versus atacante mais associativo, e um ajuste de "tarifa" pela força relativa de cada liga, para comparar desempenho entre campeonatos de nível diferente.

## O que o modelo via em Salah que o resto do futebol não via

Na Roma, depois do fracasso no Chelsea, Salah teve uma temporada 2016/17 muito boa — 15 gols e 11 assistências em 31 partidas, com a Roma terminando em segundo lugar no Campeonato Italiano. Mas fora do radar de quem olhava só resultado bruto, o modelo do Liverpool detectava um perfil de movimentação sem bola e geração de chance (o mesmo tipo de sinal que hoje explicamos aqui como [xG](/pt/glossario/xg/) e [xT](/pt/blog/expected-threat-xt/)) consistentemente subestimado pela cobertura de olheiro tradicional — que ainda carregava a marca do fracasso dele em Stamford Bridge três anos antes. É o tipo exato de viés que um modelo estatístico agregado corrige: julgamento humano tende a pesar demais um resultado recente e vívido (a passagem ruim no Chelsea) em vez do padrão estatístico mais amplo dos anos seguintes.

## A resistência antes da decisão

O caso ficou conhecido em parte porque não foi consenso interno fácil: a primeira preferência de Jürgen Klopp para reforçar o ataque em 2017 era o alemão Julian Brandt, não Salah. A diretoria de pesquisa defendeu a aposta baseada no modelo, e o clube seguiu em frente — uma proposta inicial de £28 milhões foi recusada pela Roma em junho, mas o Liverpool insistiu e fechou a compra por cerca de **£34,3 milhões** (o valor final, com adicionais por desempenho, foi reportado de forma um pouco diferente entre veículos, mas girou nessa faixa). Uma ironia à parte: o Chelsea, que vendera Salah à Roma por £12 milhões, ainda tinha uma cláusula de repasse sobre revenda futura — e recebeu só £2,7 milhões extras com a venda ao Liverpool, mais que dobrando o lucro que já tinha feito na venda original, mas uma fração pequena perto do valor que o jogador de fato representava.

## O resultado, e por que isso importa mais do que o resultado em si

Salah não só se firmou: na primeira temporada, quebrou o recorde de gols em uma edição de 38 jogos da Premier League (recorde que só seria superado por Erling Haaland cinco anos depois). Mas o ponto central para quem lê sobre ciência de dados no futebol não é "o Liverpool acertou uma contratação" — times acertam e erram contratação o tempo todo, com ou sem dado. O ponto é que existe um **registro público, com metodologia explicada pelo próprio responsável**, mostrando o modelo produzindo uma leitura específica, contrária ao consenso de mercado e à preferência inicial do técnico, antes do resultado acontecer — não uma reconstrução feita depois, quando já se sabia que Salah daria certo.

**Fontes:** [Sky Sports — Liverpool complete £34.3m signing of Mohamed Salah on five-year deal](https://www.skysports.com/football/news/11669/10924233/liverpool-complete-signing-of-mohamed-salah-from-roma-on-five-year-deal), [Sky Sports — Liverpool's former director of research Ian Graham explains how data helped the Reds win the Premier League title](https://www.skysports.com/football/news/11669/13200552/liverpool-s-former-director-of-research-ian-graham-explains-how-data-helped-the-reds-win-the-premier-league-title), [This Is Anfield — What does Ian Graham, Liverpool's departing director of research, do?](https://www.thisisanfield.com/2022/11/what-does-ian-graham-liverpools-departing-director-of-research-do/), [The42 — Arguments, compromise and the stress of chasing City: how the data revolution changed Liverpool](https://www.the42.ie/ian-graham-liverpool-6491974-Sep2024/), [Pride of London — Mohamed Salah's transfer shows the value of Chelsea's sell-on clauses](https://theprideoflondon.com/2017/06/21/mohamed-salah-transfer-profit/), [Goodreads — How to Win the Premier League, de Ian Graham](https://www.goodreads.com/book/show/218356861).
