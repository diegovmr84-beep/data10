---
term: "RMSE (Root Mean Square Error)"
shortDefinition: "Medida do erro médio de um modelo de previsão numérica — quanto menor, mais próximas as previsões estão dos valores reais observados."
category: "Estatística"
relatedPosts: ["ia-prever-jogador-de-ponta"]
relatedTerms: ["auc-roc", "machine-learning"]
---

**RMSE (Root Mean Square Error)**, ou "raiz do erro quadrático médio", mede a diferença típica entre o valor previsto por um modelo e o valor real observado, numa tarefa de previsão numérica (não de classificação sim/não).

## Como funciona

O cálculo eleva ao quadrado o erro de cada previsão (para que erros positivos e negativos não se cancelem), tira a média desses erros ao quadrado, e depois extrai a raiz quadrada — devolvendo o resultado na mesma unidade da variável original. Quanto **menor** o RMSE, mais precisas as previsões do modelo.

## Por que importa

É uma das métricas mais usadas para comparar modelos concorrentes na mesma tarefa de previsão — por exemplo, diferentes formas de estimar a nota de força de um jogador a partir do desempenho real dele. Um RMSE menor não significa necessariamente um modelo perfeito, só que ele erra, em média, menos do que as alternativas testadas.

Veja um exemplo de uso real no artigo [Um modelo tentou prever quem vira jogador de ponta — e acertou 84% das vezes](/pt/blog/ia-prever-jogador-de-ponta/).
