# Publicar no InfinityFree

1. Faça uma cópia de segurança do site atual e do banco no painel/phpMyAdmin. Isso permite voltar à versão anterior.
2. Baixe ou gere o arquivo `UtsukushiYama-InfinityFree.zip`. Extraia no seu computador. Envie os arquivos extraídos para a pasta `htdocs` usando o gerenciador da hospedagem ou seu cliente FTP. A página `index.html` deve ficar diretamente em `htdocs`, sem uma pasta extra envolvendo o site.
3. Envie também `.htaccess`: ele faz a proteção PHP dos endereços `.html`. Se você já tiver um `.htaccess` com regras próprias, preserve-as e incorpore as novas regras; não apague configurações de SSL ou domínio existentes.
4. Preserve as pastas de mídias que já estão na hospedagem, `config/local.php` e `storage/stories.json`. O pacote não traz suas credenciais nem o conteúdo salvo pelo editor. Não envie `.git`, `node_modules`, `tools`, `tests`, ZIPs originais ou arquivos SQL para a área pública.
5. No painel do InfinityFree, crie/selecione seu banco MySQL. Importe `uy_database.sql` **com o banco selecionado**: o script não tenta criar um banco, pois esse procedimento é feito pelo painel da hospedagem. Se já usa as tabelas `usuarios`, `sessoes` e `access_log`, preserve os dados e faça backup; `CREATE TABLE IF NOT EXISTS` não sobrescreve essas tabelas.
6. Copie `config/local.example.php` para `config/local.php` na hospedagem. Preencha host, porta, nome do banco, usuário e senha fornecidos pelo InfinityFree. Não envie esse arquivo ao GitHub.
7. Para um banco antigo, se precisar do nível exclusivo de placar, execute no phpMyAdmin:

```sql
ALTER TABLE usuarios MODIFY nivel_acesso
  ENUM('guest','painelplacar','iniciante','intermediario','avancado','admin')
  NOT NULL DEFAULT 'iniciante';
```

8. Crie uma conta administradora com **senha nova**. No seu computador com PHP, execute `php tools/password-hash.php`. Copie o hash gerado para a coluna `password_hash` ao inserir/editar sua conta pelo phpMyAdmin. Preencha `username`, `nome_display`, `nivel_acesso = admin`, `ativo = 1`; deixe `data_expiracao` nula se não houver vencimento. Nunca use geradores de senha públicos para contas reais.
9. Confirme que `storage` existe e permite gravação pelo PHP. Na hospedagem, em geral a permissão de pasta 755 funciona; use a permissão recomendada pelo provedor. Evite liberar 777 indiscriminadamente.
10. Ative HTTPS no domínio. Abra o site, confirme o story, faça login, entre em um conteúdo restrito e teste salvar uma publicação e baixar suas imagens. Saia da conta e tente abrir diretamente uma página restrita: ela deve voltar ao início pedindo acesso.

Se todo conteúdo for servido mesmo sem login, verifique o `.htaccess` e o processamento de `page.php` antes de liberar assinaturas. O login antigo em JavaScript e o gerador antigo de hashes não fazem parte do pacote. Remova essas cópias antigas da hospedagem após guardar seu backup.

O backend agora usa cookie `HttpOnly` com `SameSite=Strict`. O atributo `Secure` é ativado quando o PHP detecta HTTPS. Sessões vencem em 24 horas; as contas são revalidadas no servidor. Usuários precisarão entrar novamente após a troca de versão.

A integração de contato existente com EmailJS foi preservada. A entrega de e-mails precisa ser conferida no seu serviço; os testes não enviam mensagens reais. Links de WhatsApp e e-mail continuam disponíveis.

A publicação neste ambiente valida o código localmente. Não acessamos nem alteramos sua hospedagem nesta tarefa; o passo final de envio ao InfinityFree continua sendo seu.
