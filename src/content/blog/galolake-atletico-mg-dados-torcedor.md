---
title: "Overbooking de estádio: como o Atlético-MG faturou R$ 15 milhões unificando dado de torcedor"
description: "O GaloLake integra bilheteria, catraca, pagamento, wi-fi e loja online em uma base só — 550 tabelas, 1,8 bilhão de registros. Boa parte do retorno financeiro não veio de um algoritmo chamativo, veio de aplicar lógica de overbooking de companhia aérea a ingresso de estádio."
pubDate: 2026-09-29T13:00:00Z
author: "Redação Data10"
category: "Gestão Esportiva"
tags: ["Atlético-MG", "Gestão de Dados", "Inteligência Artificial", "Experiência do Torcedor", "AWS"]
readingTime: 9
cover: "./covers/galolake-atletico-mg-dados-torcedor.svg"
coverAlt: "Ilustração abstrata de múltiplas fontes de dado (bilheteria, catraca, loja) convergindo para um lago de dados central, com um estádio ao fundo"
---

Já mostramos aqui como a Mantis-AI mede exposição de patrocínio com [visão computacional](/pt/blog/var-das-marcas-mensuracao-patrocinio-dados/) e como a Bundesliga levou quase [uma década construindo o próprio Data Hub](/pt/blog/bundesliga-data-hub-sportec-solutions/). O Atlético-MG está fazendo o equivalente em escala de clube brasileiro — e o resultado financeiro documentado (mais de **R$ 15 milhões**) veio menos de inteligência artificial chamativa e mais de uma decisão bem mais simples: parar de tratar bilheteria, catraca, loja online e programa de fidelidade como sistemas separados.

## O que é o GaloLake

O **GaloLake** é a base central de inteligência de dados do clube, construída em parceria com a Guidance (parceira AWS especializada em dado e IA) sobre infraestrutura da própria AWS. Antes dele, informação de bilheteria, do programa de fidelidade Galo Na Veia, das catracas da Arena MRV, de pagamento, alimentação, loja virtual, wi-fi e canais digitais vivia espalhada em sistemas que não conversavam entre si — o mesmo problema de fragmentação que já vimos em outros contextos aqui no blog. Hoje a base integra mais de **550 tabelas** e cerca de **1,8 bilhão de registros**, permitindo consolidar a jornada completa de um torcedor em poucos segundos, não em dias de trabalho manual cruzando planilha.

## O mecanismo mais interessante: overbooking de estádio

O uso mais criativo do dado não foi um modelo sofisticado de previsão de resultado de jogo — foi aplicar ao estádio a mesma lógica que companhias aéreas usam há décadas para lidar com assento vazio. [Overbooking preditivo](/pt/glossario/overbooking-preditivo/) funciona assim: o histórico de comportamento de cada segmento de torcedor permite estimar, com razoável precisão, a taxa de não comparecimento esperada para determinado jogo e determinado setor do estádio. Com essa taxa calculada, o clube consegue vender ingresso além da capacidade nominal daquele setor especificamente para as vagas que, com alta probabilidade, ficariam vazias mesmo assim — sem lotar além do seguro, porque o modelo já desconta o não comparecimento esperado. Essa estratégia sozinha já gerou mais de **R$ 3 milhões**, ocupando assento que de outra forma simplesmente ficaria vazio no dia do jogo. Somado a isso, o clube já administra mais de **R$ 54 milhões** em receita de bilheteria com apoio de modelo preditivo de demanda.

## Do dado bruto para a decisão de qualquer área do clube

Por trás dessas duas aplicações financeiras, a infraestrutura de IA cresceu: o clube já tem **cinco modelos em produção**, rodando sobre Amazon Bedrock AgentCore (ambiente gerenciado para agentes de IA generativa) e Amazon SageMaker AI (plataforma completa para ciclo de vida de modelo de machine learning). Em desenvolvimento está o **"Pergunte ao Dado do Galo"**, uma interface conversacional que vai permitir a qualquer área do clube consultar a base em linguagem natural — a mesma lógica de interface que já vimos na [parceria da CBF com o Gemini](/pt/blog/cbf-google-gemini-dados-selecoes/) e no assistente **Captain** do [Data Hub da Bundesliga](/pt/blog/bundesliga-data-hub-sportec-solutions/), só que aqui pensado para uso interno do departamento comercial, de marketing e de operação de estádio, não para comissão técnica ou torcedor final.

## O ativo por trás de tudo: escala de base de torcedor

Nenhuma dessas aplicações funciona sem volume real de dado para treinar e validar os modelos — e aqui o Atlético-MG tem argumento de escala: mais de **9 milhões de torcedores** e **100 mil sócios**, segundo o próprio clube. É esse volume de interação recorrente — compra de ingresso, entrada por catraca, consumo dentro do estádio, engajamento digital — que torna viável treinar um modelo de não comparecimento com precisão razoável. Um clube com fração desse volume de dado histórico teria dificuldade em replicar o mesmo resultado com a mesma confiança estatística.

## A mesma ressalva de sempre

Vale registrar que os números aqui vêm de um material publicado em conjunto pelo clube e pela AWS — não é auditoria independente, é case de sucesso comercial das duas partes envolvidas. Isso não invalida os números, mas pede a mesma cautela que aplicamos a qualquer resultado divulgado por quem também está vendendo a solução. O que fica como lição, independente do valor exato, é o padrão que já vimos se repetir: o retorno financeiro real não veio do algoritmo mais chamativo, veio de primeiro consolidar o dado disperso — e só depois construir modelo em cima dele.

**Fontes:** [AWS Brasil — Clube Atlético Mineiro: Como o Galo usou IA/ML para transformar dados em mais de R$ 15 milhões com a AWS](https://aws.amazon.com/pt/blogs/aws-brasil/clube-atletico-mineiro-como-o-galo-usou-ia-ml-para-transformar-dados-em-mais-de-r-15-milhoes-com-a-aws/), [Clube Atlético Mineiro — Galo utiliza dados para entender comportamento do torcedor](https://atletico.com.br/galo-utiliza-dados-para-entender-comportamento-do-torcedor/), [BH 24 Horas — Clube Atlético Mineiro utiliza análise de dados para compreender perfil e comportamento de torcedores na Arena MRV](https://bh24horas.com.br/esportes/atletico/clube-atletico-mineiro-utiliza-analise-de-dados-para-compreender-perfil-e-comportamento-de-torcedores-na-arena-mrv/), [No Ataque — Em relatório inovador, Atlético informa que 11 mil torcedores foram pela 1ª vez à Arena MRV](https://noataque.com.br/futebol/time/atletico-mg/noticia/2026/09/21/em-relatorio-inovador-atletico-informa-que-11-mil-torcedores-foram-pela-1a-vez-a-arena-mrv/).
