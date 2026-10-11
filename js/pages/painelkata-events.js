document.addEventListener("site:ready", () => {
  document.querySelector('[data-action-focus="a0"]')?.addEventListener("focus", function(event) { const result=(function(event){clearCompetitorName(this)}).call(this,event); if(result===false)event.preventDefault(); });
  document.querySelector('[data-action-blur="a1"]')?.addEventListener("blur", function(event) { const result=(function(event){restoreCompetitorName(this)}).call(this,event); if(result===false)event.preventDefault(); });
});
