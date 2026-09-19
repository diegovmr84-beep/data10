---
term: "Dado de evento"
shortDefinition: "Registro discreto de cada ação de uma partida (passe, chute, desarme, falta), com informações como jogador envolvido, posição no campo e resultado — a matéria-prima por trás de métricas como xG e packing."
category: "Ciência de Dados"
relatedPosts: ["trabalhadores-anotacao-dados-futebol", "o-que-e-xg", "packing-jogadores-ultrapassados", "visao-computacional-tracking-data"]
relatedTerms: ["tracking-data", "xg", "packing"]
---

**Dado de evento** é o tipo mais tradicional de dado no futebol: cada ação relevante de uma partida — um passe, um chute, um desarme, uma falta — registrada como uma linha discreta, com informações como o jogador envolvido, a posição no campo onde a ação aconteceu, o momento da partida e o resultado (certo/errado, gol/perdido).

## Como é coletado

Ao contrário do que a cobertura de "IA no futebol" costuma sugerir, boa parte do dado de evento ainda é gerado por anotação humana: uma pessoa assiste ao vídeo da partida e registra manualmente cada ação, em um processo que pode levar de três a quatro horas por jogo e captar até 3 mil ações numa única partida. É a matéria-prima usada para treinar e alimentar modelos como o [xG](/pt/glossario/xg/) e para calcular métricas de contagem direta como o [packing](/pt/glossario/packing/).

## Dado de evento x tracking data

São duas camadas diferentes de dado sobre a mesma partida: o dado de evento captura só os momentos discretos em que algo "acontece" (uma equipe costuma ter entre 700 e 1.000 eventos registrados em 90 minutos), enquanto o [tracking data](/pt/glossario/tracking-data/) captura a posição contínua de todos os jogadores, dezenas de vezes por segundo — inclusive nos instantes entre um evento e outro.

Veja a cadeia de trabalho humano por trás da coleta desse tipo de dado no post [Antes da IA, tem gente assistindo o jogo](/pt/blog/trabalhadores-anotacao-dados-futebol/).
