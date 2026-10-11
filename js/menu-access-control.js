/* Menu hints use verified API state. Real authorization is enforced by page.php. */
window.MenuAccessControl = (() => {
  function dialog(title,message) {
    document.querySelector('.uy-access-dialog')?.remove();
    const modal=document.createElement('dialog');modal.className='uy-access-dialog';
    const content=document.createElement('div');const h=document.createElement('h2');h.textContent=title;
    const p=document.createElement('p');p.textContent=message;content.append(h,p);
    const form=document.createElement('form');form.method='dialog';const close=document.createElement('button');close.className='btn btn-primary';close.textContent='Entendi';form.append(close);content.append(form);modal.append(content);document.body.append(modal);
    modal.addEventListener('click',event=>{if(event.target===modal)modal.close();});modal.showModal();
  }
  function addLockIcons() {
    document.querySelectorAll('.restricted[data-level]').forEach(item=>{
      const required=item.dataset.level;const link=item.matches('a')?item:item.querySelector('a');if(!link)return;
      const locked=required==='breve'||!window.KyokushinLoginSystem.hasAccess(required);
      item.classList.toggle('locked',locked);item.classList.toggle('unlocked',!locked);
      link.querySelector(':scope > .uy-access-label')?.remove();
      if(locked){const label=document.createElement('span');label.className='uy-access-label '+(required==='breve'?'breve-label':'lock-icon');label.textContent=required==='breve'?'BREVE':'🔒';link.prepend(label);}
    });
  }
  function showUpgradeMessage(){dialog('Conteúdo para assinantes','Entre na sua conta pelo menu ou renove seu plano para acessar este conteúdo.');}
  function showConstructionModal(){dialog('Em breve','Este conteúdo ainda está em preparação.');}
  function showExpiredModal(){dialog('Sessão encerrada','Entre novamente na sua conta para continuar.');}
  document.addEventListener('click',event=>{
    const link=event.target.closest('a');if(!link)return;
    const items=[];let parent=link;while(parent){if(parent.matches('.restricted[data-level]'))items.push(parent);parent=parent.parentElement;}
    const blocked=items.find(item=>item.dataset.level==='breve'||!window.KyokushinLoginSystem.hasAccess(item.dataset.level));
    if(blocked){event.preventDefault();event.stopImmediatePropagation();blocked.dataset.level==='breve'?showConstructionModal():showUpgradeMessage();}
  },true);
  document.addEventListener('auth:changed',addLockIcons);addLockIcons();
  const modal=new URLSearchParams(location.search).get('modal');
  if(modal==='upgrade')showUpgradeMessage();if(modal==='expired')showExpiredModal();
  return {addLockIcons,showUpgradeMessage,showConstructionModal,showExpiredModal};
})();
