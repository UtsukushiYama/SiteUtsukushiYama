document.addEventListener("site:ready", () => {
  document.querySelector('[data-action-click="a0"]')?.addEventListener("click", function(event) { const result=(function(event){window.print()}).call(this,event); if(result===false)event.preventDefault(); });
});
