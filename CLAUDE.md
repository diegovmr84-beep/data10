# Data10 — site da consultoria em captação de recursos

## O que é este projeto (desde 19/10/2026)

O Data10 **deixou de ser** o blog de ciência de dados aplicada ao esporte e
virou o site institucional da consultoria de **Diego Valois da Mota Ribeiro**,
em João Pessoa/PB: produção de projeto para captação de recurso (lei de
incentivo, recurso público, patrocínio, crédito, investidor, habilitação e
certificação), mais criação de sites e aplicativos sob medida.

O site antigo (91 posts, 42 verbetes de glossário, dashboards do
Brasileirão) está preservado na branch `backup-site-antigo-branch`, caso
precise recuperar algo. Não é pra reaproveitar conteúdo de lá nas páginas
novas sem adaptação — é um negócio diferente.

## O negócio, resumido

- **Marca**: Data10 (mesmo nome do site antigo — site novo, marca mantida).
- **Quem**: Diego Valois da Mota Ribeiro.
- **Onde**: João Pessoa/PB — atendimento remoto pro Brasil todo.
- **Contato**: WhatsApp `+55 83 99959-6225` (número salvo sem máscara como
  `5583999596225` no código, pra montar link `wa.me`), e-mail
  `diegovmr@protonmail.com`.
- **Público**: OSC, empresa (de MEI a grande porte) e pessoa física/coletivo
  sem CNPJ.
