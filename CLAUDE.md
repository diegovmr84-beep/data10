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

## Nota operacional: duas contas GitHub (desde 29/09/2026)

O usuário mantém duas contas GitHub que se alternam como identidade
conectada ao Claude Code (`diegovmr84-beep`, dona do repositório
`data10`, e `diegovaloismr`, usada em outro projeto). A conexão é uma
identidade por vez — quando a conta ativa não é a `diegovmr84-beep`,
leitura (`git fetch`, `get_me`, `get_commit`) continua funcionando
normalmente porque o repositório é público, mas qualquer escrita
(`git push`, `push_files`, `create_or_update_file`) falha com
`403 Forbidden` (git) ou `403 Resource not accessible by integration`
(API) — um erro que só aparece na hora de salvar, depois do trabalho
já feito.

Para evitar descobrir isso tarde: **no início de uma sessão de
trabalho no Data10, antes de escrever vários posts, chamar
`mcp__github__get_me` uma vez** e confirmar que a conta retornada é
`diegovmr84-beep` (ou outra com permissão de escrita confirmada nesse
repositório). Se vier `diegovaloismr` ou qualquer conta sem permissão,
avisar o usuário e pedir pra trocar o conector em claude.ai → Settings
→ Connectors **antes** de seguir com o trabalho, em vez de escrever
tudo e só descobrir o bloqueio no `git push` final.

## Ritmo de publicação (vigente a partir de 08/10/2026)

O Google AdSense rejeitou a primeira solicitação de revisão do site por
"conteúdo de baixo valor", citando as políticas de spam do Google —
categoria que inclui conteúdo publicado em escala, de forma
automatizada. Uma causa provável identificada: o histórico de commits
tinha vários dias com múltiplos posts publicados de uma vez (inclusive
um lote de 12 posts na mesma data, em parte resíduo de uma correção de
data retroativa), o que visualmente se parece com publicação em massa
pra quem analisa o arquivo do blog de fora.

Daqui pra frente, **publicar no máximo 1 post por dia** (a mesma sessão
de trabalho pode *escrever* mais de um post, como de costume, mas evitar
dar commit/push de vários no mesmo dia corrido — se sobrar post pronto,
guardar e publicar no dia seguinte). Isso não é garantia de aprovação do
AdSense — o site também é novo e carece de tráfego orgânico consolidado,
fator fora do nosso controle —, mas é um ajuste de padrão visível que
vale manter de qualquer forma.

## Capa dos posts (vigente a partir de 25/09/2026)

Padrão de capa mudou para a **Direção A — pôster editorial**: um motivo
visual central forte (não mais um padrão de pontos abstratos espalhados
pela tela) mais um selo de categoria (pill arredondado, cor ember,
texto da categoria em Inter bold) impresso na própria capa. Continua
sendo SVG gerado por código, mesma paleta de marca (gradiente navy
`#101a30`→`#0b1120`, ember `#e57426`/`#d1590f`, slate `#7686a8`, claro
`#f4f6fa`), sem imagem externa.

- Vale só para posts novos — os 70+ posts antigos não são redesenhados.
- **Zona segura obrigatória:** o SVG é desenhado em viewBox 1600×900, mas
  é exibido cortado (`object-cover`) em pelo menos duas proporções
  diferentes: 21:9 no topo do artigo (corta ~107px do topo e ~107px da
  base) e 4:3 no card de listagem em tela pequena (corta ~200px de cada
  lado). Qualquer elemento com texto ou informação (selo de categoria,
  rótulo, número) precisa ficar dentro do retângulo seguro aproximado
  **x: 220–1380, y: 130–770** do viewBox. Elemento decorativo de fundo
  (numeral fantasma, textura) pode sangrar até a borda sem problema —
  só conteúdo que precisa ser lido tem que respeitar a zona segura.
  Antes de commitar uma capa nova, renderizar o build e checar o PNG
  gerado (`dist/_astro/<slug>*.png`) pra confirmar visualmente.
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
