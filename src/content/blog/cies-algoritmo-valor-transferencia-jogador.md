---
title: "Como o CIES calcula o valor de um jogador"
description: "O CIES Football Observatory roda um modelo estatístico, sem rumor nem cláusula, com correlação acima de 75% com o preço real pago. Veja como funciona."
pubDate: 2026-10-08T13:00:00Z
author: "Redação Data10"
category: "Estatística Avançada"
tags: ["Estatística Avançada", "Mercado da Bola", "CIES", "Scouting"]
readingTime: 9
cover: "./covers/cies-algoritmo-valor-transferencia-jogador.svg"
coverAlt: "Balança estilizada comparando um ícone de jogador com uma pilha de moedas, com selo de categoria Estatística Avançada"
---

Toda janela de transferência, aparece um número — "valor de mercado estimado em € 85 milhões" — como se fosse fato objetivo. No [post sobre o recorde de gasto da Premier League](/pt/blog/mercado-europeu-recorde-dados-precos/), levantamos a pergunta sem responder de verdade: esses modelos de valorização conseguem acompanhar a velocidade do mercado, ou o preço pago já descolou do que o dado projeta? Pra responder isso direito, primeiro precisa explicar como um desses números é calculado — e, como veremos, nem todo "valor de mercado" citado por aí vem do mesmo tipo de modelo.

## Quem é o CIES, e o que ele não usa

O **CIES Football Observatory** é um centro de pesquisa ligado ao Centro Internacional de Estudos do Esporte (CIES), em Neuchâtel, na Suíça, dirigido por **Raffaele Poli**. Desde 2014, o observatório publica uma calculadora de valor de transferência construída como **modelo estatístico (econométrico)** — não um painel de opinião, nem um agregado de rumor de mercado. A própria equipe é explícita sobre o que fica de fora: nenhum dado subjetivo entra na conta, rumor de transferência não tem lugar na abordagem, e cláusula de rescisão com valor fixo também é excluída do cálculo — porque esses três fatores refletem expectativa e negociação, não desempenho medido.

## As variáveis que entram na conta

O modelo cruza características do jogador com características dos clubes envolvidos:

- **Do jogador**: idade, tempo de contrato restante, posição, desempenho em campo (estatística de jogo dos últimos 1.000 minutos jogados, via dado da OptaPro) e experiência em seleção.
- **Do clube vendedor e do clube mais provável de comprar**: o nível de cada clube, calculado a partir de resultado obtido e força da liga em que atua — e a força da liga, por sua vez, calculada a partir do desempenho internacional dos clubes que a representam.
- **Do momento**: uma variável de inflação, que ajusta o valor estimado para refletir a evolução geral de preço do mercado ao longo do tempo, inclusive em ambiente de forte alta como o atual.

O modelo original foi treinado com cerca de 1.500 transferências com pagamento de taxa nos cinco anos anteriores ao lançamento, em clubes das cinco grandes ligas europeias, e é **reestimado depois de cada janela de transferência** — ou seja, não é um modelo estático calibrado uma vez e esquecido.

## Qual é a precisão real

Em entrevista, Poli afirmou que a correlação média entre o preço estimado pelo modelo e o preço efetivamente pago fica **acima de 75%**, com base numa amostra de cerca de 5 mil transferências entre 2011 e 2018. Vale uma ressalva técnica, pra não confundir leitor que já viu outro número: no lançamento da calculadora, em 2014, o CIES divulgou um coeficiente de determinação (r²) de 87% — métrica estatisticamente diferente de correlação simples, então os dois números não são diretamente comparáveis, mesmo apontando na mesma direção de alta precisão.

Um detalhe que muda a leitura do resultado publicado: o valor que o CIES divulga **não é um preço universal** — é a estimativa de quanto custaria para o clube com maior probabilidade de contratar aquele jogador, dadas as características dele. Avaliação específica por clube comprador diferente fica disponível só via consultoria paga, não na ferramenta pública.

## O uso institucional, com uma ressalva

A FIFA citou o método do CIES na reforma do sistema de transferência de 2018, e Poli afirma que o modelo foi validado pelo Tribunal Arbitral do Esporte (TAS) anos atrás — mas essa validação específica aparece só na fala do próprio diretor do observatório nas fontes que apuramos, sem confirmação independente de um documento do TAS. Tratamos como informação a verificar, não como fato estabelecido.

## Dois exemplos de 2026, pra ver o modelo funcionando

Em levantamento de março de 2026 sobre jovens de até 23 anos fora dos dez clubes mais poderosos da Europa, o modelo do CIES colocou **Kenan Yıldız** na liderança, com valor estimado em até **€ 133 milhões**. Em outro relatório do mesmo ano, o ponta **Yan Diomandé** (RB Leipzig) apareceu como o jogador com maior projeção de alta até junho — de € 45,7 milhões estimados para até € 85,8 milhões, com base na trajetória de desempenho prevista. São projeções, não preço fechado: o teste real de precisão só acontece quando (e se) a transferência de fato se concretiza pelo valor citado.

## A distinção que vale corrigir

No post sobre o recorde de gasto da Premier League, tratamos "algoritmo do Transfermarkt" e "modelo de valorização orientado por dado" como coisas próximas. Vale a correção, com a mesma transparência que tentamos manter aqui: são abordagens estruturalmente diferentes. O CIES roda modelo estatístico fechado, sem insumo humano subjetivo. O Transfermarkt, por outro lado, é majoritariamente **colaborativo** — construído por uma comunidade de usuários que propõe e vota valor, moderada por um grupo menor de avaliadores mais experientes —, o que o torna mais sensível a rumor, sentimento de torcida e percepção de momento do jogador do que o modelo do CIES declara explicitamente excluir. Nenhum dos dois é "errado": são instrumentos diferentes, medindo coisas parecidas por caminhos opostos — um fechado em dado observável, o outro aberto à leitura coletiva do mercado.

**Fontes:** [Diário de Notícias — FIFA quer fixar preço de futebolista através de um algoritmo](https://www.dn.pt/desportos/interior/fifa-quer-fixar-preco-de-futebolistas-atraves-de-um-algoritmo-9891792.html), [CIES Football Observatory — lançamento da calculadora de valor de transferência](https://www.cies.ch/en/cies/news/news/article/cies-football-observatory-launches-groundbreaking-player-transfer-value-calculator/), [Inside World Football — CIES crunches its data to launch new player value calculator](https://insideworldfootball.com/?p=14975), [CIES Football Observatory — relatório sobre talentos U23 fora dos dez grandes clubes](https://www.insideworldfootball.com/2026/03/26/cies-football-observatory-details-lesser-known-u23-talents/), [CIES Football Observatory — Rising values, highest expected increases](https://football-observatory.com/Rising-values-highest-expected-increases-3618).
