---
term: "Aprendizado por reforço"
shortDefinition: "Técnica de machine learning em que um agente aprende por tentativa e erro, recebendo recompensa por ações que se aproximam de um objetivo — em vez de aprender a partir de exemplos já rotulados."
category: "Ciência de Dados"
relatedPosts: ["dado-tracking-sintetico-simulado-pesquisa"]
relatedTerms: ["machine-learning", "aprendizado-comparacao-pareada"]
---

**Aprendizado por reforço** (*reinforcement learning*) é uma técnica de machine learning em que um agente aprende a agir dentro de um ambiente por tentativa e erro, recebendo recompensa (ou punição) conforme suas ações se aproximam (ou se afastam) de um objetivo — em vez de aprender a partir de um conjunto de exemplos já rotulados, como no aprendizado supervisionado tradicional.

## Como difere de outras formas de machine learning

Diferente do [machine learning](/pt/glossario/machine-learning/) supervisionado — que aprende a associar entrada e saída a partir de exemplo histórico com resposta certa já conhecida —, o aprendizado por reforço não recebe a resposta certa de antemão. O agente experimenta ações dentro de um ambiente simulado, observa o resultado, e ajusta seu comportamento ao longo de milhares (ou milhões) de tentativas para maximizar a recompensa acumulada.

## Onde aparece no futebol

Ambientes de simulação como o Google Research Football usam essa técnica para treinar agentes de IA a jogar futebol dentro de um jogo de física simulada — cada jogador controlado por um agente que aprende a passar, chutar e se movimentar recebendo recompensa por aproximar a bola do gol adversário. Esses agentes simulados, por sua vez, podem gerar dado de partida sintético útil para pesquisa, sem depender de coleta de dado de jogo real.

Veja a aplicação prática dessa técnica gerando dado de tracking sintético no post [O dado que ninguém precisou coletar](/pt/blog/dado-tracking-sintetico-simulado-pesquisa/).
