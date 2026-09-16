---
term: "Aprendizado por comparação pareada"
shortDefinition: "Técnica de machine learning que treina um modelo a partir de julgamentos relativos ('A é melhor que B'), em vez de notas absolutas — usada, por exemplo, para treinar sistemas de scouting por vídeo."
category: "Ciência de Dados"
relatedPosts: ["aiscout-humain-ia-scouting-mls", "machine-learning-scouting"]
relatedTerms: ["machine-learning", "ensemble"]
---

**Aprendizado por comparação pareada** (*pairwise comparison learning*) é uma técnica de machine learning em que o modelo é treinado a partir de julgamentos relativos entre pares de exemplos — "A é melhor que B" — em vez de receber uma nota absoluta para cada exemplo individual.

## Por que comparar em vez de pontuar

Pedir a um especialista humano para dar uma nota absoluta (de 0 a 10, por exemplo) a cada exemplo tende a gerar respostas inconsistentes: dois avaliadores diferentes — ou o mesmo avaliador em dias diferentes — frequentemente discordam sobre o valor exato de uma nota. Julgamentos relativos ("qual dos dois é melhor") tendem a ser mais consistentes entre avaliadores, porque exigem uma decisão binária mais simples em vez de uma calibração numérica.

## Como isso vira um modelo

Depois de coletar um grande volume de comparações pareadas, é possível treinar um modelo que aprende a ordenar (ou pontuar) qualquer exemplo novo com base nos padrões que apareceram nesses julgamentos relativos — a mesma lógica usada em vários sistemas de ranking fora do esporte, como comparação de conteúdo ou avaliação de modelos de linguagem.

## Onde aparece no esporte

O aiScout, plataforma de scouting por vídeo hoje usada pela MLS NEXT, é um exemplo direto: olheiros analisaram milhares de pares de vídeos de jovens atletas realizando o mesmo exercício, indicando qual dos dois tinha o desempenho melhor. Esses julgamentos pareados viraram a base de treino do modelo que hoje pontua automaticamente qualquer vídeo novo enviado por um atleta.

Veja a aplicação completa no post [Como o aiScout treina uma IA para enxergar como um olheiro](/pt/blog/aiscout-humain-ia-scouting-mls/).
