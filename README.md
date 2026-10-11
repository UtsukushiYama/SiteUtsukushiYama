# Utsukushi Yama

Biblioteca de Kyokushin e stories. O Placar Kyokushin é um produto independente em `painel-placar/`, com pacote, autenticação e tabelas próprios. Ambos usam HTML, CSS, JavaScript e PHP 8.1+, com MySQL/MariaDB para login. Compatíveis com hospedagem PHP como InfinityFree; não precisam executar Node.js na hospedagem.

## Começar

1. Instale PHP 8.1+ com a extensão `mysqli`, MySQL/MariaDB e Node.js 20+.
2. Execute `npm ci` e `npm run vendor` na pasta do repositório.
3. Crie o banco `uy_db`. Importe `uy_database.sql` com esse banco selecionado.
4. Copie `config/local.example.php` para `config/local.php` e preencha os blocos `development` (banco local) e `production` (InfinityFree). O arquivo seleciona automaticamente o ambiente. Esse arquivo é privado e ignorado pelo Git. Veja [a configuração dos dois ambientes](docs/CONFIGURACAO.md).
5. Execute `php tools/create-user.php seu_usuario admin "Seu nome"` para criar a primeira conta. Digite uma **nova** senha no terminal.
6. Execute `npm run dev`. Abra o endereço informado pelo PHP no seu próprio computador.

As páginas públicas, os stories e a exportação de imagens funcionam sem login. Login, conteúdo restrito e o editor exigem o banco. Não abra os HTMLs com duplo clique: o site precisa do servidor PHP.

No ambiente cloud já preparado: `bash tools/cloud-start.sh`. Os binários locais ficam em `/workspace/runtime`; para usar PHP no terminal, execute `export PATH=/workspace/runtime/bin:$PATH`. Consulte [configuração cloud](docs/AMBIENTE-CLOUD.md).

## Alterar o site uma única vez

| Arquivo | O que controla |
| --- | --- |
| `header.html` | Menu e área de login compartilhados |
| `footer.html` | Rodapé compartilhado |
| `css/site.css` | Entrada única de estilos e bibliotecas locais |
| `css/theme.css` | Cores, tipografia, botões e identidade visual |
| `css/components.css` | Componentes e layouts, com regras idênticas compartilhadas e regras específicas limitadas à página |
| `js/site.js` | Inicialização ordenada, bibliotecas e componentes comuns |
| `js/main.js` | Carrosséis, submenus, galeria e interações compartilhadas |
| `js/pages.json` | Scripts específicos e nível exigido por cada página; usado também pelo servidor |
| `data/access-levels.json` | Hierarquia única de acesso, lida pelo PHP e pelo navegador |
| `js/auth.js` | Login da biblioteca e do editor de stories |
| `data/blog-cards.html` | Resumos compartilhados do blog; a home mostra os três primeiros |
| `js/blog-feed.js` | Carregamento público dos resumos sem depender de uma página restrita |
| `data/stories.json` | Conteúdo inicial dos stories versionado no Git |
| `js/story-artwork.js` | Desenho compartilhado das telas no site e das imagens para Instagram |

Nenhuma página ativa mantém blocos de CSS, JS ou manipuladores de eventos inline. Funções exclusivas ficam em `js/pages/`; blocos reutilizados ficam em `js/shared/`. Preserve a semântica de cores de faixas, competidores Shiro/Aka e controles do placar.

## Stories e Instagram

Abra **Stories · Reflexões** no menu. O story abre automaticamente uma vez por dia, por navegador, considerando a data de Brasília (`America/Sao_Paulo`). Fechar ou concluir essa apresentação impede novas aberturas automáticas nas outras páginas no mesmo dia. O menu, o botão **Ler story** e links diretos permitem reler quando quiser. O módulo independente do placar não carrega os stories da biblioteca.

