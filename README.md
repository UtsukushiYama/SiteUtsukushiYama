# Downloads Utsukushi Yama

- UtsukushiYama-InfinityFree.zip: pacote referente ao commit 14abb6c da main, sem credenciais privadas nem midias originais ausentes.
- uy_database.sql: importe separadamente no phpMyAdmin, com o banco criado no painel e selecionado.

O ZIP inclui config/environment.php e config/local.example.php para selecionar automaticamente localhost ou producao.
Copie o exemplo para config/local.php e preencha os dois perfis uma unica vez. Nunca versione esse arquivo preenchido.
O SQL nao deve ser enviado para htdocs.
Preserve config/local.php, storage/stories.json e as midias existentes ao atualizar a hospedagem.
As instrucoes completas estao na branch main, em docs/CONFIGURACAO.md e docs/INFINITYFREE.md.
