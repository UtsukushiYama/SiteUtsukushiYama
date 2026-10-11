# Revisão e refatoração

## Correções implementadas

- Removidas cópias, backups e versões preliminares da árvore publicada; os nomes estão em `ARQUIVOS-ORIGINAIS.md`. Conteúdo ativo e endereços foram preservados.
- Centralizados menu/rodapé, estilos, identidade visual, inicialização de scripts e regras de acesso. CSS de página é limitado por `data-page`; regras idênticas são compartilhadas. Rotinas JS iguais também foram extraídas para módulos comuns.
- Eliminados carregamentos repetidos de Font Awesome e versões diferentes de Bootstrap. Bibliotecas essenciais agora são locais, com versões fixadas em `package-lock.json` e licenças incluídas.
- Removidos CSS e JS inline de todas as páginas ativas. Imagens e fontes embutidas foram extraídas para arquivos reutilizáveis. A apostila passou de cerca de 17,7 MB para 1,5 MB de HTML; seu documento original foi preservado.
- Corrigidos IDs repetidos na home e blog, endereços locais inexistentes (`contato.html`, `index-02.html`, `blog-details.html`) e referências internas a ferramentas não fornecidas. Itens indisponíveis mostram “Em breve”.
- Corrigida a inicialização de submenus após a inserção do cabeçalho e o menu que ficava forçado como aberto no celular. Área de login agora fica disponível também em telas pequenas.
- Corrigidas dependências de tooltips e EmailJS. O formulário genérico de agendamento deixa de afirmar que enviou uma mensagem quando não há serviço de envio conectado.
- Removidos o login com senhas expostas no JavaScript, o gerador de hashes público e usuários de exemplo com hashes inválidos no SQL.
- Unificado login de placar e biblioteca na API PHP, com consultas preparadas, verificação de validade/conta ativa, erros genéricos para falha de login, limite de tentativas, cookie HttpOnly/SameSite e validação de origem nos pedidos de escrita.
- Protegida a entrega das páginas restritas no servidor. Falsificar `localStorage` não libera conteúdo. Regras do menu e da página usam o mesmo manifesto; arquivos privados, SQL, ferramentas e pastas de trabalho são bloqueados por `.htaccess` e pelo roteador local.
- Stories têm leitor acessível, navegação, pausa, fechamento, arquivo de leitura, editor de administrador e geração do ZIP para Instagram. O desenho exibido e o exportado é o mesmo.
- Conteúdo salvo pelo editor usa bloqueio e troca atômica de arquivo, reduzindo o risco de gravações parciais. Texto é renderizado como texto, sem executar HTML inserido no editor.

## Decisões e limites

- A identidade do site é única; cores de faixas, Shiro/Aka e layouts de competição continuam refletindo sua finalidade. Documentos técnicos mantêm a própria paginação dentro da identidade compartilhada.
- Os modos de competição Kata/Kumite não abrem stories no meio da operação. As demais páginas exibem a publicação a cada carregamento completo.
- Contas de placar agora usam o banco da biblioteca. As listas de usuários/senhas embutidas foram removidas, sem criar automaticamente contas antigas ou copiar suas senhas. Novas contas com nível `painelplacar` ou superior têm acesso aos dois modos.
- O antigo limite de telas estava em `localStorage` e funcionava apenas no mesmo navegador. Ele não oferecia controle de dispositivos. Não está sendo apresentado como proteção na nova versão; licenciamento por dispositivo exige uma implementação própria no servidor. Nenhuma restrição contratual por dispositivo pode depender daquele mecanismo antigo.
- Sessões têm validade fixa de 24 horas; não são renovadas indefinidamente por heartbeat. Sessões anteriores do login de navegador não são migradas: usuários entram novamente.
- A geração de Instagram é local no navegador e dispensa contas Meta. Não existe publicação direta no Instagram nesta versão.
- O administrador salva conteúdo no servidor (`storage`), não em commits automáticos no GitHub. O botão de backup e `data/stories.json` permitem versionar o conteúdo sem expor credenciais de escrita GitHub no site.
- Foram recebidas seis imagens de uma publicação marcada como sete telas. A última tela não foi inventada. O texto e crédito recebidos foram preservados; as capturas e o design do Instagram não foram copiados.
- As pastas de imagens/áudios não foram enviadas. A validação funcional de vídeos, áudio e composição visual com as fotografias finais precisa ser repetida depois que as mídias chegarem.
- A página de apostila é um documento exportado com conteúdo posicionado; mantivemos o documento em vez de reconstruir manualmente seus textos, que estão fracionados na exportação. O conteúdo tem controles próprios, com recursos locais e aparência externa compartilhada.
- Links externos, vídeos do YouTube, o EmailJS real e a configuração PHP/Apache do InfinityFree dependem dos respectivos serviços. Não foram enviados e-mails nem alterada a hospedagem.
- Arquivos JS e mídias públicos continuam podendo ser baixados; proteja dados sensíveis no backend. A autorização das páginas não é DRM para todos os materiais baixados por um assinante.

## Validação

O comando `npm run check` verifica estrutura e sintaxe. A suíte Playwright percorre todas as páginas ativas com sessão validada e exercita stories, ZIP/PNG, menu móvel, login/logout, expiração, acesso por nível, bloqueio de arquivos privados, gravação do editor e funções principais dos placares. O relatório de execução fica disponível em `playwright-report` e no artefato do GitHub Actions.

A configuração local foi testada com PHP 8.4 e MariaDB 11.8. A configuração do InfinityFree e a execução do workflow no GitHub precisam ser confirmadas nesses serviços depois da publicação. Nenhum resultado local comprova essas etapas externas.

Antes de migrar, troque todas as senhas que constavam do código antigo. Os arquivos enviados continham senhas de contas em texto claro; removê-las do Git novo não cancela seu uso na versão antiga.