- **Duas frentes de captação** (que o site vende em paralelo):
  1. **Consultoria** (`/servicos-captacao/`) — serviço feito por Diego:
     elaboração de projeto, acompanhamento, prestação de contas.
  2. **Data10 Recursos** (`/sistema/`, produto em
     `https://recursos.data10.app.br`) — sistema próprio ("Produtor de
     Projetos") que o cliente usa por conta própria, ou que apoia o trabalho
     da consultoria.
- **Mais um serviço**: sites e aplicativos sob medida (`/sites-aplicativos/`),
  com painel pro próprio cliente gerenciar o conteúdo depois da entrega.

### Data10 Recursos — o que o sistema faz (apurado em 19/10/2026, login de teste)

Referência rápida pra não precisar logar de novo só pra lembrar o que o
produto oferece — se for escrever sobre ele, prefira isso a reinventar a
descrição:

- **Tagline**: "Produtor de Projetos — do objetivo ao projeto pronto para
  captar."
- **5 etapas**: Grupo (tipo de dinheiro) → Forma (fonte específica, com
  semáforo de elegibilidade) → Dados (só o que aquela forma exige) →
  Produção (texto + orçamento com validação) → Entrega (.docx/.xlsx +
  texto pronto pro sistema oficial).
- **7 caminhos**: (1) Dinheiro de imposto — lei de incentivo fiscal; (2)
  Recurso público a fundo perdido — emenda parlamentar, chamamento,
  subvenção; (3) Dinheiro privado sem incentivo fiscal — patrocínio,
  doação, crowdfunding; (4) Renda própria; (5) Crédito; (6) Investidores
  (só empresa); (7) Habilitações e certificações (CEBAS, OSCIP, Lei Pelé
  etc. — pré-requisito pras outras formas).
- **Áreas cobertas**: não é só cultura/esporte — também criança e
  adolescente, pessoa idosa, saúde/PCD, assistência social, educação, meio
  ambiente, inovação.
- **Diferencial declarado**: toda regra traz norma + artigo + data de
  checagem em fonte oficial; valida teto/percentual/vedação antes de
  liberar exportação; não promete aprovação (decisão é sempre do
  órgão/financiador/investidor).
- Os textos do site (`/sistema/`, trechos de `/servicos-captacao/` e
  `/sobre/`) já incorporam isso. Se o produto mudar, vale revisitar
  `recursos.data10.app.br` pra atualizar — não teve credencial de produção
  compartilhada aqui, só um login de teste usado uma vez pra apurar.

## Stack e arquitetura

- **Framework**: Astro 7 (SSG — gera HTML estático), Tailwind CSS 4.
- **Hospedagem**: GitHub Pages, domínio próprio `data10.app.br` via
  `public/CNAME`. Deploy automático a cada push em `main`
  (`.github/workflows/deploy.yml`) — **só builda a partir de `main`**, de
  propósito (nenhuma outra branch dispara deploy).
- **i18n**: nenhum — site só em português. A versão antiga tinha
  pt/en/es; não recriar essa estrutura sem pedido explícito.
- **Conteúdo**: sem content collections (sem blog, sem Markdown) — cada
  página é um `.astro` em `src/pages/`, com texto direto no componente.
- **Redirecionamentos**: `src/data/legacy-redirects.mjs` tem as 157 URLs do
  site antigo redirecionadas (via `redirects` do `astro.config.mjs`) pra
  home ou página equivalente. GitHub Pages não tem 301 real — são páginas
  estáticas com meta-refresh + canonical. Não apagar esse arquivo.

## O que nunca mexer sem necessidade clara

Esses itens já estavam configurados e funcionando — qualquer PR que mexa
neles merece atenção redobrada:

- `src/components/Analytics.astro` — Google Analytics (GA4,
  `G-011YM3Q0J2`), carregado só depois do aceite de cookie.
- `<meta name="google-adsense-account">` em `BaseLayout.astro` + `public/ads.txt`
  (`pub-8302966077337193`) — verificação do AdSense.
- `public/CNAME` (`data10.app.br`) e `site`/`base` em `astro.config.mjs`.
- `public/robots.txt` e o mecanismo de sitemap (`@astrojs/sitemap`).
- O gate de cookie em `CookieConsent.astro` (evento
  `data10:cookies-accepted`) — é o que libera o Analytics; não carregar
  script de analytics/anúncio fora desse listener.

Não encontramos verificação do Google Search Console no código (nem meta
tag, nem arquivo `google*.html`) — se existir, deve ser via registro DNS,
fora do repositório.

## Padrão de rigor editorial (mantido do site antigo, adaptado)

- **Nunca inventar** número, cliente, depoimento ou resultado nos textos do
  site. Onde faltar informação real, usar o marcador `[PREENCHER]` de forma
  visível — não um valor plausível no lugar.
- Hoje só resta um `[PREENCHER]` real, em `src/pages/sobre.astro`: tempo de
  atuação e histórico profissional de Diego Valois. Preencher assim que
  tiver a informação, não antes.
- Informação sobre o sistema Data10 Recursos deve vir do produto de
  verdade (ver seção acima), não de suposição sobre o que um sistema de
  captação "provavelmente" faz.

## Nota operacional: duas contas GitHub (desde 29/09/2026, ainda vale)

O usuário mantém duas contas GitHub que se alternam como identidade
conectada ao Claude Code (`diegovmr84-beep`, dona do repositório
`data10`, e `diegovaloismr`, usada em outro projeto). A conexão é uma
identidade por vez — quando a conta ativa não é a `diegovmr84-beep`,
leitura (`git fetch`, `get_me`, `get_commit`) continua funcionando
normalmente porque o repositório é público, mas qualquer escrita
(`git push`, `push_files`, `create_or_update_file`) falha com
`403 Forbidden` (git) ou `403 Resource not accessible by integration`
(API) — um erro que só aparece na hora de salvar, depois do trabalho já
feito.

Para evitar descobrir isso tarde: **no início de uma sessão de trabalho no
Data10, antes de editar o site, chamar `mcp__github__get_me` uma vez** e
confirmar que a conta retornada é `diegovmr84-beep` (ou outra com
permissão de escrita confirmada nesse repositório). Se vier `diegovaloismr`
ou qualquer conta sem permissão, avisar o usuário e pedir pra trocar o
conector em claude.ai → Settings → Connectors **antes** de seguir com o
trabalho.

Se a troca de conta deixar a sessão do MCP do GitHub com erro `invalid
session` em qualquer chamada (não só `get_me`): reconectar não basta às
vezes — pode levar alguns minutos de propagação, ou precisar desconectar e
reconectar de novo em `claude.ai/connect-github`. Evitar ficar re-tentando
às cegas; avisar o usuário do estado e perguntar como prefere seguir.

## Fluxo de trabalho pra mudar o site

1. Entender o pedido, checar `mcp__github__get_me` se for mexer em
   commit/push.
2. Editar o(s) `.astro` relevante(s) — texto direto no componente, sem
   fonte de conteúdo externa.
3. Validar com `npm run build` (sem warning/erro, checar título de página
   e meta description se mudou algo de SEO).
4. Commitar, dar push em `main`, monitorar o deploy do GitHub Actions até
   `completed`/`success` (mesmo padrão de polling usado no site antigo:
   consultar `GET /repos/diegovmr84-beep/data10/actions/runs` até o status
   fechar).

Diferente do site antigo, **não existe** fluxo de "pauta diária" nem
limite de publicação por dia — isso era específico do blog e não se aplica
mais. Mudança no site institucional pode ser commitada e publicada assim
que estiver pronta e validada.
