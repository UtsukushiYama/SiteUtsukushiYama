document.addEventListener("site:ready", () => {
  document.querySelector('[data-action-click="a0"]')?.addEventListener("click", function(event) { const result=(function(event){openDogiModal()}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a1"]')?.addEventListener("click", function(event) { const result=(function(event){openObiModal()}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a2"]')?.addEventListener("click", function(event) { const result=(function(event){openHakamaModal()}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a3"]')?.addEventListener("click", function(event) { const result=(function(event){closeDogiModal(event)}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a4"]')?.addEventListener("click", function(event) { const result=(function(event){event.stopPropagation()}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a5"]')?.addEventListener("click", function(event) { const result=(function(event){closeDogiModal()}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a6"]')?.addEventListener("click", function(event) { const result=(function(event){changeDogiSlide(-1)}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a7"]')?.addEventListener("click", function(event) { const result=(function(event){changeDogiSlide(1)}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a8"]')?.addEventListener("click", function(event) { const result=(function(event){closeObiModal(event)}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a9"]')?.addEventListener("click", function(event) { const result=(function(event){event.stopPropagation()}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a10"]')?.addEventListener("click", function(event) { const result=(function(event){closeObiModal()}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a11"]')?.addEventListener("click", function(event) { const result=(function(event){changeObiSlide(-1)}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a12"]')?.addEventListener("click", function(event) { const result=(function(event){changeObiSlide(1)}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a13"]')?.addEventListener("click", function(event) { const result=(function(event){closeHakamaModal(event)}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a14"]')?.addEventListener("click", function(event) { const result=(function(event){event.stopPropagation()}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-click="a15"]')?.addEventListener("click", function(event) { const result=(function(event){closeHakamaModal()}).call(this,event); if(result===false)event.preventDefault(); });
});
