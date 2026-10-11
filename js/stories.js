window.UYStories = (() => {
  'use strict';
  let stories=[],reader,index=0,selected,paused=false,timer,last=0,elapsed=0,art=[],initialized=false,previousFocus;
  const duration=15000;
  const folder=location.pathname.slice(0,location.pathname.lastIndexOf('/'));
  const dailyKey=`uy:story-auto-day:${folder||'/'}`;
  function dayInBrasilia(){return new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());}
  function automaticallySeenToday(){
    const today=dayInBrasilia();
    try{if(localStorage.getItem(dailyKey)===today)return true;}catch{}
    return document.cookie.split('; ').some(value=>value===`uy_story_day=${today}`);
  }
  function rememberAutomaticDay(){
    const day=dayInBrasilia();try{localStorage.setItem(dailyKey,day);}catch{}
    // The cookie retains the cosmetic preference when localStorage is unavailable.
    document.cookie=`uy_story_day=${day}; Path=${encodeURI(folder||'')}/; Max-Age=93600; SameSite=Lax${location.protocol==='https:'?'; Secure':''}`;
  }
  function element(tag,className,text){const e=document.createElement(tag);if(className)e.className=className;if(text!==undefined)e.textContent=text;return e;}
  function button(text,action,className='btn btn-outline-secondary'){const e=element('button',className,text);e.type='button';e.addEventListener('click',action);return e;}
  function artwork(story,i){return window.StoryArtwork.render(story,story.slides[i],i);}
  function buildReader(){
    reader=element('dialog','uy-story-reader');reader.setAttribute('aria-label','Stories Utsukushi Yama');
    const progress=element('div','uy-story-progress');progress.id='story-progress';reader.append(progress);
    const head=element('div','uy-story-reader-head');head.append(element('strong','','Utsukushi Yama · Reflexões'));
    const pause=button('Ⅱ',()=>setPaused(!paused),'');pause.id='story-pause';pause.setAttribute('aria-label','Pausar story');
    const close=button('×',()=>reader.close(),'');close.setAttribute('aria-label','Fechar story');head.append(pause,close);reader.append(head);
    const stage=element('div','uy-story-stage');stage.id='story-stage';const image=element('img');image.id='story-image';image.alt='';stage.append(image);
    const transcript=element('div','visually-hidden');transcript.id='story-accessible';transcript.setAttribute('aria-live','polite');stage.append(transcript);reader.append(stage);
    let startX;stage.addEventListener('pointerdown',e=>startX=e.clientX);stage.addEventListener('pointerup',e=>{if(Math.abs(e.clientX-startX)>45)move(e.clientX<startX?1:-1);});
    const controls=element('div','uy-story-controls');const prev=button('←',()=>move(-1),'');prev.setAttribute('aria-label','Tela anterior');prev.id='story-prev';
    const count=element('span');count.id='story-count';const next=button('→',()=>move(1),'');next.setAttribute('aria-label','Próxima tela');next.id='story-next';controls.append(prev,count,next);reader.append(controls);
    const links=element('div','uy-story-reader-links');const library=element('a','','Ler e ver todas');library.id='story-read-link';links.append(library);
    const exportButton=button('Baixar para Instagram',async()=>{await exportStory(selected);},'');exportButton.style.cssText='background:none;border:0;text-decoration:underline;';links.append(exportButton);reader.append(links);
    reader.addEventListener('close',()=>{cancelAnimationFrame(timer);previousFocus?.focus();});
    reader.addEventListener('click',e=>{if(e.target===reader)reader.close();});
    reader.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1);}if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}if(e.code==='Space'&&!e.target.matches('button,a')){e.preventDefault();setPaused(!paused);}});
    reader.addEventListener('focusin',e=>{if(e.target.closest('.uy-story-reader-links'))setPaused(true);});
    reader.addEventListener('pointerenter',()=>setPaused(true));reader.addEventListener('pointerleave',()=>{ /* Resume explicitly so reading time stays under visitor control. */ });
    document.addEventListener('visibilitychange',()=>{if(document.hidden)setPaused(true);});
    document.body.append(reader);
  }
  function setPaused(value){paused=value;if(!reader)return;const b=reader.querySelector('#story-pause');b.textContent=paused?'▶':'Ⅱ';b.setAttribute('aria-label',paused?'Continuar story':'Pausar story');}
  function draw(){
    const slide=selected.slides[index];const image=reader.querySelector('#story-image');image.src=art[index];
    reader.querySelector('#story-accessible').textContent=[slide.heading,...slide.paragraphs].join(' ');
    reader.querySelector('#story-count').textContent=`${index+1} de ${selected.slides.length}`;
    reader.querySelector('#story-prev').disabled=index===0;reader.querySelector('#story-next').textContent=index===selected.slides.length-1?'✓':'→';
    reader.querySelector('#story-next').setAttribute('aria-label',index===selected.slides.length-1?'Concluir story':'Próxima tela');
    const link=reader.querySelector('#story-read-link');link.href=`stories.html#${encodeURIComponent(selected.id)}`;
    reader.querySelectorAll('.uy-story-progress i').forEach((bar,i)=>bar.style.width=i<index?'100%':'0');elapsed=0;
  }
  function move(step){const next=index+step;if(next>=selected.slides.length){reader.close();return;}if(next<0)return;index=next;draw();}
  function tick(now){if(!reader.open)return;if(!paused)elapsed+=Math.min(now-last,250);last=now;const bars=reader.querySelectorAll('.uy-story-progress i');if(bars[index])bars[index].style.width=`${Math.min(100,elapsed/duration*100)}%`;if(elapsed>=duration)move(1);timer=requestAnimationFrame(tick);}
  function open(story){
    if(!story?.slides.length)return;cancelAnimationFrame(timer);selected=story;index=0;previousFocus=document.activeElement;
    art=story.slides.map((_,i)=>artwork(story,i).toDataURL('image/png'));
    const progress=reader.querySelector('#story-progress');progress.replaceChildren();for(const _ of story.slides){const segment=element('span');segment.append(element('i'));progress.append(segment);}
    setPaused(matchMedia('(prefers-reduced-motion: reduce)').matches);draw();if(!reader.open)reader.showModal();last=performance.now();timer=requestAnimationFrame(tick);
  }
  function safeFilename(story){return /^[a-z0-9-]+$/.test(story.id)?story.id:'story';}
  function download(blob,name){const url=URL.createObjectURL(blob);const link=element('a');link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),30000);}
  async function exportStory(story){
    if(!story)return;setPaused(true);const buttons=[...document.querySelectorAll('[data-export]')];buttons.forEach(b=>b.disabled=true);
    try {
      window.UY.notify('Gerando imagens 1080 × 1920…');await window.UY.loadScript('assets/vendor/jszip.min.js');const zip=new JSZip();
      for(let i=0;i<story.slides.length;i++){
        const canvas=artwork(story,i);const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw new Error('Imagem indisponível.');zip.file(`${safeFilename(story)}-${String(i+1).padStart(2,'0')}.png`,blob);
      }
      zip.file('LEGENDA.txt',`${story.title}\n\n${story.summary}\n\n${story.credit}\n${story.sourceUrl||''}\n\nUtsukushi Yama Kyokushin\n\n${story.slides.map(s=>[s.heading,...s.paragraphs].join('\n')).join('\n\n')}\n`);
      download(await zip.generateAsync({type:'blob',compression:'STORE'}),`${safeFilename(story)}-instagram.zip`);window.UY.notify('Imagens prontas. Extraia o ZIP e publique as telas em ordem.');
    }catch(error){window.UY.notify(`Não foi possível gerar as imagens: ${error.message}`);}finally{buttons.forEach(b=>b.disabled=false);}
  }
  function renderLibrary(){
    const library=document.getElementById('story-library');if(!library)return;library.replaceChildren();const transcripts=document.getElementById('story-transcripts');transcripts.replaceChildren();
    const admin=window.KyokushinLoginSystem.getCurrentUser()?.level==='admin';
    for(const story of stories){
      const card=element('article','uy-story-card');const cover=button('',()=>open(story),'uy-story-card-cover');cover.setAttribute('aria-label',`Ler ${story.title}`);const image=element('img');image.src=artwork(story,0).toDataURL();image.alt='';cover.append(image);card.append(cover);
      const body=element('div','uy-story-card-body');body.append(element('p','uy-eyebrow',story.category),element('h2','',story.title),element('p','',story.summary));const tools=element('div','uy-story-tools');tools.append(button('Ler story',()=>open(story),'btn btn-primary'));
      const exp=button('Baixar para Instagram',()=>exportStory(story));exp.dataset.export=story.id;tools.append(exp);if(admin)tools.append(button('Editar',()=>edit(story)));body.append(tools);card.append(body);library.append(card);
      const section=element('article');section.id=story.id;section.append(element('h2','',story.title));
      for(const slide of story.slides){const detail=element('details');detail.open=true;detail.append(element('summary','',slide.heading));for(const p of slide.paragraphs)detail.append(element('p','',p));section.append(detail);}
      section.append(element('p','small',`Fonte: ${story.credit}`));if(story.sourceUrl){const a=element('a','','Ver fonte');a.href=story.sourceUrl;a.target='_blank';a.rel='noopener noreferrer';section.append(a);}if(story.sourceNote)section.append(element('p','small text-muted',story.sourceNote));transcripts.append(section);
    }
    document.getElementById('new-story').hidden=!admin;document.getElementById('backup-stories').hidden=!admin;
    if(!admin)document.getElementById('story-editor').hidden=true;
  }
  function addSlide(slide={heading:'',paragraphs:[]}){
    const container=document.getElementById('editor-slides');if(container.children.length>=12)return;
    const row=element('div','uy-editor-slide');const title=element('input');title.name='slide-heading';title.required=true;title.maxLength=160;title.value=slide.heading;
    const label=element('label','','Título da tela');label.append(title);row.append(label);
    const text=element('textarea');text.name='slide-paragraphs';text.maxLength=650;text.value=slide.paragraphs.join('\n\n');
    const bodyLabel=element('label','','Texto (separe os parágrafos com uma linha em branco)');bodyLabel.append(text);row.append(bodyLabel,button('Remover tela',()=>row.remove()));container.append(row);
  }
  function edit(story){
    const form=document.getElementById('story-form');for(const name of ['id','title','category','summary','credit','sourceUrl'])form.elements[name].value=story?.[name]||'';
    form.elements.id.readOnly=!!story;document.getElementById('editor-slides').replaceChildren();for(const slide of story?.slides||[{heading:'',paragraphs:[]}])addSlide(slide);
    document.getElementById('editor-status').textContent='';const editor=document.getElementById('story-editor');editor.hidden=false;editor.scrollIntoView({behavior:'smooth'});
  }
  function readForm(){
    const form=document.getElementById('story-form');if(!form.reportValidity())return null;
    const story=Object.fromEntries(['id','title','category','summary','credit','sourceUrl'].map(n=>[n,form.elements[n].value.trim()]));story.symbol='勇';
    story.slides=[...document.querySelectorAll('.uy-editor-slide')].map(row=>({heading:row.querySelector('input').value.trim(),paragraphs:row.querySelector('textarea').value.split(/\n\s*\n/).map(p=>p.trim()).filter(Boolean)}));
    if(!story.slides.length){document.getElementById('editor-status').textContent='Adicione ao menos uma tela.';return null;}
    try{story.slides.forEach((_,i)=>artwork(story,i));}catch(error){document.getElementById('editor-status').textContent=error.message;return null;}return story;
  }
  function initializeEditor(){
    if(!document.getElementById('story-editor'))return;
    document.getElementById('new-story').addEventListener('click',()=>edit());document.getElementById('add-story-slide').addEventListener('click',()=>addSlide());document.getElementById('cancel-story').addEventListener('click',()=>document.getElementById('story-editor').hidden=true);
    document.getElementById('preview-story').addEventListener('click',()=>{const story=readForm();if(story)open(story);});
    document.getElementById('backup-stories').addEventListener('click',()=>download(new Blob([JSON.stringify({version:1,stories},null,2)],{type:'application/json'}),'stories-backup.json'));
    document.getElementById('story-form').addEventListener('submit',async event=>{
      event.preventDefault();const story=readForm();if(!story)return;const submit=event.submitter;submit.disabled=true;
      try {const result=await window.KyokushinLoginSystem.request('stories',{story});stories=result.stories;renderLibrary();document.getElementById('story-editor').hidden=true;window.UY.notify('Publicação salva no site. As imagens do Instagram já estão disponíveis.');}
      catch(error){document.getElementById('editor-status').textContent=error.message;}finally{submit.disabled=false;}
    });
    document.addEventListener('auth:changed',renderLibrary);
  }
  async function init(){
    if(initialized)return;initialized=true;buildReader();
    try {
      const data=await window.KyokushinLoginSystem.request('stories');stories=data.stories;
      if(!Array.isArray(stories))throw new Error('Conteúdo inválido.');renderLibrary();initializeEditor();
      if(!stories.length)return;
      const hash=decodeURIComponent(location.hash.slice(1));const requested=stories.find(s=>s.id===hash);const chosen=requested||stories[0];
      // An explicit story link remains available after today's automatic presentation.
      const show=()=>{
        if(!requested&&automaticallySeenToday())return;
        open(chosen);rememberAutomaticDay();
      };
      const existing=document.querySelector('dialog[open]');if(existing)existing.addEventListener('close',show,{once:true});else show();
    }catch(error){window.UY.notify('Não foi possível carregar os stories.');const target=document.getElementById('story-library');if(target)target.textContent='Publicações indisponíveis. Tente novamente.';console.error(error);}
  }
  return {init,open,exportStory,getStories:()=>stories};
})();
