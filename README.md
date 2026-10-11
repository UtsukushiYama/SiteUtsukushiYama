# Downloads Utsukushi Yama e Placar Kyokushin

Pacotes referentes ao commit f28f8b6 da main.

- UtsukushiYama-InfinityFree.zip: biblioteca e stories, sem o modulo de placar.
- PainelPlacar-Independente.zip: produto independente, com autenticacao e tabelas proprias.
- uy_database.sql: tabelas do site. Importe separadamente no banco selecionado no phpMyAdmin.
- placar_database.sql: somente tabelas placar_*. Pode usar o mesmo banco fisico do site.

O placar pode ser instalado em htdocs/painel-placar, ou na raiz de outra hospedagem sem arquivos do site.
O site mostra as tres noticias mais recentes sem login. O story abre automaticamente uma vez por dia, por navegador, usando a data de Brasilia. A leitura manual continua disponivel no menu.
Os ZIPs nao incluem SQL, credenciais privadas nem as midias originais ainda nao fornecidas.
Preserve os arquivos privados config/local.php de cada produto e as midias existentes ao atualizar a hospedagem.
No site, preserve tambem storage/stories.json. Nao envie SQL ou ferramentas para htdocs.
As instrucoes completas estao na branch main: docs/INFINITYFREE.md e painel-placar/README.md.
