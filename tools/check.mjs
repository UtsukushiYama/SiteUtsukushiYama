/** Repository integrity: unique IDs, no inline code, valid assets and PHP/JS syntax. */
import { readFile, readdir, access, writeFile, mkdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { parse } from 'acorn';
import path from 'node:path';
const apps=[['','js/site.js'],['painel-placar','js/painel.js']];let errors=[];const missing=new Set();let count=0;
for(const [base,entry] of apps){
const pages=JSON.parse(await readFile(path.join(base,'js/pages.json'),'utf8'));
for(const [filename,config] of Object.entries(pages)){
 const name=path.join(base,filename);count++;
 const html=await readFile(name,'utf8');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);const unique=new Set();for(const id of ids){if(unique.has(id))errors.push(`${name}: ID duplicado ${id}`);unique.add(id);}
 if((html.match(/<script\b/g)||[]).length!==1 || !html.includes(`src="${entry}"`))errors.push(`${name}: entrada de scripts duplicada`);
 if(/<style\b|\sstyle=|\son(?:click|load|keydown|keyup|focus|blur|mouseover|mouseout)=/i.test(html))errors.push(`${name}: código inline`);
 for(const src of config.scripts){try{await access(path.join(base,src));}catch{errors.push(`${name}: script ausente ${src}`);}}
 for(const m of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  const src=m[1].split(/[?#]/)[0];if(!src||/^(?:https?:|data:|mailto:|tel:|javascript:)/.test(src))continue;
  const local=path.join(base,decodeURIComponent(src));
  try{await access(local);}catch{if(/\.(?:png|jpe?g|gif|svg|webp|ico|mp4|mp3|wav|ogg|pdf)$/i.test(src))missing.add(local);else errors.push(`${name}: recurso local ausente ${src}`);}
 }
}
}
async function walk(dir){const files=[];for(const entry of await readdir(dir,{withFileTypes:true})){const name=`${dir}/${entry.name}`;if(entry.isDirectory()){if(!['node_modules','.git','storage','test-results','playwright-report','dist'].includes(entry.name))files.push(...await walk(name));}else files.push(name);}return files;}
for(const file of await walk('.')){
 if(file.endsWith('.js')&&!file.includes('assets/vendor')&&!file.includes('/lib/')){try{parse(await readFile(file,'utf8'),{ecmaVersion:'latest'});}catch(e){errors.push(`${file}: ${e.message}`);}}
 if(file.endsWith('.php')){const r=spawnSync('php',['-l',file],{encoding:'utf8'});if(r.status!==0)errors.push(`${file}: ${r.stderr||r.stdout||'PHP indisponível'}`);}
}
await mkdir('docs',{recursive:true});await writeFile('docs/MIDIAS-AUSENTES.txt',[...missing].sort().join('\n')+'\n');
console.log(`${count} páginas verificadas nos dois produtos; ${missing.size} mídias referenciadas não vieram no ZIP (lista em docs/MIDIAS-AUSENTES.txt).`);
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log('Estrutura, IDs, scripts e sintaxe PHP válidos.');
