# Diretrizes editoriais do blog Data10

## Critério de seleção de pauta (vigente a partir de 12/09/2026)

Priorizar posts **densos e evergreen** sobre ciência/engenharia de dados no
esporte — não notícia de jogo do dia.

Critério de escolha ao avaliar tendências:
- É uma **metodologia, tecnologia ou ferramenta** (nova ou recém-adotada),
  não o resultado de uma partida específica.
- Tem evidência de que **clubes reais estão adotando** ou testando (não só
  um paper isolado sem aplicação prática, embora paper acadêmico bem
  fundamentado também sirva de base, como no post sobre abordagens
  computacionais de tática).
- Tende a continuar sendo buscado por semanas/meses — não um assunto que
  desaparece das buscas no dia seguinte (jogo de ontem, convocação de
  hoje, placar de determinado confronto).

Exemplos do que funcionou bem nesse critério: Bodø/Glimt e a ferramenta
Fokus, plataformas de força na prevenção de lesão, somatotipo/Heath-Carter
no scouting, o paper de síntese sobre tática computacional, sono como dado
de recuperação.

Exemplos do que evitar daqui pra frente (ainda ok ocasionalmente, mas não
deve ser o padrão): cobertura de resultado de jogo específico (mesmo com
ângulo de dado), convocação de seleção, prévia de confronto de mata-mata.

## Fluxo de trabalho diário (mantido)

1. Pesquisar tendências (Brasil + mundo) já filtrando pelo critério acima.
2. Apresentar 2-4 opções com pitch breve, deixar o usuário escolher.
3. Escrever o post com apuração e fontes verificadas (ver padrão de rigor
   abaixo).
4. Validar com `npm run build`.
5. Commitar, dar push, monitorar o deploy do GitHub Actions até
   `completed`/`success`.

## Capa dos posts (vigente a partir de 25/09/2026)

Padrão de capa mudou para a **Direção A — pôster editorial**: um motivo
visual central forte (não mais um padrão de pontos abstratos espalhados
pela tela) mais um selo de categoria (pill arredondado, cor ember,
texto da categoria em Inter bold) impresso na própria capa. Continua
sendo SVG gerado por código, mesma paleta de marca (gradiente navy
`#101a30`→`#0b1120`, ember `#e57426`/`#d1590f`, slate `#7686a8`, claro
`#f4f6fa`), sem imagem externa.

- Vale só para posts novos — os 70+ posts antigos não são redesenhados.
- Quando o post for de metodologia/tática/métrica e a própria capa puder
  funcionar como mini-diagrama explicativo (zona de pressão, formação,
  etc.), usar a **Direção B — diagrama-capa** em vez da A.
- Para post que explica formação ou esquema tático em detalhe, considerar
  incluir no corpo do post um **diagrama didático em estilo futebol de
  botão** (discos sobre feltro verde com moldura de madeira, mostrando
  jogador e seta de movimento/pressão) — usar com critério, é peça nova
  por post, não reaproveitável.

## SEO: título e descrição (vigente a partir de 24/09/2026)

- Título ≤ 60 caracteres **incluindo** o sufixo " · Data10" (ou seja,
  título em si com até ~51 caracteres).
- Meta description ≤ 160 caracteres.
- Vale só para posts novos daqui pra frente — os 70+ posts antigos não
  são reescritos retroativamente.

## Padrão de rigor editorial

- Toda estatística ou claim relevante precisa ser checada contra fonte
  primária/confiável antes de publicar — nunca confiar só num agregador
  vago.
- Quando uma checagem revelar que uma afirmação anterior (nossa ou de uma
  fonte) estava errada ou desatualizada, corrigir publicamente no post
  seguinte, de forma transparente (ver exemplo: correção sobre prazo de
  recuperação do Estêvão).
- Preferir omitir um dado não verificável a arriscar publicar algo errado.
- Manter o glossário atualizado: todo termo técnico novo introduzido num
  post que mereça uma entrada própria deve virar verbete em
  `src/content/glossario/`, cross-linkado com termos relacionados.
