/* The same 1080×1920 artwork is displayed on the site and exported to Instagram. */
window.StoryArtwork = (() => {
  'use strict';
  const width=1080,height=1920;
  const palette={paper:'#faf5ee',ink:'#252525',red:'#d31e26',muted:'#665e55',line:'#e5dcd1'};
  function lines(ctx,text,maxWidth){
    const words=text.split(/\s+/),result=[];let line='';
    for(const word of words){const next=line?`${line} ${word}`:word;if(ctx.measureText(next).width>maxWidth&&line){result.push(line);line=word;}else line=next;}
    if(line)result.push(line);return result;
  }
  function layout(ctx,slide,size){
    ctx.font=`600 ${size}px Georgia, serif`;const heading=lines(ctx,slide.heading,860);
    const bodySize=Math.max(28,Math.round(size*.66));ctx.font=`${bodySize}px system-ui, sans-serif`;
    const paragraphs=slide.paragraphs.map(text=>lines(ctx,text,850));
    const total=heading.length*size*1.15+50+paragraphs.reduce((sum,p)=>sum+p.length*bodySize*1.5+40,0);
    return {heading,paragraphs,total,size,bodySize};
  }
  function render(story,slide,index){
    const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const c=canvas.getContext('2d');
    c.fillStyle=palette.paper;c.fillRect(0,0,width,height);
    // Original geometric landscape: mountain, rising sun and a red seal.
    c.fillStyle='#d31e260e';c.beginPath();c.arc(1000,330,420,0,Math.PI*2);c.fill();
    c.strokeStyle=palette.line;c.lineWidth=2;
    for(let y=0;y<height;y+=30){c.beginPath();c.moveTo(0,y);c.lineTo(width,y);c.stroke();}
    c.fillStyle=palette.paper;c.fillRect(58,250,964,1210);
    c.fillStyle=palette.red;c.fillRect(80,130,7,84);
    c.font='700 28px system-ui, sans-serif';c.fillStyle=palette.ink;c.fillText('UTSUKUSHI YAMA',112,163);
    c.font='24px system-ui, sans-serif';c.fillStyle=palette.muted;c.fillText('KYOKUSHIN · REFLEXÕES',112,204);
    c.textAlign='right';c.font='26px system-ui, sans-serif';c.fillText(`${String(index+1).padStart(2,'0')} / ${String(story.slides.length).padStart(2,'0')}`,1000,168);c.textAlign='left';
    c.fillStyle=palette.red;c.font='700 26px system-ui, sans-serif';c.fillText(story.category.toLocaleUpperCase('pt-BR'),80,330,900);
    let design;
    for(let size=104;size>=44;size-=2){design=layout(c,slide,size);if(design.total<1000)break;}
    if(design.total>1050)throw new Error('Há texto demais nesta tela. Divida o conteúdo em mais telas.');
    let y=410+Math.max(0,(950-design.total)/2);
    c.fillStyle=palette.ink;c.font=`600 ${design.size}px Georgia, serif`;
    for(const line of design.heading){y+=design.size*1.15;c.fillText(line,80,y);}
    y+=45;c.fillStyle=palette.muted;c.fillRect(80,y,96,4);y+=30;
    c.font=`${design.bodySize}px system-ui, sans-serif`;
    for(const paragraph of design.paragraphs){for(const line of paragraph){y+=design.bodySize*1.5;c.fillText(line,80,y);}y+=40;}
    c.fillStyle=palette.red;c.beginPath();c.arc(844,1524,82,0,Math.PI*2);c.fill();
    c.fillStyle='#9b968d';c.beginPath();c.moveTo(0,1760);c.lineTo(332,1450);c.lineTo(625,1760);c.lineTo(744,1640);c.lineTo(1080,1850);c.lineTo(1080,1920);c.lineTo(0,1920);c.closePath();c.fill();
    c.fillStyle=palette.ink;c.beginPath();c.moveTo(0,1840);c.lineTo(500,1525);c.lineTo(895,1880);c.lineTo(1080,1780);c.lineTo(1080,1920);c.lineTo(0,1920);c.closePath();c.fill();
    c.fillStyle=palette.paper;c.font='22px system-ui, sans-serif';c.fillText(story.credit,80,1830,920);
    c.font='700 23px system-ui, sans-serif';c.fillText('DISCIPLINA. CONSCIÊNCIA. SUPERAÇÃO.',80,1878,920);
    return canvas;
  }
  return {width,height,palette,render};
})();