- Avance/volte com os botões, setas do teclado ou deslize no celular.
- Use pausar/continuar e Escape para fechar. O avanço automático tem 15 segundos por tela; quem prefere movimento reduzido começa com o story pausado.
- **Baixar para Instagram** cria um ZIP com PNGs de **1080 × 1920** e a legenda com crédito. Extraia e publique as imagens na ordem. A geração acontece no navegador e não depende das imagens ainda ausentes do site.
- Administradores podem criar, visualizar e salvar publicações na própria página. O conteúdo salvo passa a aparecer primeiro na entrada do site.
- O editor salva em `storage/stories.json`. Baixe a cópia de segurança no editor e preserve essa pasta em atualizações. Para versionar publicações feitas pelo editor, substitua `data/stories.json` pela cópia baixada e faça um commit. Um arquivo `storage/stories.json` existente tem prioridade sobre o conteúdo inicial.

A publicação direta na Meta não está implementada: nesta versão, a geração é automática e o envio ao Instagram é feito por você, conforme a opção escolhida. O primeiro conteúdo foi transcrito de seis telas enviadas, com crédito a **@zen_budo_oficial**. A origem indica sete telas; a sétima não foi recebida.

## InfinityFree e mídias

Siga [o passo a passo de publicação](docs/INFINITYFREE.md) e [como adicionar imagens e áudios](docs/MIDIAS-E-GITHUB.md). `npm run package` cria `dist/UtsukushiYama-InfinityFree.zip` e `dist/PainelPlacar-Independente.zip`, sem credenciais, ferramentas ou dependências de desenvolvimento. Os pacotes são independentes; o pacote do site não inclui o placar.

Para instalar, configurar ou comercializar o placar separadamente, veja [o guia do módulo](painel-placar/README.md). Ele pode compartilhar o banco físico e a hospedagem do site usando somente suas próprias tabelas `placar_*`. O menu do site contém apenas um link para o produto instalado em `painel-placar/`.

Os resumos de notícias ficam em `data/blog-cards.html`, na ordem de publicação, do mais recente para o mais antigo. Inclua novos resumos no início desse arquivo e as mídias correspondentes em `js/blog-cards-data.js`. A home escolhe os três primeiros automaticamente, e `blog.html` usa a mesma fonte para a lista completa. Os artigos continuam com suas regras de acesso.

O GitHub guarda o código e executa verificações; GitHub Pages não executa este backend PHP. Um push **não** atualiza o InfinityFree automaticamente.

## Verificar alterações

Crie um banco separado chamado `uy_test_db` e importe `uy_database.sql` e `painel-placar/placar_database.sql`. Configure os arquivos privados dos dois produtos, ou use as variáveis `UY_DB_*` e `PP_DB_*`; os usuários configurados precisam ter acesso ao banco de teste. Os testes se recusam a criar contas fora de `uy_test_db`. Publicações de teste usam uma pasta isolada, sem tocar no conteúdo do editor.

```sh
npm run check
npm run test:config
npx playwright install chromium
npm test
```

Se o Chromium já estiver instalado: `CHROMIUM_PATH=/usr/bin/chromium npm test`. No cloud, inclua o PHP local no `PATH` antes.

`npm run check` valida sintaxe PHP/JS, IDs, carregamento único e recursos locais. As mídias não fornecidas são listadas separadamente em `docs/MIDIAS-AUSENTES.txt`. `npm test` verifica stories, exportação, celular, acesso no servidor, editor, páginas e funções dos placares. O GitHub Actions repete as verificações e disponibiliza o pacote como artefato.

## GitHub

Faça alterações em uma branch, abra um Pull Request e verifique os testes antes de juntar à `main`. Use Issues para registrar problemas e Releases para guardar versões publicadas. Atualizações de dependências devem atualizar `package-lock.json` e as bibliotecas locais via `npm run vendor`. Não envie os arquivos privados `config/local.php` e `painel-placar/config/local.php`, `.env`, bancos, contas de alunos, senhas nem `node_modules`.

Veja [o relatório de revisão](docs/REVISAO.md) para correções e limitações.
