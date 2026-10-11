const {test,expect}=require('@playwright/test');
const fs=require('node:fs');
const modulePath='/painel-placar';
function fixtures(){return JSON.parse(fs.readFileSync('storage/test-fixtures.json','utf8'));}
async function loginPanel(request,name='admin',prefix=modulePath){
 const response=await request.post(`${prefix}/api/login.php`,{data:{username:`pp_test_${name}`,password:fixtures().panelPassword}});expect(response.status()).toBe(200);return response;
}
async function loginSite(request){const response=await request.post('/api/login.php',{data:{username:'uy_test_admin',password:fixtures().password}});expect(response.status()).toBe(200);return response;}
test('site accounts and cookies do not authorize the standalone scoreboard',async({request})=>{
 const site=await loginSite(request);
 expect((await request.get(`${modulePath}/PainelKata.html`,{maxRedirects:0})).status()).toBe(302);
 expect((await request.post(`${modulePath}/api/login.php`,{data:{username:'uy_test_admin',password:fixtures().password}})).status()).toBe(401);
 const cookie=site.headers()['set-cookie'].match(/uy_session=([^;]+)/)[1];
 expect((await request.get(`${modulePath}/PainelKata.html`,{maxRedirects:0,headers:{Cookie:`pp_session=${cookie}`}})).status()).toBe(302);
});
test('panel accounts do not authorize the library and logout affects only its own product',async({request})=>{
 const panel=await loginPanel(request);expect(panel.headers()['set-cookie']).toContain('pp_session=');expect(panel.headers()['set-cookie']).toContain('path=/painel-placar/');expect(panel.headers()['set-cookie']).toContain('HttpOnly');
 expect((await request.get('/Projeto-Shinkyoku.html',{maxRedirects:0})).status()).toBe(302);
 await loginSite(request);await request.post(`${modulePath}/api/logout.php`,{data:{}});
 expect((await request.get('/Projeto-Shinkyoku.html',{maxRedirects:0})).status()).toBe(200);
 expect((await request.get(`${modulePath}/PainelKata.html`,{maxRedirects:0})).status()).toBe(302);
 await loginPanel(request);await request.post('/api/logout.php',{data:{}});
 expect((await request.get(`${modulePath}/PainelKata.html`,{maxRedirects:0})).status()).toBe(200);
 expect((await request.get('/Projeto-Shinkyoku.html',{maxRedirects:0})).status()).toBe(302);
});
test('panel validity and allowed modes are checked on the server',async({request})=>{
 for(const name of ['expired','disabled'])expect((await request.post(`${modulePath}/api/login.php`,{data:{username:`pp_test_${name}`,password:fixtures().panelPassword}})).status()).toBe(401);
 const session=await loginPanel(request,'kata');expect((await session.json()).data.user.permissions).toEqual(['kata']);
 expect((await request.get(`${modulePath}/PainelKata.html`,{maxRedirects:0})).status()).toBe(200);
 for(const mode of ['PainelKumite.html','PainelKumiteJogai.html'])expect((await request.get(`${modulePath}/${mode}`,{maxRedirects:0})).status()).toBe(302);
 expect((await request.post(`${modulePath}/api/logout.php`,{data:{},headers:{Origin:'https://unrelated.example'}})).status()).toBe(403);
});
test('module private files are blocked and original bookmarks redirect to the module',async({request})=>{
 for(const path of ['config/local.php','config/environment.php','api/config.php','placar_database.sql','tools/create-user.php'])expect((await request.get(`${modulePath}/${path}`)).status()).toBe(403);
 const legacy=await request.get('/PainelKata.html',{maxRedirects:0});expect(legacy.status()).toBe(302);expect(legacy.headers().location).toBe('painel-placar/PainelKata.html');
});
test('module login screen works on mobile and routes a Kata-only account correctly',async({page})=>{
 await page.setViewportSize({width:360,height:740});await page.goto(`${modulePath}/PainelPlacar.html`);
 await page.locator('#loginUsername').fill('pp_test_kata');await page.locator('#panelPassword').fill(fixtures().panelPassword);await page.locator('#loginButton').click();
 await expect(page).toHaveURL(/painel-placar\/PainelKata.html/);await expect(page.locator('.judge-input')).toHaveCount(5);
 expect(await page.locator('.uy-story-reader').count()).toBe(0);
});
test('Kata calculates the sum without highest/lowest score and adds judges',async({page})=>{
 await loginPanel(page.request);await page.goto(`${modulePath}/PainelKata.html`);await expect(page.locator('.judge-input')).toHaveCount(5);
 for(let i=1;i<=5;i++){await page.locator(`#judge${i}`).fill(String([5,6,7,8,8][i-1]));await page.locator(`#judge${i}`).blur();}
 await expect(page.locator('#finalScore')).toHaveText('21,00');await page.locator('#removeJudgeTaskbar').click();await expect(page.locator('.judge-input')).toHaveCount(3);await page.locator('#addJudgeTaskbar').click();await expect(page.locator('.judge-input')).toHaveCount(5);
 expect(await page.locator('.uy-story-reader').count()).toBe(0);
});
test('Kumite and Jogai control score, timer and pause independently of the site',async({page})=>{
 await loginPanel(page.request);
 for(const filename of ['PainelKumite.html','PainelKumiteJogai.html']){
  await page.goto(`${modulePath}/${filename}`);await page.waitForFunction(()=>window.PP?.ready===true);
  expect(await page.locator('#shiroWazaari').evaluate(input=>parseFloat(getComputedStyle(input).fontSize))).toBeGreaterThanOrEqual(60);
  await page.locator('[data-action-click=a2]').click();await expect(page.locator('#shiroWazaari')).toHaveValue('1');await page.locator('[data-action-click=a3]').click();await expect(page.locator('#shiroWazaari')).toHaveValue('0');
  await page.locator('#startTimer').click();await expect(page.locator('#timerDisplay')).not.toHaveText('2:00');await page.locator('#pauseTimer').click();const time=await page.locator('#timerDisplay').innerText();await page.waitForTimeout(1100);await expect(page.locator('#timerDisplay')).toHaveText(time);
  expect(await page.locator('.uy-story-reader').count()).toBe(0);
 }
});
test('all panel pages work when only the module directory is served',async({page})=>{
 test.setTimeout(90000);const base='http://127.0.0.1:8082';const errors=[];const paths=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',request=>{const url=new URL(request.url());if(url.origin===base)paths.push(url.pathname);});
 const login=await page.request.post(`${base}/api/login.php`,{data:{username:'pp_test_admin',password:fixtures().panelPassword}});expect(login.status()).toBe(200);
 const pages=JSON.parse(fs.readFileSync('painel-placar/js/pages.json','utf8'));
 for(const filename of Object.keys(pages)){const response=await page.goto(`${base}/${filename}`);expect(response.status()).toBe(200);await page.waitForFunction(()=>window.PP?.ready===true);}
 expect(errors).toEqual([]);expect(paths.some(path=>/header\.html|footer\.html|\/js\/site\.js|stories|access-levels/.test(path))).toBe(false);
 expect(await page.evaluate(()=>typeof window.KyokushinLoginSystem)).toBe('undefined');
 expect((await page.request.get(`${base}/config/local.php`)).status()).toBe(403);
});
