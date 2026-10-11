/* Standalone startup. No Utsukushi Yama header, stylesheet, story or API is requested. */
(()=>{
  const loaded=new Map();
  function loadScript(src){
    if(!loaded.has(src))loaded.set(src,new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=src;script.onload=resolve;script.onerror=()=>reject(new Error(`Falha ao carregar ${src}`));document.head.append(script);}));
    return loaded.get(src);
  }
  const storagePrefix=`placar:${location.pathname.slice(0,location.pathname.lastIndexOf('/'))}:`;
  window.PP={loadScript,store:{get(key){try{return localStorage.getItem(storagePrefix+key);}catch{return null;}},set(key,value){try{localStorage.setItem(storagePrefix+key,value);}catch{}}},notify(message){
    document.querySelector('.pp-notice')?.remove();const notice=document.createElement('div');notice.className='pp-notice';notice.setAttribute('role','status');notice.textContent=message;document.body.append(notice);setTimeout(()=>notice.remove(),8000);
  }};
  document.addEventListener('error',event=>{if(event.target instanceof HTMLImageElement&&!event.target.src.endsWith('/img/logo.svg'))event.target.src='img/logo.svg';},true);
  async function start(){
    await loadScript('assets/vendor/jquery.min.js');await loadScript('assets/vendor/bootstrap.bundle.min.js');
    await loadScript('js/auth.js');await window.PanelAuth.init();
    const response=await fetch('js/pages.json');if(!response.ok)throw new Error('Manifesto do placar indisponível.');
    const pages=await response.json();const page=location.pathname.split('/').pop()||'PainelLanding.html';
    for(const src of pages[page]?.scripts||[])await loadScript(src);
    document.querySelectorAll('[data-current-year]').forEach(e=>e.textContent=new Date().getFullYear());
    document.dispatchEvent(new Event('placar:ready'));
    if(document.body.dataset.workspace&&typeof adjustElementSizes==='function')adjustElementSizes();
    window.PP.ready=true;
  }
  start().catch(error=>{console.error(error);window.PP.notify('Não foi possível iniciar o placar. Recarregue a página.');});
})();
