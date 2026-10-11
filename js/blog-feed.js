/* Public summaries are shared by the home and blog without fetching a protected page. */
window.UY.initBlogFeed=async()=>{
  const container=document.getElementById('blog-cards-container');if(!container)return;
  try{
    const response=await fetch('data/blog-cards.html');if(!response.ok)throw new Error('Resumos indisponíveis.');
    const template=document.createElement('template');template.innerHTML=await response.text();
    const cards=[...template.content.querySelectorAll('[data-blog-card]')];
    const limit=Number(container.dataset.limit)||cards.length;
    const fragment=document.createDocumentFragment();
    for(const card of cards.slice(0,limit)){card.classList.remove('wow','fadeInUp');fragment.append(card);}
    container.replaceChildren(fragment);
  }catch(error){container.textContent='Não foi possível carregar as notícias. Recarregue a página.';console.error(error);}
};
