---
title: "70% do tempo em planilha: o problema de dado que a CBF tentou resolver com o Google"
description: "A CBF fechou parceria de dois anos com o Google para centralizar dado das seleções numa nuvem só, com o Gemini como interface conversacional. O ponto de partida não foi um algoritmo chique — foi o tempo perdido cruzando planilha manualmente."
pubDate: 2026-09-13T13:00:00Z
author: "Redação Data10"
category: "Gestão Esportiva"
tags: ["CBF", "Inteligência Artificial", "Seleção Brasileira", "Engenharia de Dados", "Categorias de Base"]
readingTime: 8
cover: "./covers/cbf-google-gemini-dados-selecoes.svg"
coverAlt: "Ilustração abstrata de documentos espalhados convergindo para uma nuvem central, com um balão de conversa ao lado"
---

Em 30 de março de 2026, a CBF anunciou uma parceria de patrocínio de **dois anos** com o Google, prevendo o uso do Google Cloud e do **Gemini** nas seleções brasileiras — masculina, feminina, e categorias de base do sub-15 ao sub-23. É tentador tratar isso como só mais um anúncio de "IA no futebol", mas vale entender o problema real que motivou o acordo, porque ele não tem nada de exótico: é o mesmo gargalo de engenharia de dado que qualquer organização de porte médio enfrenta.

## O problema, antes da solução

Segundo reportagens sobre o acordo, as comissões técnicas das seleções brasileiras chegavam a gastar **cerca de 70% do tempo** compilando planilhas com informação espalhada entre laudos médicos, estatísticas de desempenho e observações técnicas — antes mesmo de começar a analisar qualquer coisa. Não é um problema de falta de dado; é o problema mais comum e mais chato de resolver em qualquer operação de dado: informação relevante existe, mas está fragmentada em fontes diferentes, sem um lugar único que a reúna.

## O que o acordo realmente entrega

O núcleo técnico da parceria são duas peças que se complementam:

1. **Um repositório centralizado na nuvem** (Google Cloud), reunindo dado médico, físico, técnico e tático de todas as categorias num único ambiente — eliminando o trabalho manual de consolidação antes de jogos, treinos ou convocações.
2. **O Gemini como interface conversacional**: em vez de cruzar planilhas manualmente, treinadores e analistas podem consultar o sistema em linguagem natural, pedindo para identificar padrões, comparar desempenho físico ou cruzar histórico tático de um adversário específico.

O objetivo declarado é dar suporte mais rápido e estratégico às avaliações técnicas — identificar padrões, tendência física e comportamento tático antes de amistosos, convocações e competições oficiais.

## Por que isso não é a mesma coisa que o Football AI Pro da FIFA

Vale separar dois projetos que fica fácil confundir, porque nasceram na mesma janela de tempo, ambos de olho na Copa 2026: o **Football AI Pro**, da FIFA em parceria com a Lenovo, é uma ferramenta disponibilizada igualmente às 48 seleções do torneio, funcionando como uma camada de análise padronizada para todo mundo. Já a parceria CBF-Google é **infraestrutura própria da confederação brasileira**, contratada por dois anos — período que vai além da Copa do Mundo e cobre também a Copa Feminina de 2027 —, e alcança categorias de base que nunca vão disputar um Mundial adulto. É um investimento em capacidade de dado permanente, não um benefício pontual de torneio.

## A mesma lição que já vimos em clube pequeno

O detalhe mais interessante aqui, do ponto de vista de quem acompanha dado no esporte, é que o problema que motivou o acordo — dado espalhado, sem um lugar único que reúna scouting, performance e decisão — é exatamente o mesmo que descrevemos no post sobre o [Fokus, a ferramenta do Bodø/Glimt](/pt/blog/fokus-metodologia-bodo-glimt/): antes de qualquer algoritmo sofisticado, a barreira mais comum é organizacional, não técnica. A diferença é de escala — uma confederação nacional versus um clube norueguês de cidade pequena —, mas o diagnóstico é o mesmo: unificar o dado é o primeiro passo, e geralmente o mais valioso, antes de pensar em modelo preditivo chique por cima dele.

## O que falta saber

A CBF não divulgou valores do contrato, e não há, até o momento, avaliação pública independente de quanto tempo essa centralização de fato economizou nas comissões técnicas — o número de "70% do tempo em planilha" descreve o problema de origem, não (ainda) o resultado medido depois da solução. Vale acompanhar se a CBF ou o próprio Google divulgarem esse tipo de métrica de impacto no futuro.

**Fontes:** [MobileTime — Google leva Gemini e sua busca para a seleção brasileira](https://www.mobiletime.com.br/noticias/30/03/2026/google-selecao-brasil/), [IT Forum — Google e CBF usam IA para preparar o Brasil na Copa do Mundo](https://itforum.com.br/noticias/google-e-cbf-usam-ia-para-brasil-copa/), [Forbes Brasil — A estratégia de IA por trás do acordo entre CBF e Google](https://forbes.com.br/forbes-mkt/2026/04/a-estrategia-de-ia-por-tras-do-acordo-entre-cbf-e-google/), [Poder360 — CBF e Google assinam contrato para aplicar IA no futebol brasileiro](https://www.poder360.com.br/poder-sportsmkt/cbf-e-google-assinam-contrato-para-aplicar-ia-no-futebol-brasileiro/), [Google Blog Brasil — Google é o novo patrocinador oficial da Seleção Brasileira de Futebol](https://blog.google/intl/pt-br/novidades/google-e-o-novo-patrocinador-oficial-da-selecao-brasileira-de-futebol/).
