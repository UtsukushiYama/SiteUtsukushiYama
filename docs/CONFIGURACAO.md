# Configuração automática: localhost e produção

1. Copie `config/local.example.php` para `config/local.php`.
2. No bloco `development`, preencha os dados do MySQL do seu computador.
3. No bloco `production`, preencha os dados exibidos em **MySQL Databases** no InfinityFree. Use o host e o nome completo do banco fornecidos pelo painel, incluindo o prefixo da conta.
4. Use esse mesmo arquivo no computador e na hospedagem. O site escolhe o bloco automaticamente; não é necessário editar credenciais a cada publicação. O arquivo `config/environment.php`, incluído no pacote, precisa permanecer ao lado de `local.php`.

O arquivo continua privado e ignorado pelo Git. O ZIP fornece apenas o exemplo, sem senhas. Preserve `local.php` ao atualizar a hospedagem. Nunca envie suas senhas por mensagem nem versione o arquivo preenchido.

## Como o ambiente é escolhido

- PHP local acessado pelo endereço de servidor `127.0.0.1` ou `::1`: `development`.
- Servidor embutido do PHP iniciado em `localhost`, `127.0.0.1` ou `::1`: `development`.
- Comandos PHP no terminal: `development` por padrão.
- Outros servidores web, incluindo InfinityFree: `production`.

A seleção usa informações do servidor; o cabeçalho `Host` enviado pelo visitante não escolhe credenciais. Uma requisição ao servidor de produção com `Host: localhost` continua selecionando produção.

Em um ambiente diferente, como acesso local por uma rede LAN, configure a variável de ambiente do processo PHP `UY_ENV=development`. Para executar comandos PHP diretamente num servidor de produção, use `UY_ENV=production`. Os únicos valores aceitos são `development` e `production`; valores inválidos provocam erro em vez de selecionar um banco incorreto.

As variáveis `UY_DB_HOST`, `UY_DB_PORT`, `UY_DB_DATABASE`, `UY_DB_USERNAME` e `UY_DB_PASSWORD` continuam podendo sobrescrever campos após a seleção. Isso mantém os testes e o GitHub Actions funcionando com um banco separado.

## Atualizar uma configuração existente

Arquivos antigos que retornam diretamente um único conjunto de credenciais continuam funcionando, mas não fazem a troca automática. Guarde uma cópia privada do arquivo atual, use o novo exemplo e transfira cada credencial para o bloco correto. Não substitua seu arquivo preenchido pelo exemplo vazio durante uma atualização.
