/* Shared interactions start after the header/footer are present. */
(() => {
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduced && window.WOW)new WOW().init();
  for(const selector of ['.header-carousel','.testimonial-carousel'])if($(selector).length)$(selector).owlCarousel({autoplay:!reduced,smartSpeed:800,loop:$(selector).children().length>1,nav:false,dots:true,items:1,dotsData:true});
  if($('[data-toggle="counter-up"]').length)$('[data-toggle="counter-up"]').counterUp({delay:10,time:1000});
  if($.fn.datetimepicker){$('.date').datetimepicker({format:'L'});$('.time').datetimepicker({format:'LT'});}
  const back=document.querySelector('.back-to-top');
  function scroll(){if(back)back.style.display=scrollY>300?'block':'none';}
  addEventListener('scroll',scroll,{passive:true});scroll();back?.addEventListener('click',event=>{event.preventDefault();window.scrollTo({top:0,behavior:reduced?'instant':'smooth'});});
  function alignMenus() {
    document.querySelectorAll('#header .nav-item > .dropdown-menu').forEach(menu => {
      menu.classList.toggle('uy-align-end', menu.parentElement.getBoundingClientRect().left + menu.offsetWidth > innerWidth);
    });
  }
  alignMenus(); addEventListener('resize', alignMenus);
  document.querySelectorAll('.dropdown-submenu').forEach(menu=>{
    const trigger=menu.querySelector(':scope > a');if(!trigger)return;
    function position(){const panel=menu.querySelector('.dropdown-submenu-content');if(panel){panel.classList.remove('open-left');if(panel.getBoundingClientRect().right>innerWidth)panel.classList.add('open-left');}}
    trigger.addEventListener('mouseenter',position);
    trigger.addEventListener('click',event=>{if(trigger.getAttribute('href')==='#'){event.preventDefault();event.stopPropagation();menu.classList.toggle('active');trigger.setAttribute('aria-expanded',menu.classList.contains('active'));position();}});
  });
  document.querySelectorAll('.sb-tab-btn').forEach(button=>button.addEventListener('click',()=>{
    document.querySelectorAll('.sb-tab-btn').forEach(b=>b.classList.toggle('active',b===button));
    document.querySelectorAll('.sb-item').forEach(item=>item.classList.toggle('sb-hidden',button.dataset.cat!=='todos'&&item.dataset.cat!==button.dataset.cat));
  }));
  const form=document.getElementById('appointmentForm');
  form?.addEventListener('submit',event=>{event.preventDefault();window.UY.notify('Este formulário ainda não envia mensagens. Use o WhatsApp ou e-mail na página de contato.');});
})();
// Shared image viewer. Empty galleries never index undefined.
function showImage(src){const image=document.getElementById('modalImage');if(image)image.src=src;}
function moveGallery(direction){const images=Array.from(document.querySelectorAll('.gallery-img')).map(img=>img.src);const modal=document.getElementById('modalImage');if(!modal||!images.length)return;const index=images.indexOf(modal.src);modal.src=images[(Math.max(index,0)+direction+images.length)%images.length];}
function prevImage(){moveGallery(-1);}function nextImage(){moveGallery(1);}
