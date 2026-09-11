---
title: "Como funciona o Fokus: o método do Bodø/Glimt, explicado para outros clubes"
description: "O Fokus nasceu como ferramenta interna do Bodø/Glimt e hoje é usado por mais de 50 clubes, de segunda divisão a times de Champions League. Detalhamos as três camadas do método — squad planning, ranking por IA e financeiro — para clubes que querem entender a lógica."
pubDate: 2026-09-11T13:00:00Z
author: "Redação Data10"
category: "Scouting"
tags: ["Bodø/Glimt", "Scouting", "Machine Learning", "Gestão de Clubes", "Categorias de Base"]
readingTime: 9
cover: "./covers/fokus-metodologia-bodo-glimt.svg"
coverAlt: "Ilustração abstrata de três nós conectados (lupa, grade, moeda) convergindo para um hub central com um ranking triangular"
---

No [post de ontem](/pt/blog/bodo-glimt-clube-dado-artico/), contamos a história do Bodø/Glimt e mencionamos que o clube construiu a própria ferramenta de scouting em vez de comprar uma pronta. Vale voltar nisso com mais profundidade, porque essa ferramenta — batizada **Fokus** — deixou de ser um projeto interno há tempos: nasceu dentro do clube em 2022, e hoje é usada por **mais de 50 clubes**, de times de segunda divisão dinamarquesa a equipes de Champions League. Isso significa que a metodologia por trás dela já está documentada o suficiente para outros clubes — inclusive brasileiros — entenderem a lógica, mesmo sem comprar o produto.

## As três camadas do método

O Fokus organiza a tomada de decisão do clube em três frentes que, na maioria dos clubes, vivem separadas em planilhas, e-mails e reuniões distintas:

1. **Planejamento estratégico de elenco**: visão completa do elenco atual, cronograma de sucessão por posição (quem vai precisar de substituto e quando) e prioridades de contratação definidas com antecedência — não reativamente, quando já falta um jogador.
2. **Ranking de jogadores por algoritmo, contra o modelo de jogo do próprio clube**: em vez de um ranking genérico de "melhores jogadores do mundo", o sistema ordena candidatos a partir de quão bem cada um encaixa no modelo tático específico daquele clube — no caso do Glimt, o 4-3-3 de posse alta que já detalhamos ontem. É uma diferença conceitual importante: o alvo não é "o jogador mais talentoso disponível", é "o jogador mais provável de gerar impacto **neste** sistema".
3. **Modelagem financeira ligada diretamente à decisão esportiva**: fluxo de caixa de longo prazo, parcelas de contrato, cláusulas contingentes e bônus — tudo conectado ao mesmo lugar onde a decisão de contratação é tomada, para que a implicação financeira apareça **antes** de virar problema, não depois.

## Por que unificar isso muda o fluxo de trabalho

Antes do Fokus, uma decisão de contratação no Bodø/Glimt exigia dias de idas e vindas internas — quem é o jogador, por que o clube o observa, como ele encaixa no modelo de jogo, qual o plano de longo prazo. Com relatório de scouting, dado de performance, informação contratual e planejamento de elenco todos no mesmo ambiente, atualizado em tempo real e acessível de qualquer lugar, essas conversas passaram a acontecer dentro do próprio fluxo de trabalho, não em paralelo a ele. Na prática, o clube passou a conseguir **filtrar continuamente** o universo de jogadores disponíveis por perfil de função, encaixe tático, idade e indicadores de performance — sempre em relação à própria filosofia de jogo, não a um padrão universal de "bom jogador".

## De ferramenta interna a produto usado em contextos bem diferentes

O detalhe que mais vale destacar para quem lê daqui do Brasil: o Fokus hoje atende clubes de portes e contextos muito diferentes entre si — de segunda divisão dinamarquesa a equipes de Champions League, incluindo nomes como Djurgården IF (Suécia), Wisła Kraków (Polônia) e até clubes nos Estados Unidos, como Philadelphia Union e AC Grand Rapids. Isso é evidência de que a lógica por trás do método não depende do tamanho do orçamento do Bodø/Glimt para funcionar — depende de o clube ter clareza sobre o próprio modelo de jogo e disciplina para manter os dados de scouting, elenco e financeiro no mesmo lugar.

## O que fica replicável mesmo sem comprar a ferramenta

O ponto central não é "clube brasileiro deveria assinar o Fokus" — é que a estrutura conceitual por trás dele é replicável independente da ferramenta específica usada, no mesmo espírito do que já discutimos no artigo sobre [gestão de dados nas categorias de base](/pt/blog/categorias-de-base-gestao-de-dados/): a maior barreira geralmente não é tecnológica, é organizacional. Um clube de porte médio no Brasil não precisa de um algoritmo sofisticado de ranking para começar — precisa definir com clareza o próprio modelo de jogo, e então parar de tratar scouting, planejamento de elenco e financeiro como três departamentos que não conversam entre si.

## O limite de transparência aqui

Vale registrar uma ressalva de honestidade: o Fokus é um produto comercial, não um projeto acadêmico de código aberto — não temos acesso aos detalhes exatos do algoritmo de ranking por IA, só ao que a própria empresa e o próprio clube descrevem publicamente sobre a abordagem. O valor deste post é explicar a **lógica organizacional** documentada, não auditar a implementação técnica interna, que continua proprietária.

**Fontes:** [Fokus — Our Solution](https://fokus.ing/our-solution), [Fokus — How Bodø/Glimt transformed their recruitment organisation](https://fokus.ing/blog/bodo-glimt-recruitment-transformation), [Fokus — About Us](https://fokus.ing/about), [Fokus — Djurgården IF chooses Fokus to strengthen football operations](https://fokus.ing/blog/djurgarden-chooses-fokus), [Philadelphia Union — Philadelphia Union Enters Technical Partnership with Fokus](https://www.philadelphiaunion.com/news/philadelphia-union-enters-technical-partnership-with-fokus), [Off The Pitch — The numbers game: How Bodø/Glimt turned AI into a recruitment edge](https://offthepitch.com/a/numbers-game-how-bodoglimt-turned-ai-recruitment-edge).
