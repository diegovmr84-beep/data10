---
term: "Ensemble (Machine Learning)"
shortDefinition: "Técnica que combina as previsões de vários modelos diferentes para chegar a um resultado mais robusto do que qualquer um sozinho."
category: "Ciência de Dados"
relatedPosts: ["ia-prever-jogador-de-ponta", "plataforma-forca-previsao-lesao"]
relatedTerms: ["machine-learning", "rmse", "auc-roc", "overfitting"]
---

**Ensemble** é uma técnica de machine learning que combina as previsões de vários modelos diferentes — em vez de depender de um único algoritmo — para chegar a um resultado final mais robusto do que qualquer um deles isoladamente.

## Como funciona

Cada modelo do conjunto pode errar de um jeito diferente diante dos mesmos dados. Combinando as previsões (por média, votação ou outra regra de agregação), os erros individuais tendem a se compensar, reduzindo a variância do resultado final. Um exemplo real: um estudo de avaliação de jogadores de futebol comparou cinco modelos — CatBoost, Random Forest, GradBoost, XGBoost e uma árvore de decisão — combinados num ensemble para estimar a probabilidade de um atleta se tornar referência na posição.

## Por que importa

Ensembles costumam superar modelos individuais em tarefas de previsão esportiva justamente por reduzir o risco de um único algoritmo capturar um padrão espúrio dos dados de treino — o mesmo tipo de cuidado metodológico que já discutimos no verbete sobre [overfitting](/pt/glossario/overfitting/).

Veja um exemplo de uso real no artigo [Um modelo tentou prever quem vira jogador de ponta — e acertou 84% das vezes](/pt/blog/ia-prever-jogador-de-ponta/).
