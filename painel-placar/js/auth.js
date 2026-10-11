/* Independent product identity; only the placar_* tables and pp_session cookie are used. */
window.PanelAuth=(()=>{
  let user=null;
  async function request(endpoint,body){
    const response=await fetch(`api/${endpoint}.php`,{method:body===undefined?'GET':'POST',credentials:'same-origin',headers:body===undefined?{}:{'Content-Type':'application/json'},...(body===undefined?{}:{body:JSON.stringify(body)})});
    let result;try{result=await response.json();}catch{throw new Error('Verifique a configuração PHP do placar.');}
    if(!result.success)throw new Error(result.error||'Não foi possível concluir a operação.');
    return result.data;
  }
  function setUser(raw){user=raw?{...raw,displayName:raw.nome_display,role:raw.nivel_acesso}:null;return user;}
  async function login(username,password){return setUser((await request('login',{username,password})).user);}
  async function logout(){
    try{await request('logout',{});setUser(null);location.href='PainelPlacar.html';}
    catch(error){window.PP.notify(error.message);}
  }
  async function init(){
    try{setUser((await request('check-session')).user);}catch(error){window.PP.notify(error.message);}
    if(document.body.dataset.workspace&&!user){location.replace('PainelPlacar.html');return;}
    document.getElementById('loginForm')?.addEventListener('submit',async event=>{
      event.preventDefault();const button=document.getElementById('loginButton'),error=document.getElementById('loginError');button.disabled=true;error.hidden=true;
      try{
        const account=await login(document.getElementById('loginUsername').value.trim(),document.getElementById('panelPassword').value);
        const mode=account.permissions.includes('kumite')?'Kumite':account.permissions.includes('kata')?'Kata':null;
        if(!mode)throw new Error('Esta conta não tem modos de placar liberados.');
        location.href=`Painel${mode}.html`;
      }catch(failure){error.textContent=failure.message;error.hidden=false;}finally{button.disabled=false;}
    });
    if(document.body.dataset.workspace)setInterval(async()=>{
      try{setUser((await request('check-session')).user);if(!user)location.replace('PainelPlacar.html?acesso=expirado');}
      catch(error){window.PP.notify(error.message);}
    },60000);
  }
  return {init,login,logout,request,getCurrentUser:()=>user};
})();
function checkAuth(){return window.PanelAuth.getCurrentUser();}
function logout(){return window.PanelAuth.logout();}
function setupUserLogo(user){for(const id of ['userLogo','speedDialLogo']){const image=document.getElementById(id);if(image)image.src=user?.logo||'img/logo.svg';}}
