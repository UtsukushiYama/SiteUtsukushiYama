/* One authentication flow for the library, story editor and scoreboards. */
window.KyokushinLoginSystem = (() => {
  'use strict';
  const levelHierarchy = {};
  let currentUser = null, initialized = false;
  async function request(endpoint, body) {
    const response = await fetch(`api/${endpoint}.php`, {
      method: body === undefined ? 'GET' : 'POST', credentials: 'same-origin',
      headers: body === undefined ? {} : { 'Content-Type':'application/json' },
      ...(body === undefined ? {} : { body:JSON.stringify(body) })
    });
    let payload; try { payload = await response.json(); } catch { throw new Error('A hospedagem não retornou JSON. Verifique PHP e a API.'); }
    if (!payload.success) throw new Error(payload.error || 'Não foi possível concluir a operação.');
    return payload.data;
  }
  function updateUI() {
    for (const id of ['loginUser','loginPassword','loginBtn']) { const element=document.getElementById(id); if(element)element.hidden=!!currentUser; }
    const logout=document.getElementById('logoutBtn'); if(logout){logout.hidden=!currentUser;logout.style.display=currentUser?'inline-block':'none';}
    const status=document.getElementById('userStatus'); if(status)status.textContent=currentUser?.displayName || 'Não logado';
    document.dispatchEvent(new CustomEvent('auth:changed',{detail:currentUser}));
  }
  function setUser(raw) {
    currentUser=raw ? { ...raw,level:raw.nivel_acesso,displayName:raw.nome_display,validDate:raw.data_expiracao, permissions:['kumite','kata'], logo:'img/about.png', role:raw.nivel_acesso==='admin'?'admin':'operator' } : null;
    updateUI(); return currentUser;
  }
  async function login(username,password) { const data=await request('login',{username,password});return setUser(data.user); }
  async function logout() {
    try { await request('logout',{}); } catch(error){ window.UY.notify(error.message);return; }
    setUser(null);
    if (document.body.dataset.requiredLevel) location.href='index.html';
  }
  async function init() {
    if(initialized)return;initialized=true;
    const response=await fetch('data/access-levels.json');if(!response.ok)throw new Error('Níveis de acesso indisponíveis.');
    const levels=await response.json();levels.forEach((level,index)=>levelHierarchy[level]=levels.slice(1,index+1));
    // Remove stale browser credentials from the legacy system; never treat cache as authorization.
    try { for(const key of ['kyokushin_login_session','kyokushin_session','uy_auth_token','uy_auth_user','userLevel','isLoggedIn','username'])localStorage.removeItem(key); } catch {}
    try { setUser((await request('check-session')).user); } catch(error){ setUser(null);window.UY.notify(error.message); }
    const button=document.getElementById('loginBtn');
    async function submit(event) {
      event.preventDefault(); if(button.disabled)return;button.disabled=true;
      try {
        await login(document.getElementById('loginUser').value.trim(),document.getElementById('loginPassword').value);
        document.getElementById('loginPassword').value='';window.UY.notify('Bem-vindo ao Utsukushi Yama.');
      } catch(error){window.UY.notify(error.message);}finally{button.disabled=false;}
    }
    button?.addEventListener('click',submit);
    document.getElementById('loginPassword')?.addEventListener('keydown',event=>{if(event.key==='Enter')submit(event);});
    document.getElementById('logoutBtn')?.addEventListener('click',logout);
    const form=document.getElementById('loginForm');
    form?.addEventListener('submit',async event=>{
      event.preventDefault();const button=document.getElementById('loginButton');const error=document.getElementById('loginError');button.disabled=true;error.hidden=true;
      try {
        const user=await login(document.getElementById('loginUsername').value.trim(),document.getElementById('panelPassword').value);
        if(!(levelHierarchy[user.level]||[]).includes('painelplacar'))throw new Error('Esta conta não tem acesso ao placar.');
        location.href='PainelKumite.html';
      } catch(e){error.textContent=e.message;error.hidden=false;}finally{button.disabled=false;}
    });
    setInterval(async()=>{
      if(!currentUser)return;
      try {const user=(await request('check-session')).user;setUser(user);if(!user && document.body.dataset.requiredLevel)location.href='index.html?modal=expired';}catch{}
    },300000);
  }
  return {init,login,logout,getCurrentUser:()=>currentUser,levelHierarchy,request,hasAccess:required=>!required || (levelHierarchy[currentUser?.level||'guest']||[]).includes(required)};
})();
