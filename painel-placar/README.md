# Placar Kyokushin

Produto independente para Kata, Kumite e Kumite com Jogai. Este diretório contém todas as páginas, estilos, scripts, bibliotecas, configuração e APIs necessários. Não depende do menu, rodapé, stories, autenticação, tabelas ou arquivos do Site Utsukushi Yama.

Pode compartilhar a hospedagem e o banco físico com o site. Suas tabelas são exclusivas:

- `placar_usuarios`: contas, validade, ativação, modos liberados e logo do cliente.
- `placar_sessoes`: sessões do produto.
- `placar_access_log`: tentativas de acesso e eventos do produto.

O cookie é `pp_session`. Uma conta do site não autoriza o placar, e uma conta do placar não autoriza a biblioteca. Sair de um produto não encerra a sessão do outro. Mesmo nomes de usuário iguais correspondem a contas distintas.

## Instalar junto ao site

1. Faça backup do site e do banco existentes.
2. Extraia `PainelPlacar-Independente.zip` para `htdocs/painel-placar`. `PainelLanding.html` e `.htaccess` devem ficar diretamente nessa pasta.
3. No phpMyAdmin, selecione o mesmo banco já criado pelo painel do InfinityFree. Importe `placar_database.sql` separadamente. O script cria apenas tabelas `placar_*`, sem criar bancos nem modificar tabelas do site. Não envie o SQL para `htdocs`.
4. Copie `config/local.example.php` para `config/local.php` dentro do módulo. Preencha `development` com seu banco local e `production` com os dados do InfinityFree. Pode usar o mesmo host e banco do site. A escolha entre localhost e produção é automática e depende do `config/environment.php` do próprio módulo.
5. Crie uma conta na tabela `placar_usuarios`. Gere uma senha nova e seu hash localmente com `php painel-placar/tools/password-hash.php`, disponível no código-fonte. No phpMyAdmin, preencha `username`, `password_hash`, `nome_display`, `nivel_acesso = operador`, `ativo = 1`, `permite_kata` e `permite_kumite` conforme a licença. Uma `data_expiracao` nula significa acesso sem vencimento. Use data no formato `AAAA-MM-DD` para uma licença com vencimento.
6. Acesse `/painel-placar/` para a apresentação comercial e `/painel-placar/PainelPlacar.html` para o login. Teste o login, os modos contratados e o logout com HTTPS ativo.

As contas antigas da biblioteca não são copiadas automaticamente. Cadastre as contas comerciais neste módulo com novas senhas. As contas e os dados já existentes do site permanecem preservados. As sessões de navegador do placar anterior também não são migradas: faça login novamente.

Se as URLs antigas `PainelKata.html`, `PainelKumite.html`, `PainelKumiteJogai.html`, `PainelPlacar.html` ou `PainelLanding.html` estavam na raiz, o novo `.htaccess` do site redireciona esses endereços ao módulo. Depois do backup, remova os cinco HTMLs antigos e o login antigo da hospedagem. Publique os arquivos novos do site e do módulo; enviar apenas arquivos novos sem retirar os antigos não elimina a incorporação anterior.

## Instalar sem o site

Extraia o mesmo ZIP diretamente para a raiz `htdocs`, ou para outra pasta/domínio. Crie/selecione um banco pelo painel da hospedagem, importe `placar_database.sql` e configure o `config/local.php` próprio do módulo. Nenhum arquivo da biblioteca é necessário. O módulo funciona tanto na raiz quanto em uma subpasta.

Para iniciar só o módulo no computador, a partir da pasta do repositório:

```sh
php -S 127.0.0.1:8082 -t painel-placar painel-placar/tools/dev-router.php
```

Com PHP disponível e o banco configurado, crie uma conta pelo terminal com:

```sh
php painel-placar/tools/create-user.php cliente operador "Nome do cliente"
```

Digite uma senha nova no terminal. Ajuste validade, ativação e os modos da licença no phpMyAdmin. O nível `admin` pertence somente ao produto; ele não concede acesso ao administrador do site.

## Configuração e personalização

Use `PP_ENV=development` ou `PP_ENV=production` para selecionar explicitamente um ambiente especial, como acesso local por LAN ou comandos PHP no servidor de produção. As variáveis `PP_DB_HOST`, `PP_DB_PORT`, `PP_DB_DATABASE`, `PP_DB_USERNAME` e `PP_DB_PASSWORD` sobrescrevem campos do perfil selecionado. As variáveis `UY_*` pertencem ao site e não configuram o placar.

Substitua `img/logo.svg` para mudar o logo padrão. Para um logo específico por conta, coloque a imagem em `img/` e preencha `placar_usuarios.logo` com o caminho relativo, por exemplo `img/cliente.png`. São aceitos PNG, JPG, JPEG, WebP e SVG com caminhos locais sem `..`. As imagens e os vídeos originais de demonstração ainda não foram fornecidos; copie-os para as subpastas de `img/PainelPlacar/`.

A apresentação usa o link geral da loja já informado no código original. Para um produto específico, ajuste os links comerciais de `PainelLanding.html`. O botão de acesso abre o login; não promete uma demonstração pública inexistente. O subtítulo do evento é editável e tem valor padrão genérico. Título e subtítulo são salvos no navegador com uma chave exclusiva por pasta do módulo.

## Distribuição e limites

`npm run package`, no repositório, gera dois ZIPs separados. O pacote do site não contém este módulo. O pacote independente do placar contém seu próprio runtime e exclui credenciais, SQL, ferramentas e arquivos de teste. O Node.js é usado para manutenção e testes; a hospedagem precisa apenas de PHP 8.1+ com `mysqli` e MySQL/MariaDB.

Preserve o `config/local.php` preenchido e as mídias ao atualizar o produto. A proteção dos HTMLs depende do `.htaccess` e do PHP; confirme que um placar não abre sem login antes de distribuir.

A licença nesta versão usa conta ativa, data de validade e permissões de Kata/Kumite, verificadas no servidor. Pagamento automático e limite real de dispositivos não foram implementados. O antigo contador em `localStorage` não era controle de dispositivos e não foi restaurado. O cliente não recebe acesso ao painel da biblioteca por comprar o placar.
