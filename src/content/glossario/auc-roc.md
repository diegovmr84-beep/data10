---
term: "AUC-ROC"
shortDefinition: "Métrica que resume a capacidade de um modelo de classificação distinguir entre duas classes — de 0,5 (chute aleatório) a 1,0 (previsão perfeita)."
category: "Estatística"
relatedPosts: ["plataforma-forca-previsao-lesao"]
relatedTerms: ["rmse", "machine-learning"]
---

**AUC-ROC** (Area Under the Curve — Receiver Operating Characteristic) é uma métrica que resume, num único número, a capacidade de um modelo de classificação binária (sim/não, vai se lesionar ou não, é gol ou não) distinguir corretamente entre as duas classes possíveis.

## Como interpretar o número

A escala vai de 0,5 a 1,0: **0,5** equivale a um modelo que acerta na mesma proporção de um chute aleatório, e **1,0** é uma previsão perfeita. Valores entre 0,6 e 0,7 costumam ser descritos como capacidade discriminativa **moderada** — claramente melhor que o acaso, mas longe de ser confiável sozinho para decisão automática.

## Por que importa

É uma das métricas mais comuns para avaliar modelos de risco no esporte — de previsão de lesão a modelos de recrutamento. Um AUC de 0,68, por exemplo, não é uma bola de cristal: é um resultado honesto para um problema difícil, útil para apoiar decisão humana, não substituí-la.

Veja um exemplo de uso real no artigo [Plataformas de força: o terceiro eixo de dado na prevenção de lesão](/pt/blog/plataforma-forca-previsao-lesao/).
