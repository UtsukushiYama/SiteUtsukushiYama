const {test,expect}=require('@playwright/test');const fs=require('node:fs');
function password(){return JSON.parse(fs.readFileSync('storage/test-fixtures.json','utf8')).password;}
async function login(request,name='admin'){const r=await request.post('/api/login.php',{data:{username:`uy_test_${name}`,password:password()}});expect(r.status()).toBe(200);return r;}
async function closeStory(page){await expect(page.locator('.uy-story-reader')).toBeVisible();await page.getByRole('button',{name:'Fechar story',exact:true}).click();}
test('stories appear on each page access, navigate all slides and support keyboard close',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/index.html');await expect(page.locator('#story-count')).toHaveText('1 de 6');
 await page.getByRole('button',{name:'Pausar story'}).click();for(let i=2;i<=6;i++){await page.getByRole('button',{name:'Próxima tela'}).click();await expect(page.locator('#story-count')).toHaveText(`${i} de 6`);}
 await page.getByRole('button',{name:'Concluir story'}).click();await expect(page.locator('.uy-story-reader')).not.toBeVisible();await page.reload();await expect(page.locator('.uy-story-reader')).toBeVisible();await page.keyboard.press('Escape');expect(errors).toEqual([]);
});
test('Instagram ZIP contains six valid 1080×1920 PNGs and source credit',async({page})=>{
 await page.goto('/stories.html');await closeStory(page);const event=page.waitForEvent('download');await page.getByRole('button',{name:'Baixar para Instagram',exact:true}).click();const download=await event;expect(download.suggestedFilename()).toBe('medo-instagram.zip');
 const bytes=fs.readFileSync(await download.path());const JSZip=require('jszip');const zip=await JSZip.loadAsync(bytes);const pngs=Object.keys(zip.files).filter(n=>n.endsWith('.png'));expect(pngs).toHaveLength(6);
 for(const file of pngs){const png=await zip.file(file).async('nodebuffer');expect(png.subarray(0,8).toString('hex')).toBe('89504e470d0a1a0a');expect(png.readUInt32BE(16)).toBe(1080);expect(png.readUInt32BE(20)).toBe(1920);}
 expect(await zip.file('LEGENDA.txt').async('string')).toContain('@zen_budo_oficial');
});
test('mobile navigation, login and stories fit a narrow display',async({page})=>{
 await page.setViewportSize({width:360,height:740});await page.goto('/stories.html');await closeStory(page);await expect(page.locator('#loginBtn')).toBeVisible();await page.getByRole('button',{name:'Abrir menu'}).click();await expect(page.getByRole('link',{name:'Stories · Reflexões'})).toBeVisible();
 const widths=await page.evaluate(()=>({body:document.documentElement.scrollWidth,viewport:innerWidth}));expect(widths.body).toBeLessThanOrEqual(widths.viewport+1);
});
test('restricted HTML is blocked by PHP even when localStorage is forged',async({page,request})=>{
 const r=await request.get('/kihongeiko.html',{maxRedirects:0});expect(r.status()).toBe(302);
 await page.goto('/index.html');await page.evaluate(()=>localStorage.setItem('userLevel','admin'));await page.goto('/Projeto-Shinkyoku.html');expect(page.url()).toContain('modal=upgrade');
 await login(request,'learner');expect((await request.get('/kihongeiko.html',{maxRedirects:0})).status()).toBe(200);expect((await request.get('/Projeto-Shinkyoku.html',{maxRedirects:0})).status()).toBe(302);
});
test('login rejects expired and disabled users, invalid input and wrong methods',async({request})=>{
 for(const user of ['expired','disabled'])expect((await request.post('/api/login.php',{data:{username:`uy_test_${user}`,password:password()}})).status()).toBe(401);
 expect((await request.get('/api/login.php')).status()).toBe(405);expect((await request.post('/api/login.php',{data:{username:[],password:'x'}})).status()).toBe(400);
});
test('verified session uses an HttpOnly cookie and logout blocks future access',async({request})=>{
 const r=await login(request);expect(r.headers()['set-cookie']).toContain('HttpOnly');expect(r.headers()['set-cookie']).toContain('SameSite=Strict');expect((await r.json()).data.token).toBeUndefined();
 expect((await request.get('/Projeto-Shinkyoku.html',{maxRedirects:0})).status()).toBe(200);expect((await request.post('/api/logout.php',{data:{}})).status()).toBe(200);expect((await request.get('/Projeto-Shinkyoku.html',{maxRedirects:0})).status()).toBe(302);
});
test('private files are inaccessible over HTTP',async({request})=>{
 for(const path of ['/config/local.php','/storage/stories.json','/uy_database.sql','/.git/config','/tools/test-fixtures.php','/api/config.php'])expect((await request.get(path)).status()).toBe(403);
});
test('non-administrators and cross-site requests cannot publish stories',async({request})=>{
 expect((await request.post('/api/stories.php',{data:{story:{}}})).status()).toBe(403);await login(request,'learner');expect((await request.post('/api/stories.php',{data:{story:{}}})).status()).toBe(403);
 expect((await request.post('/api/logout.php',{data:{},headers:{Origin:'https://unrelated.example'}})).status()).toBe(403);
});
test('all existing pages load for an administrator without JavaScript errors',async({page})=>{
 test.setTimeout(240000);await login(page.request);const pages=JSON.parse(fs.readFileSync('js/pages.json','utf8'));const failures=[];
 for(const filename of Object.keys(pages)){
  const errors=[];const listener=e=>errors.push(e.message);page.on('pageerror',listener);
  const response=await page.goto('/'+filename,{waitUntil:'domcontentloaded'});await page.waitForFunction(()=>window.UY?.ready===true);await page.waitForTimeout(80);page.off('pageerror',listener);
  if(response.status()!==200||errors.length)failures.push({filename,status:response.status(),errors});
 }
 expect(failures).toEqual([]);
});
test('administrator previews, saves and retrieves a new story with escaped text',async({page})=>{
 await login(page.request);await page.goto('/stories.html');await closeStory(page);await page.getByRole('button',{name:'Nova publicação'}).click();
 const form=page.locator('#story-form');await form.locator('[name=id]').fill('story-teste');await form.locator('[name=title]').fill('Treinar a coragem');await form.locator('[name=category]').fill('Reflexão');await form.locator('[name=credit]').fill('Equipe Utsukushi Yama');await form.locator('[name=summary]').fill('Publicação criada no teste automatizado.');await form.locator('[name=slide-heading]').fill('Um passo de cada vez');await form.locator('[name=slide-paragraphs]').fill('<script>window.injected=true</script>');
 await page.getByRole('button',{name:'Prévia',exact:true}).click();await expect(page.locator('#story-count')).toHaveText('1 de 1');await page.getByRole('button',{name:'Fechar story',exact:true}).click();await page.getByRole('button',{name:'Salvar e publicar no site'}).click();await expect(page.locator('#story-editor')).not.toBeVisible();
 const result=await(await page.request.get('/api/stories.php')).json();expect(result.data.stories[0].id).toBe('story-teste');expect(await page.evaluate(()=>window.injected)).toBeUndefined();
});
test('Kata calculates the sum without highest/lowest score and adds judges',async({page})=>{
 await login(page.request);await page.goto('/PainelKata.html');await expect(page.locator('.judge-input')).toHaveCount(5);
 for(let i=1;i<=5;i++){await page.locator(`#judge${i}`).fill(String([5,6,7,8,8][i-1]));await page.locator(`#judge${i}`).blur();}
 await expect(page.locator('#finalScore')).toHaveText('21,00');await page.locator('#removeJudgeTaskbar').click();await expect(page.locator('.judge-input')).toHaveCount(3);await page.locator('#addJudgeTaskbar').click();await expect(page.locator('.judge-input')).toHaveCount(5);
 expect(await page.locator('.uy-story-reader').count()).toBe(0);
});
test('Kumite controls score, timer and pause without opening a story',async({page})=>{
 await login(page.request);await page.goto('/PainelKumite.html');await page.waitForFunction(()=>window.UY?.ready===true);
 await page.locator('[data-action-click=a2]').click();await expect(page.locator('#shiroWazaari')).toHaveValue('1');await page.locator('[data-action-click=a3]').click();await expect(page.locator('#shiroWazaari')).toHaveValue('0');
 await page.locator('#startTimer').click();await expect(page.locator('#timerDisplay')).not.toHaveText('2:00');await page.locator('#pauseTimer').click();const time=await page.locator('#timerDisplay').innerText();await page.waitForTimeout(1100);await expect(page.locator('#timerDisplay')).toHaveText(time);
 expect(await page.locator('.uy-story-reader').count()).toBe(0);
});

test('desktop header stays within the viewport and login remains legible',async({page})=>{
 await page.goto('/stories.html');await closeStory(page);await page.mouse.move(5,800);
 for(const width of [1024,1280,1440]){
  await page.setViewportSize({width,height:900});await page.waitForTimeout(80);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);
 }
 await expect(page.locator('#loginUser')).toHaveCSS('background-color','rgb(255, 255, 255)');
});
