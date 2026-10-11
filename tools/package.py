"""Create an InfinityFree deployment ZIP with only public runtime files."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root=Path(__file__).resolve().parent.parent
out=root/'dist';out.mkdir(exist_ok=True)
paths=[]
for directory in ['api','config','css','js','lib','assets','img','audio','audios']:
 folder=root/directory
 if folder.is_dir():
  for path in folder.rglob('*'):
   if path.is_file() and path.name not in ['local.php','local.example.php'] and not path.name.endswith('.map'):
    paths.append(path)
paths += [p for p in root.glob('*.html') if p.name!='blog-card-MODELO.html']
paths += [root/'.htaccess',root/'page.php',root/'data/stories.json',root/'data/access-levels.json',root/'data/blog-cards.html',root/'config/local.example.php']
with ZipFile(out/'UtsukushiYama-InfinityFree.zip','w',ZIP_DEFLATED) as archive:
 for path in sorted(set(paths)):archive.write(path,path.relative_to(root))
 archive.writestr('storage/.gitkeep','')
print(f'Pacote criado: {out / "UtsukushiYama-InfinityFree.zip"}')
print('Preserve config/local.php, storage/stories.json e as mídias já existentes na hospedagem.')

module=root/'painel-placar'
with ZipFile(out/'PainelPlacar-Independente.zip','w',ZIP_DEFLATED) as archive:
 for path in sorted(module.rglob('*')):
  if not path.is_file():continue
  relative=path.relative_to(module)
  if relative.parts[0] in ['tools','tests','storage','docs'] or path.name in ['local.php','placar_database.sql','README.md'] or path.name.endswith('.map'):continue
  archive.write(path,relative)
print(f'Pacote independente criado: {out / "PainelPlacar-Independente.zip"}')
print('Importe painel-placar/placar_database.sql separadamente e configure painel-placar/config/local.php.')
