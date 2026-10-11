# Colocar imagens e áudios no GitHub

Você pode guardar as mídias no mesmo repositório. Não renomeie nem reorganize arquivos agora: as páginas precisam encontrar os caminhos originais, por exemplo `img/Equipe/SenseiFabio.png` e `audio/arquivo.mp3`. No servidor, `Foto.png` e `foto.png` são nomes diferentes.

## Jeito mais simples: GitHub Desktop

1. Instale o **GitHub Desktop** pelo site oficial e entre na sua conta.
2. Vá em **File → Clone repository**, escolha `UtsukushiYama/SiteUtsukushiYama` e selecione uma pasta no seu computador.
3. Abra essa pasta. Copie suas pastas `img` e `audio` para dentro dela, preservando os nomes e subpastas. Se seus áudios usam outro nome de pasta, como `audios`, mantenha o nome original. Mescle as pastas; não apague arquivos novos do projeto.
4. Volte ao GitHub Desktop. Escreva uma descrição, como **Adicionar imagens e áudios do site**, clique em **Commit to main** e depois em **Push origin**.
5. Abra o repositório no GitHub e confirme que as pastas e arquivos apareceram.

Isso envia os arquivos de mídia, não o ZIP. Não copie configurações com senhas, backups de banco nem a pasta `node_modules`.

Para poucos arquivos, você também pode abrir a pasta no site do GitHub e usar **Add file → Upload files**. O envio pelo navegador tem limite de aproximadamente 25 MB por arquivo; o Git comum bloqueia arquivos com mais de 100 MiB. O Desktop é mais confortável para muitas subpastas.

Para vídeos ou áudios muito grandes, prefira um serviço de mídia apropriado ou avalie Git LFS antes de enviar. Git LFS tem limites e custos próprios; não foi ativado automaticamente. Imagens otimizadas e áudios moderados podem ficar no Git normal.

A lista `MIDIAS-AUSENTES.txt` nesta pasta mostra as mídias referenciadas pelos HTMLs que não vieram no ZIP. Há referências adicionais em CSS/JS; preserve todas as suas pastas originais, não apenas os arquivos dessa lista. Onde uma imagem falta, o site exibe um marcador temporário; a imagem original volta a aparecer quando o arquivo correto é adicionado.

Enviar ao GitHub não copia as mídias para o InfinityFree. Você também deve colocá-las em `htdocs` na hospedagem, usando os mesmos caminhos. Se quiser, pode anexar aqui um ZIP separado só com essas pastas para que eu faça a inclusão no repositório.
