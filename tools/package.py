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
paths += [root/'.htaccess',root/'page.php',root/'data/stories.json',root/'data/access-levels.json',root/'config/local.example.php']
with ZipFile(out/'UtsukushiYama-InfinityFree.zip','w',ZIP_DEFLATED) as archive:
 for path in sorted(set(paths)):archive.write(path,path.relative_to(root))
 archive.writestr('storage/.gitkeep','')
print(f'Pacote criado: {out / "UtsukushiYama-InfinityFree.zip"}')
print('Preserve config/local.php, storage/stories.json e as mídias já existentes na hospedagem.')
