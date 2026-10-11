# Ambiente de desenvolvimento cloud

Use o checkout existente em `/workspace/SiteUtsukushiYama`. Cada tarefa cloud já é isolada; não crie worktrees adicionais sem solicitação explícita.

Instalação ou atualização:

```sh
cd /workspace/SiteUtsukushiYama
bash tools/cloud-setup.sh
```

Inicialização:

```sh
cd /workspace/SiteUtsukushiYama
bash tools/cloud-start.sh
export PATH=/workspace/runtime/bin:$PATH
```

O script reutiliza binários verificados, instala dependências com `npm ci`, mantém dados existentes e inicia apenas serviços locais. Não usa a hospedagem de produção nem credenciais reais. PHP e MariaDB ficam em `/workspace/runtime`, sem instalar pacotes no sistema. As fontes APT usam os repositórios Debian oficiais e verificações de assinatura e checksum.

O banco de desenvolvimento usa a porta 3307, o servidor PHP a porta 8080. O script também cria as tabelas independentes `placar_*` e o arquivo privado `painel-placar/config/local.php`, sem sobrescrever configurações existentes. O site e o produto compartilham somente o banco local físico; suas contas e sessões são separadas. Uma cópia publicada do filesystem preserva arquivos e dependências, mas processos precisam ser reiniciados. Os dois arquivos privados de configuração são ignorados pelo Git e usam somente o banco local isolado; não devem ser enviados ao InfinityFree.

Os testes iniciam o site na porta 8081 e uma instalação que serve somente o módulo do placar na porta 8082, confirmando que ele funciona sem a biblioteca. Para abrir só o módulo durante o desenvolvimento, use `npm run dev:placar` quando a porta 8082 estiver livre.

Para testar:

```sh
PATH=/workspace/runtime/bin:$PATH CHROMIUM_PATH=/usr/bin/chromium npm run verify
```

Confirme que a API de stories responde com conteúdo e que o leitor abre no navegador. Não crie links de preview para localhost durante onboarding: as solicitações locais são usadas só para validação interna.

O repositório não exige segredos de terceiros para desenvolvimento público, stories ou exportação. O banco local já está configurado. Novas configurações geradas usam perfis `development` e `production`, com seleção automática; o bloco de produção contém somente placeholders no cloud. Não salve valores de produção em scripts ou configurações versionadas. Veja `docs/CONFIGURACAO.md` para configurar os dois perfis.
